import React from 'react';
import Avatar from './Avatar';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser }) => {
  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <Avatar isUser={isUser} />
      <div className={`max-w-[80%] p-4 rounded-lg ${
        isUser ? 'bg-purple-900/20' : 'bg-white/5'
      }`}>
        <p className="text-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;