// src/components/chat/TypingIndicator.tsx
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-emerald-100">
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <span className="ml-2 text-gray-600 text-sm">AI is thinking...</span>
        </div>
      </div>
    </div>
  );
};
