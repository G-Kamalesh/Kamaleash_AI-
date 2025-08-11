// src/components/chat/MessageBubble.tsx
import React from 'react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
          isUser
            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
            : 'bg-white/90 text-gray-800 backdrop-blur-sm border border-emerald-100'
        }`}
      >
        <div className="whitespace-pre-wrap break-words">{message.content}</div>
        <div
          className={`text-xs mt-2 ${
            isUser ? 'text-white/70' : 'text-gray-500'
          }`}
        >
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};
