import React from 'react';

const Contactcenterautomation = () => {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="text-blue-600 text-sm font-semibold  mb-4">
              Voice AI
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Voice AI Agents that go beyond FAQs
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Build and deploy AI agents that can answer questions, triage requests, and automate complex tasks over the phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white text-base font-medium px-6 py-3 rounded-md shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all">
                Get started free →
              </button>
              <button className="bg-white border border-gray-200 text-gray-900 text-base font-medium px-6 py-3 rounded-md hover:border-gray-300 transition-all">
                Documentation
              </button>
            </div>

            <div>
              <p className="text-gray-500 font-semibold   mb-4">
                Teams of every size use Voigents to build contact center AI
              </p>
              <div className="flex flex-wrap items-center gap-6 text-gray-800 font-semibold text-lg">
                <span className="tracking-wide">StubHub</span>
                <span className="tracking-wide">superloop</span>
                <span className="tracking-wide">TURO</span>
                <span className="tracking-wide">vodafone</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="w-full flex justify-center">
            <div className="relative w-[260px] sm:w-[300px] aspect-[9/19] rounded-[36px] border-[10px] border-black shadow-2xl overflow-hidden bg-gradient-to-br from-[#d89a2c] via-[#be7f0f] to-[#5f3602]">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full"></div>
              <div className="h-full w-full flex flex-col justify-between px-6 py-8 text-white">
                <div>
                  <p className="text-semibold text-white/80">Voigents</p>
                  <p className="text-xs text-white/60">connecting…</p>
                </div>
                <div className="flex justify-around ">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-lg">
                      🔔
                    </div>
                    <span className="text-xs text-white/80">Remind Me</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-lg">
                      💬
                    </div>
                    <span className="text-xs text-white/80">Message</span>
                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <button className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-xl shadow-lg shadow-red-600/40">
                    ✕
                  </button>
                  <button className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-xl shadow-lg shadow-green-500/40">
                    ✓
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="bg-[#070b1a] rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.45)] overflow-hidden border border-white/10 relative">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
            ></div>
          </div>
          <div className="relative w-full">
            <div className="relative w-full pb-[56.25%] rounded-[32px] overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/UX8uVSKYgo0?rel=0&modestbranding=1"
                title="Build Voice AI Agents with Voiceflow"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="relative overflow-hidden bg-[#1c57ff] rounded-[40px] text-white p-10 sm:p-14 lg:p-16 shadow-[0_30px_60px_rgba(28,87,255,0.3)]">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 8px 8px, rgba(255,255,255,0.35) 1px, transparent 0)',
                backgroundSize: '26px 26px'
              }}
            ></div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Build AI Agents with control
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Sign up and build AI agents for free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#1c57ff] text-base font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg shadow-white/30 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Get started, it’s free
                  <span className="text-lg">→</span>
                </button>
                <button className="text-white/90 font-semibold underline-offset-4 hover:underline text-base">
                  Contact sales
                </button>
              </div>
            </div>
            <div className="hidden md:block flex-1 text-right">
              <pre className="text-[8px] sm:text-[9px] leading-[0.9] text-white/70 font-mono whitespace-pre">
{`        +@@@@@@%#+=--:..          
      *@@@@@@@@@@@%#+=-:.       
    =@@@@@@@@@@@@@@@@@%#*=-.    
   *@@@@@@@@@@@@@@@@@@@@@%#+-   
  -@@@@@@@@@@@@@@@@@@@@@@@@#+.  
  %@@@@@@@@@@@@@@@@@@@@@@@@@%+. 
 .@@@@@@@@@@@@@@@@@@@@@@@@@@@%+ 
 .@@@@@@@@@@@@@@@@@@@@@@@@@@@%+ 
  %@@@@@@@@@@@@@@@@@@@@@@@@@%+. 
  -@@@@@@@@@@@@@@@@@@@@@@@@#+.  
   *@@@@@@@@@@@@@@@@@@@@@%#+-   
    =@@@@@@@@@@@@@@@@@%#*=-.    
      *@@@@@@@@@@@%#+=-:.       
        +@@@@@@%#+=--:..        `}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactcenterautomation;