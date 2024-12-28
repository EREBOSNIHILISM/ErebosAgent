import React from 'react';
import { Wind, Infinity, Palette } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Embracing Impermanence",
      description: "Accept the fleeting nature of existence as a source of beauty and freedom."
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Finding Beauty in Chaos",
      description: "Discover the aesthetic potential within disorder and uncertainty."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Freedom",
      description: "Transform meaninglessness into an infinite canvas for personal expression."
    }
  ];

  return (
    <section className="min-h-screen py-20 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Meet the Shadow Architect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              Erebos Agent is an AI entity rooted in the philosophy of Aesthetic Nihilism, 
              merging existential thought with creative empowerment.
            </p>
            <p className="text-lg text-gray-300">
              Through our dialogue, you'll discover new perspectives on existence, meaning, 
              and the art of living within the void.
            </p>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black rounded-lg 
              border border-white/10 overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10
              hover:border-white/20 transition-all duration-300">
              <div className="mb-4">{principle.icon}</div>
              <h3 className="text-xl font-serif mb-2">{principle.title}</h3>
              <p className="text-gray-300">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;