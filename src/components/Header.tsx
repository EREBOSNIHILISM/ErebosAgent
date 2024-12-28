import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-serif text-white">Erebos Agent</div>
          <button className="text-white hover:text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;