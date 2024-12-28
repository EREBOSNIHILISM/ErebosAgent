import React from 'react';
import { Github, Twitter, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl mb-4">Beyond the Void</h3>
            <p className="text-gray-300">
              The void does not define you. What you create within it does.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Mission Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Aesthetic Nihilism Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Philosophy Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Erebos Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;