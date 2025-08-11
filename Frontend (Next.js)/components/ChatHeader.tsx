// src/components/chat/ChatHeader.tsx
import React from 'react';

interface ChatHeaderProps {
  onClear: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClear }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">🌿 Kamaleash AI</h1>
          <p className="text-emerald-200 text-sm">Powered by Google Gemini</p>
        </div>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm flex items-center space-x-2"
        >
          <span>🗑️</span>
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
};
        