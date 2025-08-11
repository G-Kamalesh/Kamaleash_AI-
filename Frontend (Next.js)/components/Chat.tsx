// src/components/chat/Chat.tsx (Main Chat Component)
import React from 'react';
import { ChatContainer } from './ChatContainer';

export const Chat: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
      <ChatContainer />
    </div>
  );
};