import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  isUser: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isUser }) => {
  if (isUser) {
    return (
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <User className="w-4 h-4" />
      </div>
    );
  }

  return (
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img 
        src="https://raw.githubusercontent.com/stackblitz/stackblitz-handbook/main/docs/assets/erebos-agent.jpg" 
        alt="Erebos Agent"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;