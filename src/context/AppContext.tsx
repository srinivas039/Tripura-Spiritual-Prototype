import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '../i18n';
import { getTranslation } from '../i18n';
import { en } from '../i18n/en';
import { ambientEngine } from '../audio/ambientEngine';

export interface UserSubscription {
  hasActivePlan: boolean;
  planId: string | null;
  planName: string;
  validUntil: string;
  unlockedDays: number[]; // e.g. [1, 2, 3, 4, 5]
}

export interface UserProfile {
  isLoggedIn: boolean;
  phone: string;
  name: string;
  subscription: UserSubscription;
}

export interface PlanItem {
  id: string;
  name: string;
  price: number;
  type: 'plan' | 'demo' | '1on1';
  details?: string;
}

export interface VideoItem {
  day: number;
  title: string;
  duration: string;
  videoUrl?: string;
  desc?: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
  user: UserProfile;
  login: (phone: string, name?: string) => void;
  logout: () => void;
  switchDemoUser: (phone: string) => void;
  
  // Auth Modal
  isAuthOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;

  // Payment Modal
  isPaymentOpen: boolean;
  pendingPlan: PlanItem | null;
  openPaymentModal: (plan: PlanItem) => void;
  closePaymentModal: () => void;
  completePayment: () => void;

  // Video Player Modal
  isVideoOpen: boolean;
  currentVideo: VideoItem | null;
  openVideoModal: (video: VideoItem) => void;
  closeVideoModal: () => void;

  // Ambient Audio
  isMusicPlaying: boolean;
  isMusicMuted: boolean;
  musicVolume: number;
  toggleMusicPlay: () => void;
  toggleMusicMute: () => void;
  setMusicVolume: (vol: number) => void;

  // Admin Overrides
  adminOverrides: Record<string, number[]>;
  toggleAdminUserDayAccess: (phone: string, day: number) => void;
  resetDemoState: () => void;
}

// Preset Demo Users
const SUBSCRIBED_USER_PHONE = '9999999999';
const RESTRICTED_USER_PHONE = '8888888888';

const defaultSubscribedUser: UserProfile = {
  isLoggedIn: true,
  phone: SUBSCRIBED_USER_PHONE,
  name: "Ananya Sharma (Demo)",
  subscription: {
    hasActivePlan: true,
    planId: '11-day',
    planName: "11-Day Spiritual Session Plan",
    validUntil: "September 30, 2026",
    unlockedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }
};

const defaultRestrictedUser: UserProfile = {
  isLoggedIn: true,
  phone: RESTRICTED_USER_PHONE,
  name: "Vikram Kumar (Demo)",
  subscription: {
    hasActivePlan: false,
    planId: null,
    planName: "No Active Subscription",
    validUntil: "Expired / N/A",
    unlockedDays: [1, 2] // User B has access to Day 1 & 2 only (Prompt section 15)
  }
};

