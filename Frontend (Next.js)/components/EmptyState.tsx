// src/components/chat/EmptyState.tsx
import React from 'react';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center text-white/70 mt-20">
      <div className="text-6xl mb-4">🌱</div>
      <h2 className="text-xl font-semibold mb-2 text-emerald-100">Welcome to Kamaleash AI!</h2>
      <p className="text-emerald-200">Start a conversation by typing a message below.</p>
      <div className="mt-6 text-sm text-emerald-300/70">
        <p>💬 Ask me anything</p>
        <p>🤖 I'm powered by Google Gemini</p>
        <p>🌿 Let's chat!</p>
      </div>
    </div>
  );
};
