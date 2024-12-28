import React from 'react';
import VoidBackground from './components/VoidBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <VoidBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <InteractiveDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;