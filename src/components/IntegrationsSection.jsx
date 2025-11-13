import React, { useState, useRef, useEffect } from 'react';

const IntegrationsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const integrations = [
    {
      id: 1,
      logo: 'Z',
      logoColor: 'text-gray-900',
      category: 'CRM',
      title: 'Dynamic Carousel using Zendesk Help Center Articles',
      description: 'Ship a dynamic carousel with Zendesk Help Center articles.'
    },
    {
      id: 2,
      logo: 'SF',
      logoColor: 'text-blue-600',
      category: 'CRM',
      title: 'Connect with Salesforce',
      description: 'Connect your Salesforce to power your agent responses, logic, and analytics.'
    },
    {
      id: 3,
      logo: 'SP',
      logoColor: 'text-gray-900',
      category: 'ecommerce',
      title: 'Integrate with Shopify Plus',
      description: 'Connect your AI agent with a Shopify Plus account to power agent responses and actions.'
    },
    {
      id: 4,
      logo: '❄️',
      logoColor: 'text-gray-900',
      category: 'Data Warehouse',
      title: 'Send data to Snowflake',
      description: 'Connect your Snowflake data warehouse to power your agent responses, logic, and analytics.'
    },
    {
      id: 5,
      logo: 'Σ',
      logoColor: 'text-gray-900',
      category: 'Analytics',
      title: 'Analyse performance in Sigma',
      description: 'Send agent events to Sigma for visualizing agent performance.'
    },
    {
      id: 6,
      logo: 'S',
      logoColor: 'text-green-600',
      category: 'Analytics',
      title: 'Send Analytics Event to Segment',
      description: 'Track agent interactions and send to Segment for analysis.'
    }
  ];

  // Duplicate cards for infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId;

    const scroll = () => {
      if (!isScrolling) {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;

        // Reset scroll position for infinite scroll
        if (scrollPosition >= container.scrollWidth / 3) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isScrolling]);

  const handleMouseEnter = () => {
    setIsScrolling(true);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Integrations Label */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                <path d="M9 4C7 4 5 6 5 8V10C5 12 7 14 9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 4C17 4 19 6 19 8V10C19 12 17 14 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 20C7 20 5 18 5 16V14C5 12 7 10 9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 20C17 20 19 18 19 16V14C19 12 17 10 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-blue-600 font-medium text-sm sm:text-base">Integrations</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Integrate Agents with every app in your stack
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Extend what your agents can do with developer APIs for data, knowledge & interfaces.
            </p>

            {/* See integrations Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors">
              See integrations
            </button>
          </div>

          {/* Right Side - Abstract Pattern */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] h-[400px] sm:h-[500px] relative overflow-hidden">
              {/* Abstract pattern with characters */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-gray-500 font-mono text-[10px] sm:text-xs leading-[1.2] opacity-70 select-none" style={{
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
                          // Create multiple cloud-like clusters
                          const centerX1 = cols * 0.3;
                          const centerY1 = rows * 0.4;
                          const centerX2 = cols * 0.7;
                          const centerY2 = rows * 0.6;
                          const centerX3 = cols * 0.5;
                          const centerY3 = rows * 0.3;
                          
                          const dist1 = Math.sqrt(Math.pow(i - centerY1, 2) + Math.pow(j - centerX1, 2));
                          const dist2 = Math.sqrt(Math.pow(i - centerY2, 2) + Math.pow(j - centerX2, 2));
                          const dist3 = Math.sqrt(Math.pow(i - centerY3, 2) + Math.pow(j - centerX3, 2));
                          
                          const density1 = Math.max(0, 1 - dist1 / 12);
                          const density2 = Math.max(0, 1 - dist2 / 10);
                          const density3 = Math.max(0, 1 - dist3 / 8);
                          
                          const maxDensity = Math.max(density1, density2, density3);
                          const shouldShow = Math.random() < maxDensity * 0.25;
                          
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
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/40 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {duplicatedIntegrations.map((integration, index) => (
              <div
                key={`${integration.id}-${index}`}
                className={`flex-shrink-0 w-[320px] sm:w-[360px] rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  hoveredCard === `${integration.id}-${index}`
                    ? 'bg-blue-600 scale-105 shadow-2xl'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredCard(`${integration.id}-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Logo */}
                <div className={`mb-4 text-3xl font-bold ${hoveredCard === `${integration.id}-${index}` ? 'text-white' : integration.logoColor}`}>
                  {integration.logo}
                </div>

                {/* Category Tag */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    hoveredCard === `${integration.id}-${index}`
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {`{${integration.category}}`}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-semibold mb-2 ${
                  hoveredCard === `${integration.id}-${index}` ? 'text-white' : 'text-gray-900'
                }`}>
                  {integration.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 ${
                  hoveredCard === `${integration.id}-${index}` ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {integration.description}
                </p>

                {/* Get Started Button (only on hover) */}
                {hoveredCard === `${integration.id}-${index}` && (
                  <button className="mt-4 px-4 py-2 rounded-lg font-medium text-sm transition-colors bg-white text-blue-600 hover:bg-gray-100">
                    Get started →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

