import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] pt-20 lg:pt-28 pb-12 lg:pb-20 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-4 sm:gap-6 z-10 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white tracking-tight">
              The complete chat and voice AI agents platform
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
              Build, launch, and scale AI agents for every customer channel — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base lg:text-lg font-medium px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all w-full sm:w-auto">
                Sign up free
              </button>
              <button className="bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 text-white text-sm sm:text-base lg:text-lg font-medium px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg transition-all w-full sm:w-auto">
                Book a demo
              </button>
            </div>
          </div>

          {/* Visuals */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center mt-4 lg:mt-0 order-1 lg:order-2">
            {/* Dashboard Mockup - Background */}
            <div className="hidden xl:block absolute right-0 top-0 w-[500px] h-[400px] bg-[rgba(30,30,70,0.8)] rounded-xl backdrop-blur-md opacity-60 flex">
              <div className="w-[180px] bg-[rgba(40,50,80,0.9)] p-6 rounded-l-xl flex flex-col gap-3">
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Workflows</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Welcome</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Change Password</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Purchase Tokens</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">AI Search</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Voiceflow Product</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Support</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Book a Demo</div>
                <div className="text-white/70 text-sm p-2 rounded hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Customer Stories</div>
              </div>
              <div className="flex-1 p-8 relative">
                <div className="absolute top-[20%] left-[10%] w-24 h-16 bg-blue-600/20 border-2 border-blue-600/50 rounded-lg"></div>
                <div className="absolute top-[50%] left-[30%] w-24 h-16 bg-blue-600/20 border-2 border-blue-600/50 rounded-lg"></div>
                <div className="absolute top-[30%] right-[20%] w-24 h-16 bg-blue-600/20 border-2 border-blue-600/50 rounded-lg"></div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 z-30 transform -rotate-6 scale-[0.5] sm:scale-[0.65] md:scale-75 lg:scale-90 xl:scale-100 hidden sm:block">
              <div className="w-[280px] h-[580px] bg-gradient-to-br from-blue-900 to-blue-600 rounded-[30px] p-4 sm:p-6 flex flex-col shadow-2xl">
                <div className="flex justify-between items-center text-white text-sm font-semibold mb-8">
                  <span>9:41</span>
                  <div className="flex gap-2">
                    <span>📶</span>
                    
                    <span>🔋</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col items-center gap-2 text-white mb-8">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mb-2">
                      <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" stroke="white" strokeWidth="2"/>
                      <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="1.5" fill="white"/>
                    </svg>
                    <span className="text-xl font-semibold">Voiceflow</span>
                    <span className="text-sm opacity-80">Connecting</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center gap-4">
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>2</span>
                        <small className="text-[10px] sm:text-xs">ABC</small>
                      </button>
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>3</span>
                        <small className="text-[10px] sm:text-xs">DEF</small>
                      </button>
                    </div>
                    <div className="flex justify-center gap-4">
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>4</span>
                        <small className="text-[10px] sm:text-xs">GHI</small>
                      </button>
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>5</span>
                        <small className="text-[10px] sm:text-xs">JKL</small>
                      </button>
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>6</span>
                        <small className="text-[10px] sm:text-xs">MNO</small>
                      </button>
                    </div>
                    <div className="flex justify-center gap-4">
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>7</span>
                        <small className="text-[10px] sm:text-xs">PQRS</small>
                      </button>
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>8</span>
                        <small className="text-[10px] sm:text-xs">TUV</small>
                      </button>
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex flex-col items-center justify-center transition-colors">
                        <span>9</span>
                        <small className="text-[10px] sm:text-xs">WXYZ</small>
                      </button>
                    </div>
                    <div className="flex justify-center gap-4">
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex items-center justify-center transition-colors">
                        <span>0</span>
                      </button>
                      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl sm:text-2xl font-semibold flex items-center justify-center transition-colors">
                        <span>#</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Mockup */}
            <div className="absolute left-0 lg:left-5 bottom-0 lg:bottom-10 z-40 w-[280px] sm:w-[320px] md:w-[380px] bg-white rounded-xl shadow-2xl overflow-hidden transform scale-[0.6] sm:scale-[0.7] md:scale-85 lg:scale-90 xl:scale-100 hidden sm:block">
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <span className="font-semibold">Tico</span>
                <div className="flex gap-3 cursor-pointer">
                  <span>🔄</span>
                  <span>⚙️</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 max-h-[500px] overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                    <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  </svg>
                  <h2 className="text-2xl font-semibold text-gray-900 m-0">Tico</h2>
                </div>
                <div className="bg-gray-100 text-gray-900 p-3.5 rounded-lg max-w-[80%] leading-relaxed">
                  Hi, I'm Tico, your AI agent. How can I help?
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white border-none px-6 py-3 rounded-lg font-medium self-start transition-colors">
                  Hello!
                </button>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-gray-600 mb-2 m-0">Here is a helpful guide to get you started:</p>
                  <a href="#guide" className="text-blue-600 text-sm break-all hover:underline">
                    Build your own AI agent for your voiceflow.com/chat-gpt-ai-agent
                  </a>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 py-2">
                  <span>Generate by AI, double-check for accuracy.</span>
                  <div className="flex gap-2">
                    <span>👍</span>
                    <span>👎</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors">
                    Talk to human
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2.5 rounded-md text-sm font-medium transition-colors">
                    Ask a question
                  </button>
                </div>
                <div className="flex items-center bg-gray-100 rounded-lg p-3 mt-2">
                  <input 
                    type="text" 
                    placeholder="Message..." 
                    className="flex-1 border-none bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  <span className="text-xl cursor-pointer">🎤</span>
                </div>
                <div className="text-center text-xs text-gray-400 pt-2 mt-2 border-t border-gray-200">
                  Powered by Voiceflow Privacy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
