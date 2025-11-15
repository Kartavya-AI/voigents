import React from 'react';
import { Link } from 'react-router-dom';

const CustomersSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Customers Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
              <path d="M9 4C7 4 5 6 5 8V10C5 12 7 14 9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 4C17 4 19 6 19 8V10C19 12 17 14 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 20C7 20 5 18 5 16V14C5 12 7 10 9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 20C17 20 19 18 19 16V14C19 12 17 10 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-blue-600 font-medium text-sm sm:text-base">Customers</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight max-w-4xl mx-auto">
            Built for teams big and small to build AI Agents together
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hear it directly from our customers.
          </p>

          {/* Book a demo Button */}
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors mb-12 lg:mb-16"
          >
            Book a demo
          </Link>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {/* Cisco Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8">
            <div className="mb-6">
              <div className="text-2xl font-bold text-blue-600">CISCO</div>
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              "Voiceflow takes the pain out of building powerful AI Agents. Building Agents is very much a "team sport" and Voiceflow makes it fun to work together and build customer facing use-cases and internal AI applications."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12 14C7.58172 14 4 16.6863 4 20V22H20V20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Victor Algaze</div>
                <div className="text-sm text-gray-600">Software Engineer</div>
              </div>
            </div>
          </div>

          {/* Trilogy Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <path d="M12 2L22 20H2L12 2Z" fill="currentColor"/>
                </svg>
                <div className="text-2xl font-bold text-blue-600">TRILOGY</div>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              "Voiceflow is a very versatile tool, combining visual flows with strong API capabilities and also providing a code editor and functions, for developers."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12 14C7.58172 14 4 16.6863 4 20V22H20V20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Ciprian Nastase</div>
                <div className="text-sm text-gray-600">L3 Support AI Engineer</div>
              </div>
            </div>
          </div>

          {/* Sanlam Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <path d="M12 2C8 2 6 4 6 8C6 12 8 14 12 14C16 14 18 12 18 8C18 4 16 2 12 2Z" fill="currentColor"/>
                  <path d="M12 22C16 22 18 20 18 16C18 12 16 10 12 10C8 10 6 12 6 16C6 20 8 22 12 22Z" fill="currentColor"/>
                </svg>
                <div className="text-2xl font-bold text-blue-600">Sanlam</div>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              "Voiceflow provides us with massive acceleration, enabling us to experiment without fear... Voiceflow allowed us to focus on value-adding activities like orchestration and building a robust, generative conversational architecture."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12 14C7.58172 14 4 16.6863 4 20V22H20V20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Andre Fredericks</div>
                <div className="text-sm text-gray-600">Chief Operating Officer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;

