import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const MusicControl: React.FC = () => {
  const { isMusicPlaying, isMusicMuted, musicVolume, toggleMusicPlay, toggleMusicMute, setMusicVolume, t } = useApp();
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="relative inline-flex items-center gap-2">
      <button
        onClick={toggleMusicPlay}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
          isMusicPlaying
            ? 'bg-amber-100/90 text-amber-900 border border-amber-300 shadow-sm'
            : 'bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-800 border border-stone-200'
        }`}
        title={t.music.label}
        aria-label={t.music.label}
      >
        <Music className={`w-3.5 h-3.5 ${isMusicPlaying ? 'animate-bounce text-amber-600' : ''}`} />
        <span>{isMusicPlaying ? t.music.playing : '♫ Music'}</span>
        {isMusicPlaying ? (
          <Pause className="w-3 h-3 text-amber-700" />
        ) : (
          <Play className="w-3 h-3 text-stone-500" />
        )}
      </button>

      {isMusicPlaying && (
        <div className="relative" onMouseEnter={() => setShowSlider(true)} onMouseLeave={() => setShowSlider(false)}>
          <button
            onClick={toggleMusicMute}
            className="p-1.5 rounded-full hover:bg-amber-100 text-amber-800 transition"
            title={isMusicMuted ? t.music.unmute : t.music.mute}
          >
            {isMusicMuted ? (
              <VolumeX className="w-4 h-4 text-rose-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-600" />
            )}
          </button>

          {showSlider && (
            <div className="absolute right-0 top-8 bg-white/95 backdrop-blur-md p-2 rounded-lg shadow-lg border border-amber-200 z-50 flex items-center gap-2 w-32">
              <input
                type="range"
                min="0"
                max="0.4"
                step="0.02"
                value={isMusicMuted ? 0 : musicVolume}
                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
