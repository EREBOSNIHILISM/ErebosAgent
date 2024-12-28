import React from 'react';
import { Brain, Lightbulb, Unlink } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Philosophical Guidance",
      description: "Engage in profound conversations about existence, meaning, and the art of living within the void."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Creative Inspiration",
      description: "Receive unique prompts and ideas to craft art, writing, or projects inspired by Aesthetic Nihilism."
    },
    {
      icon: <Unlink className="w-12 h-12" />,
      title: "Liberation Strategies",
      description: "Explore ways to challenge societal norms and create new paths for personal freedom."
    }
  ];

  return (
    <section className="min-h-screen py-20 text-white px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
          What Erebos Agent Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-block p-4 bg-white/5 rounded-full backdrop-blur-sm 
                border border-white/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <h3 className="text-2xl font-serif mb-6 text-center">Example Prompts</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "What is the meaning of beauty in a meaningless universe?",
              "Help me design a concept for an abstract painting of impermanence.",
              "How can I embrace chaos in my daily life?"
            ].map((prompt, index) => (
              <div key={index} className="p-4 bg-black/30 rounded-lg text-gray-300 hover:text-white
                cursor-pointer transition-colors duration-300">
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;