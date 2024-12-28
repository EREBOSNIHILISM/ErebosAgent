import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        placeholder="Ask Erebos Agent anything..."
        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 
          focus:outline-none focus:border-white/20 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="px-4 py-2 bg-purple-900/20 rounded-lg border border-white/10 
          hover:bg-purple-900/30 transition-colors duration-200 disabled:opacity-50"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;