import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-2xl lg:rounded-3xl p-8 lg:p-12 xl:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>
            {/* ASCII pattern overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-white/30 font-mono text-[8px] sm:text-[10px] leading-tight select-none" style={{
                letterSpacing: '0.1em',
                fontFamily: 'monospace'
              }}>
                <div className="whitespace-pre text-left">
                  {(() => {
                    const chars = ['.', '+', '*', '#', '%', '@', '=', '-', ':'];
                    const rows = 30;
                    const cols = 50;
                    let pattern = '';
                    
                    for (let i = 0; i < rows; i++) {
                      for (let j = 0; j < cols; j++) {
                        const density = Math.random() * 0.15;
                        if (Math.random() < density) {
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
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Build AI Agents for customer support and beyond
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Ready to explore how Voigents can help your team? Let's talk.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-white hover:bg-gray-100 text-blue-600 text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-colors">
                Sign up free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

