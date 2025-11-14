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
    </div>
  );
};

export default Contactcenterautomation;