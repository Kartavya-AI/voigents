import React from 'react';
import Hero from '../components/Hero';
import AgentsSection from '../components/AgentsSection';
import TrustSection from '../components/TrustSection';
import TrilogySection from '../components/TrilogySection';
import CustomersSection from '../components/CustomersSection';
import IntegrationsSection from '../components/IntegrationsSection';
import SecuritySection from '../components/SecuritySection';
import CommunitySection from '../components/CommunitySection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <AgentsSection />
      <TrilogySection />
      <CustomersSection />
      <IntegrationsSection />
      <SecuritySection />
      <CommunitySection />
      <CTASection />
    </>
  );
};

export default Home;

