import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#1f6bff] shadow-[0_30px_60px_rgba(31,107,255,0.35)] px-8 sm:px-10 lg:px-16 py-12">
          <div className="absolute inset-0 opacity-35">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.35) 1px, transparent 0)',
                backgroundSize: '22px 22px'
              }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Build AI Agents for customer support and beyond
              </h2>
              <p className="text-lg sm:text-xl text-white/95 mb-8">
                Ready to explore how Voigents can help your team? Let’s talk.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-[#1f6bff] font-semibold px-8 py-3 rounded-full shadow-lg shadow-white/40 hover:bg-gray-100 transition-colors">
                Sign up free
                <span>→</span>
              </button>
            </div>

            <div className="w-full lg:w-auto">
              <pre className="text-[8px] sm:text-[10px] leading-tight text-white/70 font-mono whitespace-pre">
{`@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%######
@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%########
@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%##########
@@@@@@@%%%%%%%%%%%%%%%%%%%%%#############
@@@@@%%%%%%%%%%%%%%%%%%%%################
@@@@%%%%%%%%%%%%%%%%%%%##################
@@@%%%%%%%%%%%%%%%%%%####################
@@%%%%%%%%%%%%%%%%%%#####################
@%%%%%%%%%%%%%%%%%%######################
%%%%%%%%%%%%%%%%%%%######################
%%%%%%%%%%%%%%%%%%%######################
%%%%%%%%%%%%%%%%%%%%#####################
%%%%%%%%%%%%%%%%%%%%%####################
%%%%%%%%%%%%%%%%%%%%%%###################
`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

