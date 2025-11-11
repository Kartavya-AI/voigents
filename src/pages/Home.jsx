import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AgentsSection from '../components/AgentsSection';
import TrustSection from '../components/TrustSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TrustSection />
      <AgentsSection />
      
    </div>
  );
};

export default Home;

