import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Volume2, VolumeX, Pause } from 'lucide-react';

export const MusicControl: React.FC = () => {
  const { isMusicPlaying, isMusicMuted, musicVolume, toggleMusicPlay, toggleMusicMute, setMusicVolume, t } = useApp();
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="relative inline-flex items-center gap-1.5">
      <button
        onClick={toggleMusicPlay}
        className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase border transition-all duration-300 flex items-center gap-1.5 ${
          isMusicPlaying
            ? 'bg-[#EFE9DD] text-[#2C2421] border-[#D1A559] shadow-xs'
            : 'bg-transparent text-[#5C534E] hover:text-[#2C2421] border-[#CFC5B6] hover:border-[#8B5E34]'
        }`}
        title={t.music.label}
      >
        <span className="text-xs">♪</span>
        <span>{isMusicPlaying ? t.music.playing : 'AMBIENT'}</span>
        {isMusicPlaying && <Pause className="w-3 h-3 text-[#8B5E34] ml-0.5" />}
      </button>

      {isMusicPlaying && (
        <div className="relative" onMouseEnter={() => setShowSlider(true)} onMouseLeave={() => setShowSlider(false)}>
          <button
            onClick={toggleMusicMute}
            className="p-1 rounded-full text-[#5C534E] hover:text-[#2C2421] transition"
            title={isMusicMuted ? t.music.unmute : t.music.mute}
          >
            {isMusicMuted ? <VolumeX className="w-4 h-4 text-rose-600" /> : <Volume2 className="w-4 h-4 text-[#8B5E34]" />}
          </button>

          {showSlider && (
            <div className="absolute right-0 top-8 bg-[#F8F5EE] p-2 rounded-lg shadow-lg border border-[#D8CFBF] z-50 flex items-center gap-2 w-32">
              <input
                type="range"
                min="0"
                max="0.4"
                step="0.02"
                value={isMusicMuted ? 0 : musicVolume}
                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#D8CFBF] rounded-lg appearance-none cursor-pointer accent-[#8B5E34]"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
