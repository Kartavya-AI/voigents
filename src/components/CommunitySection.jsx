import React from 'react';

const CommunitySection = () => {
  return (
    <section className="bg-white py-16 lg:py-24" style={{
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.05) 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Community Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-blue-600 font-medium text-sm sm:text-base">Community</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight max-w-4xl mx-auto">
            Join Voigents's community of 500K global developers
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with other builders, share agent functions, and learn how to create advanced AI automations.
          </p>

          {/* Sign up free Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors">
            Sign up free
          </button>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Hire a Voigents Expert */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                    <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15M9 15H15M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9L12 3L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hire a Voigents Expert
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Hire certified Voigents Experts to help you build your next project.
                  </p>
                </div>
              </div>
            </div>

            {/* Discord Community */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M20.317 4.37C19.396 3.768 18.381 3.308 17.281 3.01C16.95 2.45 16.5 1.97 15.96 1.6C15.42 1.23 14.8 0.98 14.15 0.87C13.5 0.76 12.83 0.79 12.19 0.96C11.55 1.13 10.95 1.44 10.44 1.87C9.93 2.3 9.52 2.84 9.24 3.45C8.14 3.15 7.13 2.69 6.21 2.09C5.29 1.49 4.47 0.76 3.77 0C3.07 0.76 2.25 1.49 1.33 2.09C0.41 2.69 -0.6 3.15 -1.7 3.45C-1.98 2.84 -2.39 2.3 -2.9 1.87C-3.41 1.44 -4.01 1.13 -4.65 0.96C-5.29 0.79 -5.97 0.76 -6.62 0.87C-7.27 0.98 -7.89 1.23 -8.43 1.6C-8.97 1.97 -9.42 2.45 -9.75 3.01C-10.85 3.31 -11.86 3.77 -12.78 4.37C-13.7 4.97 -14.52 5.7 -15.22 6.46C-15.22 7.46 -15.22 8.46 -15.22 9.46C-14.52 10.22 -13.7 10.95 -12.78 11.55C-11.86 12.15 -10.85 12.61 -9.75 12.91C-9.42 13.47 -8.97 13.95 -8.43 14.32C-7.89 14.69 -7.27 14.94 -6.62 15.05C-5.97 15.16 -5.29 15.13 -4.65 14.96C-4.01 14.79 -3.41 14.48 -2.9 14.05C-2.39 13.62 -1.98 13.08 -1.7 12.47C-0.6 12.77 0.41 13.23 1.33 13.83C2.25 14.43 3.07 15.16 3.77 15.92C4.47 15.16 5.29 14.43 6.21 13.83C7.13 13.23 8.14 12.77 9.24 12.47C9.52 13.08 9.93 13.62 10.44 14.05C10.95 14.48 11.55 14.79 12.19 14.96C12.83 15.13 13.5 15.16 14.15 15.05C14.8 14.94 15.42 14.69 15.96 14.32C16.5 13.95 16.95 13.47 17.28 12.91C18.38 12.61 19.39 12.15 20.31 11.55C21.23 10.95 22.05 10.22 22.75 9.46C22.75 8.46 22.75 7.46 22.75 6.46C22.05 5.7 21.23 4.97 20.31 4.37H20.317Z" fill="currentColor"/>
                    <path d="M8 10H16M8 14H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Discord Community
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Join our fast-growing community of AI agent designers, developers, and builders.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Tutorials */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="currentColor"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    YouTube Tutorials
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn from video tutorials created by the Voigents team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Templates */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Templates
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover our library of agent templates to help you get started with your use case.
                  </p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Resources
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore collections of agent-building resources created by the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathways Blog */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pathways Blog
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A publication for designers, developers, tinkerers, and trailblazers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

