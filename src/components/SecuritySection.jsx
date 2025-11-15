import React from 'react';
import { Link } from 'react-router-dom';

const SecuritySection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] rounded-2xl lg:rounded-3xl border border-gray-200/20 p-8 lg:p-12 xl:p-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Security Label */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#FF6B35] font-medium text-sm sm:text-base">Security</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Enable every team to build AI Agents, securely
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              Product teams securely build and deploy advanced AI agents using their approved LLMs alongside customer data and tech stack integrations.
            </p>

            {/* Book a demo Button */}
            <Link
              to="/book-demo"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors"
            >
              Book a demo
            </Link>
          </div>

          {/* Right Side - Abstract Pattern */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] h-[400px] sm:h-[500px] relative overflow-hidden">
              {/* Abstract pattern with characters */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-gray-400 font-mono text-[10px] sm:text-xs leading-[1.2] opacity-50 select-none" style={{
                  letterSpacing: '0.15em',
                  fontFamily: 'monospace'
                }}>
                  <div className="whitespace-pre text-left">
                    {(() => {
                      const chars = ['+', '*', '#', '%', '@', '=', '-', ':', '.', '&', '^', '~', '|', '/', '\\', '<', '>'];
                      const rows = 50;
                      const cols = 60;
                      let pattern = '';
                      
                      for (let i = 0; i < rows; i++) {
                        for (let j = 0; j < cols; j++) {
                          // Create circular/spherical pattern
                          const centerX = cols / 2;
                          const centerY = rows / 2;
                          const dist = Math.sqrt(Math.pow(i - centerY, 2) + Math.pow(j - centerX, 2));
                          const radius = Math.min(rows, cols) / 2.5;
                          const density = Math.max(0, 1 - Math.abs(dist - radius) / 8);
                          const shouldShow = Math.random() < density * 0.3;
                          
                          if (shouldShow) {
                            pattern += chars[Math.floor(Math.random() * chars.length)];
                          } else {
                            pattern += ' ';
                          }
                        }
                        pattern += '\n';
                      }
                      return pattern;
                    })()}
                  </div>
                </div>
              </div>
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#121212]/60 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 lg:p-8">
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Your AI platform of record
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Build, scale, and collaborate on AI products in a centralized, secure platform across every team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 lg:p-8">
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12M12 12L14 14M12 12L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Get ideas to market fast
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Accelerate AI product team sprints to ship with speed and quality, while efficiently scaling to new use cases.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 lg:p-8">
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Avoid vendor lock-in
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Bet on AI, not single vendors. Agnostically adapt to changing LLM and NLU technologies.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 lg:p-8">
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                <path d="M18 10H20C21.1046 10 22 10.8954 22 12V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V12C2 10.8954 2.89543 10 4 10H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 15L12 10L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Control & customization
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Build endless API-first data and interface integrations alongside any LLM models with secure guardrails.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white/90 mb-8">
            Trusted by the best in the business
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
            <div className="text-white text-lg font-semibold">vodafone</div>
            <div className="text-white text-lg font-semibold">StubHub</div>
            <div className="text-white text-lg font-semibold">Citizens™</div>
            <div className="text-white text-lg font-semibold">CVS</div>
            <div className="text-white text-lg font-semibold">amazon</div>
            <div className="text-white text-lg font-semibold">CISCO</div>
            <div className="text-white text-lg font-semibold">TRILOGY</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

