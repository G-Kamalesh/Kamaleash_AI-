'use client';

import React from 'react';
import { useChat } from '../hooks/useChat';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

export const ChatContainer: React.FC = () => {
  const { messages, isLoading, error, sendMessage, clearChat, messagesEndRef } = useChat();

  return (
    <div className="container mx-auto max-w-4xl h-screen flex flex-col">
      <ChatHeader onClear={clearChat} />
      <MessageList 
        messages={messages} 
        isLoading={isLoading} 
        messagesEndRef={messagesEndRef}
      />
      <ChatInput 
        onSendMessage={sendMessage} 
        isLoading={isLoading} 
        error={error}
      />
    </div>
  );
};
