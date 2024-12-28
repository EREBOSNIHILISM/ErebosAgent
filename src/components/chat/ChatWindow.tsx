import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { generateResponse } from '../../utils/aiUtils';

interface Message {
  content: string;
  isUser: boolean;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message: string) => {
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await generateResponse(message);
      setMessages(prev => [...prev, { content: response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        content: "I apologize, but I'm unable to respond at the moment. Please try again later.", 
        isUser: false 
      }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-white/10">
        <ChatInput onSend={handleSend} disabled={isLoading} />
      </div>
    </div>
  );
};

export default ChatWindow;