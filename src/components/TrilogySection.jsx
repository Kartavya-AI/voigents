import React, { useState } from 'react';

const TrilogySection = () => {
  const [activeTab, setActiveTab] = useState('order');

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
              <path d="M9 4C7 4 5 6 5 8V10C5 12 7 14 9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 4C17 4 19 6 19 8V10C19 12 17 14 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 20C7 20 5 18 5 16V14C5 12 7 10 9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 20C17 20 19 18 19 16V14C19 12 17 10 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-blue-600 font-medium text-sm sm:text-base">Use cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Start with customer support, then scale across use cases
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Confidently start with support and scale quickly.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Case Study */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">TRILOGY</div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Resolved 70% of support tickets saving $425,000 in 90 days after launch
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Trilogy team built a custom AI agent to automate customer support across 90 product lines, automating 70% of Level 1 tickets.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Read case study
            </button>
          </div>

          {/* Right Side - AI Support Widget */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Widget Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {/* Delta/Triangle Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L22 20H2L12 2Z" fill="white"/>
                  </svg>
                  <span className="font-semibold text-base">Trilogy AI Support</span>
                </div>
                <div className="flex gap-3">
                  {/* Speaker/Mute Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cursor-pointer">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 9C19.5304 9.53043 19.7893 10.0391 19.7893 10.5263C19.7893 11.0135 19.5304 11.5222 19 12.0526" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="15" y1="7" x2="21" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {/* Refresh Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cursor-pointer">
                    <path d="M1 4V10H7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 20V14H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.49 9C19.7969 7.20431 18.6337 5.63628 17.1338 4.51677C15.6339 3.39726 13.8571 2.77324 12 2.72324C10.1429 2.77324 8.36612 3.39726 6.86622 4.51677C5.36632 5.63628 4.20309 7.20431 3.51 9L1 4M23 20L20.49 15C19.7969 16.7957 18.6337 18.3637 17.1338 19.4832C15.6339 20.6027 13.8571 21.2268 12 21.2768C10.1429 21.2268 8.36612 20.6027 6.86622 19.4832C5.36632 18.3637 4.20309 16.7957 3.51 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Order Lookup Section */}
              <div className="p-3 sm:p-4">
                {/* Large Delta Icon */}
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 2L22 20H2L12 2Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-3 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('order')}
                    className={`pb-2 px-2 text-sm font-medium transition-colors ${
                      activeTab === 'order'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Find by Order Number
                  </button>
                  <button
                    onClick={() => setActiveTab('email')}
                    className={`pb-2 px-2 text-sm font-medium transition-colors ${
                      activeTab === 'email'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Find by Email
                  </button>
                </div>

                {/* Input Fields */}
                <div className="space-y-2.5 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="anna.rosen@voiceflow.com"
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  {activeTab === 'order' && (
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Order Number
                      </label>
                      <input
                        type="text"
                        defaultValue="1009"
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  )}
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 py-2 rounded-lg font-medium transition-colors text-sm">
                    Find Order
                  </button>
                </div>

                {/* Order Status History */}
                <div className="space-y-2 mb-3">
                  {/* Delivered Card */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                    <div className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-600 mt-0.5">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12L12 9L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm mb-1">Delivered</div>
                        <div className="text-xs text-gray-600 mb-1">Your package has been delivered.</div>
                        <div className="text-xs text-gray-500">2/10/2025, 3:43:03 PM</div>
                      </div>
                    </div>
                  </div>

                  <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">
                    Hide History
                  </button>

                  {/* Order Confirmed Card */}
                  <div className="bg-white border border-gray-200 rounded-lg p-2">
                    <div className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-600 mt-0.5">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm mb-1">Order Confirmed</div>
                        <div className="text-xs text-gray-600">Your order has been confirmed and payment processed</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input Area */}
                <div className="flex items-center bg-gray-100 rounded-lg p-2 mt-3">
                  <input
                    type="text"
                    placeholder="Message..."
                    className="flex-1 border-none bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cursor-pointer text-gray-600 hover:text-gray-900 mr-2">
                    <path d="M12 1C13.1 1 14 1.9 14 3V11C14 12.1 13.1 13 12 13C10.9 13 10 12.1 10 11V3C10 1.9 10.9 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 23H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cursor-pointer text-gray-600 hover:text-gray-900">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-3 py-1.5 text-center">
                <p className="text-xs text-gray-500">Powered by Voigents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrilogySection;

