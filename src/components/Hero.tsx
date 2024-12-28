import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-6">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold">
          Erebos Agent
          <span className="block text-2xl md:text-3xl mt-4 text-gray-300">
            Architect of the Void
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light italic">
          Find beauty in chaos. Create meaning where none exists.
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Erebos Agent is a digital philosopher, guide, and creator, inspired by Aesthetic Nihilism. 
          It invites you to embrace impermanence, question the structures of meaning, and craft beauty from the void.
        </p>
        <button className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg 
          transition-all duration-300 border border-white/20 hover:border-white/40">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Enter the Void
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;