const defaultGuestUser: UserProfile = {
  isLoggedIn: false,
  phone: "",
  name: "Guest Seekers",
  subscription: {
    hasActivePlan: false,
    planId: null,
    planName: "No Active Subscription",
    validUntil: "N/A",
    unlockedDays: []
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language state
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('tripura_lang') as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tripura_lang', lang);
  };

  const t = getTranslation(language);

  // 2. User & Subscription State
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('tripura_user');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return defaultSubscribedUser; // Default to Subscribed demo user for initial rich view!
  });

  useEffect(() => {
    localStorage.setItem('tripura_user', JSON.stringify(user));
  }, [user]);

  // Admin Granular Overrides for User A vs User B
  const [adminOverrides, setAdminOverrides] = useState<Record<string, number[]>>(() => {
    const saved = localStorage.getItem('tripura_admin_overrides');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return {
      [SUBSCRIBED_USER_PHONE]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [RESTRICTED_USER_PHONE]: [1, 2] // Day 1 & 2 for User B
    };
  });

  useEffect(() => {
    localStorage.setItem('tripura_admin_overrides', JSON.stringify(adminOverrides));
  }, [adminOverrides]);

  // Sync admin overrides into active user state if changed
  useEffect(() => {
    if (user.phone && adminOverrides[user.phone]) {
      const activeUnlocked = adminOverrides[user.phone];
      setUser(prev => ({
        ...prev,
        subscription: {
          ...prev.subscription,
          unlockedDays: activeUnlocked
        }
      }));
    }
  }, [adminOverrides, user.phone]);

  // Authentication Handlers
  const login = (phone: string, name?: string) => {
    if (phone === SUBSCRIBED_USER_PHONE) {
      setUser({
        ...defaultSubscribedUser,
        subscription: {
          ...defaultSubscribedUser.subscription,
          unlockedDays: adminOverrides[SUBSCRIBED_USER_PHONE] || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      });
    } else if (phone === RESTRICTED_USER_PHONE) {
      setUser({
        ...defaultRestrictedUser,
        subscription: {
          ...defaultRestrictedUser.subscription,
          unlockedDays: adminOverrides[RESTRICTED_USER_PHONE] || [1, 2]
        }
      });
    } else {
      setUser({
        isLoggedIn: true,
        phone,
        name: name || `Seeker (${phone.slice(-4)})`,
        subscription: {
          hasActivePlan: false,
          planId: null,
          planName: "No Active Subscription",
          validUntil: "N/A",
          unlockedDays: []
        }
      });
    }
    setIsAuthOpen(false);
  };

  const logout = () => {
    setUser(defaultGuestUser);
  };

  const switchDemoUser = (phone: string) => {
    login(phone);
  };

  // Auth Modal
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const openAuthModal = () => setIsAuthOpen(true);
  const closeAuthModal = () => setIsAuthOpen(false);

  // Payment Modal
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [pendingPlan, setPendingPlan] = useState<PlanItem | null>(null);

  const openPaymentModal = (plan: PlanItem) => {
    setPendingPlan(plan);
    setIsPaymentOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentOpen(false);
    setPendingPlan(null);
  };

  const completePayment = () => {
    if (!pendingPlan) return;
    
    // Ensure user is logged in
    const activePhone = user.isLoggedIn ? user.phone : '9999999999';

    // All 11 days unlocked upon plan purchase!
    const allDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const updatedSubscription: UserSubscription = {
      hasActivePlan: true,
      planId: pendingPlan.id,
      planName: pendingPlan.name,
      validUntil: "September 30, 2026",
      unlockedDays: allDays
    };

    setUser(prev => ({
      ...prev,
      isLoggedIn: true,
      phone: activePhone,
      name: prev.name || "Spiritual Seeker",
      subscription: updatedSubscription
    }));

    setAdminOverrides(prev => ({
      ...prev,
      [activePhone]: allDays
    }));
  };

  // Video Player Modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null);

  const openVideoModal = (video: VideoItem) => {
    setCurrentVideo(video);
    setIsVideoOpen(true);
    ambientEngine.onVideoPlay(); // Auto pause ambient music!
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setCurrentVideo(null);
    ambientEngine.onVideoPauseOrEnded(); // Resume ambient music!
  };

  // Ambient Audio State
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const [musicVolume, setMusicVolumeState] = useState(0.15);

  const toggleMusicPlay = () => {
    const playing = ambientEngine.togglePlay();
    setIsMusicPlaying(playing);
  };

  const toggleMusicMute = () => {
    const muted = ambientEngine.toggleMute();
    setIsMusicMuted(muted);
  };

  const setMusicVolume = (vol: number) => {
    setMusicVolumeState(vol);
    ambientEngine.setVolume(vol);
  };

  // Admin toggle specific user day access
  const toggleAdminUserDayAccess = (phone: string, day: number) => {
    setAdminOverrides(prev => {
      const currentDays = prev[phone] || [];
      const updatedDays = currentDays.includes(day)
        ? currentDays.filter(d => d !== day)
        : [...currentDays, day].sort((a, b) => a - b);
      return {
        ...prev,
        [phone]: updatedDays
      };
    });
  };

  const resetDemoState = () => {
    localStorage.removeItem('tripura_user');
    localStorage.removeItem('tripura_admin_overrides');
    setUser(defaultSubscribedUser);
    setAdminOverrides({
      [SUBSCRIBED_USER_PHONE]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [RESTRICTED_USER_PHONE]: [1, 2]
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        user,
        login,
        logout,
        switchDemoUser,
        isAuthOpen,
        openAuthModal,
        closeAuthModal,
        isPaymentOpen,
        pendingPlan,
        openPaymentModal,
        closePaymentModal,
        completePayment,
        isVideoOpen,
        currentVideo,
        openVideoModal,
        closeVideoModal,
        isMusicPlaying,
        isMusicMuted,
        musicVolume,
        toggleMusicPlay,
        toggleMusicMute,
        setMusicVolume,
        adminOverrides,
        toggleAdminUserDayAccess,
        resetDemoState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
