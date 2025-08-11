'use client';

import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  isLoading, 
  error 
}) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-6">
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 text-red-200 rounded-lg text-sm flex items-center space-x-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
      
      <div className="flex space-x-4 items-end">
        <div className="flex-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here... 🌱"
            className="w-full resize-none bg-white/90 backdrop-blur-sm border border-emerald-200/50 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all placeholder-gray-500"
            rows={1}
            maxLength={1000}
            disabled={isLoading}
          />
          <div className="text-xs text-emerald-200/80 mt-1">
            {input.length}/1000 characters • Press Enter to send
          </div>
        </div>
        
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-medium transition-all transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending</span>
            </>
          ) : (
            <>
              <span>🚀</span>
              <span>Send</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};