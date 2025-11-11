import React, { useState } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (item) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgba(18,18,18,0.95)] backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white text-xl font-semibold">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path 
                d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            </svg>
            <span>Voiceflow</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('platform')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#platform" className="text-white/90 hover:text-white text-[0.95rem] font-normal transition-colors py-2 block">
                Platform
              </a>
            </li>
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('usecases')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#usecases" className="text-white/90 hover:text-white text-[0.95rem] font-normal transition-colors py-2 block">
                Use Cases
              </a>
              {activeDropdown === 'usecases' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[rgba(30,30,30,0.98)] border border-white/10 rounded-lg py-2 min-w-[220px] shadow-2xl z-50 transition-opacity duration-200">
                  <a href="#automate-support" className="block px-4 py-2 text-white/90 hover:bg-white/5 hover:text-white rounded-md transition-colors text-sm">
                    Automate customer support
                  </a>
                  <a href="#in-app-copilot" className="block px-4 py-2 text-white/90 hover:bg-white/5 hover:text-white rounded-md transition-colors text-sm">
                    Build an in-app copilot
                  </a>
                  <a href="#conversation-design" className="block px-4 py-2 text-white/90 hover:bg-white/5 hover:text-white rounded-md transition-colors text-sm">
                    Improve conversation design
                  </a>
                  <a href="#contact-center" className="block px-4 py-2 text-white/90 hover:bg-white/5 hover:text-white rounded-md transition-colors text-sm">
                    Contact center automation
                  </a>
                  <div className="h-px bg-white/10 my-2"></div>
                  <a href="#customer-stories" className="flex items-center justify-between px-4 py-2 text-white/90 hover:bg-white/5 hover:text-white rounded-md transition-colors text-sm">
                    Read customer stories
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              )}
            </li>
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#resources" className="text-white/90 hover:text-white text-[0.95rem] font-normal transition-colors py-2 block">
                Resources
              </a>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[rgba(30,30,30,0.98)] border border-white/10 rounded-lg p-6 min-w-[280px] sm:min-w-[500px] lg:min-w-[600px] max-w-[90vw] shadow-2xl z-50 transition-opacity duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="flex flex-col gap-3">
                      <a href="#blog" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <span className="text-xl flex-shrink-0 mt-0.5">📝</span>
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Blog</div>
                          <div className="text-white/60 text-sm leading-relaxed">Everything you need to know about conversational AI, at your fingertips.</div>
                        </div>
                      </a>
                      <a href="#hire-expert" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <span className="text-xl flex-shrink-0 mt-0.5">👤</span>
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Hire a Voiceflow Expert</div>
                          <div className="text-white/60 text-sm leading-relaxed">Get help building your next project from a certified Voiceflow Expert.</div>
                        </div>
                      </a>
                      <a href="#templates" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <span className="text-xl flex-shrink-0 mt-0.5">📚</span>
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Templates</div>
                          <div className="text-white/60 text-sm leading-relaxed">Discover our library of agent building templates. Search by use case, product, creator & more.</div>
                        </div>
                      </a>
                      <a href="#integrations" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <span className="text-xl flex-shrink-0 mt-0.5">🔗</span>
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Integrations</div>
                          <div className="text-white/60 text-sm leading-relaxed">Connect your existing techstack into your Voiceflow agents.</div>
                        </div>
                      </a>
                      <a href="#pathways" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <span className="text-xl flex-shrink-0 mt-0.5">🗺️</span>
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Pathways</div>
                          <div className="text-white/60 text-sm leading-relaxed">A publication for designers, developers, tinkerers, and trailblazers.</div>
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a href="#discord" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Discord Community</div>
                          <div className="text-white/60 text-sm leading-relaxed">Join our fast-growing community of AI agent designers and developers.</div>
                        </div>
                      </a>
                      <a href="#github" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">GitHub</div>
                          <div className="text-white/60 text-sm leading-relaxed">Explore pre-built code examples and repos to use in agent projects.</div>
                        </div>
                      </a>
                      <a href="#youtube" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">YouTube Tutorials</div>
                          <div className="text-white/60 text-sm leading-relaxed">Learn from video tutorials and workshops created by Voiceflow.</div>
                        </div>
                      </a>
                      <a href="#events" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Virtual Events</div>
                          <div className="text-white/60 text-sm leading-relaxed">Join live and on-demand workshops with our team of expert agent builders.</div>
                        </div>
                      </a>
                      <a href="#apps" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div>
                          <div className="font-medium text-white text-[0.95rem] mb-1">Apps</div>
                          <div className="text-white/60 text-sm leading-relaxed">Third party apps to extend Voiceflow's functionality.</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="relative">
              <a href="#customers" className="text-white/90 hover:text-white text-[0.95rem] font-normal transition-colors py-2 block">
                Customers
              </a>
            </li>
            <li className="relative">
              <a href="#pricing" className="text-white/90 hover:text-white text-[0.95rem] font-normal transition-colors py-2 block">
                Pricing
              </a>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-transparent border-none text-white/90 hover:text-white text-[0.95rem] font-normal cursor-pointer transition-colors py-2">
              Sign in
            </button>
            <button className="bg-white/10 border border-white/20 text-white text-[0.95rem] font-medium px-5 py-2 rounded-md hover:bg-white/15 hover:border-white/30 transition-all">
              Book a demo
            </button>
            <button className="bg-blue-600 border-none text-white text-[0.95rem] font-medium px-5 py-2 rounded-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
              Sign up free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#platform" className="text-white/90 hover:text-white py-2">Platform</a>
              <a href="#usecases" className="text-white/90 hover:text-white py-2">Use Cases</a>
              <a href="#resources" className="text-white/90 hover:text-white py-2">Resources</a>
              <a href="#customers" className="text-white/90 hover:text-white py-2">Customers</a>
              <a href="#pricing" className="text-white/90 hover:text-white py-2">Pricing</a>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <button className="text-white/90 hover:text-white py-2 text-left">Sign in</button>
                <button className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-md">Book a demo</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign up free</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
