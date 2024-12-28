import React from 'react';
import ChatWindow from './chat/ChatWindow';

const InteractiveDemo: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center text-white">
          Step into the Void
        </h2>
        <p className="text-gray-300 text-center mb-12">
          Engage in a dialogue with Erebos Agent. Explore the depths of existence,
          meaning, and creativity through our conversation.
        </p>
        <ChatWindow />
      </div>
    </section>
  );
};

export default InteractiveDemo;