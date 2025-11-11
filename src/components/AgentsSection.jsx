import React from 'react';

const AgentsSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            AI Agents that talk, type, and help customers like a human
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Voiceflow is a purpose-built platform for ambitious Product teams to build AI Agents with speed, control, and observability.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Voice Agents Card */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-10 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Voice Agents for human-like phone calls
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Design, test and deploy AI-powered voice agents that are fast, human-like, and scalable.
              </p>
            </div>
            {/* Phone Mockup */}
            <div className="relative z-10 flex justify-center items-center mt-8">
              <div className="transform rotate-6 scale-90 lg:scale-100">
                <div className="w-[240px] sm:w-[280px] h-[500px] sm:h-[580px] bg-gradient-to-br from-blue-900 to-blue-600 rounded-[30px] p-4 sm:p-6 flex flex-col shadow-2xl">
                  <div className="flex justify-between items-center text-white text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                    <span>9:41</span>
                    <div className="flex gap-1 sm:gap-2">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center gap-2 text-white mb-6 sm:mb-8">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-2">
                        <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" stroke="white" strokeWidth="2"/>
                        <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" stroke="white" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="1.5" fill="white"/>
                      </svg>
                      <span className="text-lg sm:text-xl font-semibold">Voiceflow</span>
                      <span className="text-xs sm:text-sm opacity-80">Connecting</span>
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex justify-center gap-3 sm:gap-4">
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>1</span>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>2</span>
                          <small className="text-[9px] sm:text-[10px]">ABC</small>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>3</span>
                          <small className="text-[9px] sm:text-[10px]">DEF</small>
                        </button>
                      </div>
                      <div className="flex justify-center gap-3 sm:gap-4">
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>4</span>
                          <small className="text-[9px] sm:text-[10px]">GHI</small>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>5</span>
                          <small className="text-[9px] sm:text-[10px]">JKL</small>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>6</span>
                          <small className="text-[9px] sm:text-[10px]">MNO</small>
                        </button>
                      </div>
                      <div className="flex justify-center gap-3 sm:gap-4">
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>7</span>
                          <small className="text-[9px] sm:text-[10px]">PQRS</small>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>8</span>
                          <small className="text-[9px] sm:text-[10px]">TUV</small>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex flex-col items-center justify-center transition-colors">
                          <span>9</span>
                          <small className="text-[9px] sm:text-[10px]">WXYZ</small>
                        </button>
                      </div>
                      <div className="flex justify-center gap-3 sm:gap-4">
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex items-center justify-center transition-colors">
                          <span>*</span>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex items-center justify-center transition-colors">
                          <span>0</span>
                        </button>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg sm:text-xl font-semibold flex items-center justify-center transition-colors">
                          <span>#</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Agents Card */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-10 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Chat Agents with deep customization
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Build Chat Agents with deep capabilities and interface customization.
              </p>
            </div>
            {/* Chat Mockup */}
            <div className="relative z-10 flex justify-center items-center mt-8">
              <div className="transform -rotate-3 scale-90 lg:scale-100">
                <div className="w-[300px] sm:w-[340px] md:w-[380px] bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 sm:p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" stroke="white" strokeWidth="2"/>
                        <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" stroke="white" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="1.5" fill="white"/>
                      </svg>
                      <span className="font-semibold text-sm sm:text-base">Voiceflow</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 max-h-[400px] overflow-y-auto">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                        <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                      </svg>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 m-0">Tico, an AI Agent</h4>
                    </div>
                    <div className="bg-gray-100 text-gray-900 p-3 rounded-lg text-sm sm:text-base">
                      Welcome! How can I help?
                    </div>
                    <div className="bg-blue-600 text-white p-3 rounded-lg text-sm sm:text-base self-end max-w-[80%]">
                      Hi Voiceflow!
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-600 text-sm">
                      <p className="text-gray-600 mb-2 m-0">Here is a helpful guide to get you started:</p>
                      <a href="#guide" className="text-blue-600 break-all hover:underline text-xs sm:text-sm">
                        Build your own AI agent for your voiceflow.com/chat-gpt-ai-agent
                      </a>
                      <p className="text-gray-400 text-xs mt-2 m-0">Generate by AI, double-check for accuracy.</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="bg-gray-700 hover:bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors">
                        Talk to human
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors">
                        Ask a question
                      </button>
                    </div>
                    <div className="flex items-center bg-gray-100 rounded-lg p-2 sm:p-3 mt-2">
                      <input 
                        type="text" 
                        placeholder="Message..." 
                        className="flex-1 border-none bg-transparent outline-none text-xs sm:text-sm text-gray-900 placeholder:text-gray-400"
                      />
                      <span className="text-lg cursor-pointer">🎤</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;

