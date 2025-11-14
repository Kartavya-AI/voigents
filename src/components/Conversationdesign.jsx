import React from 'react';  
import { useState } from 'react';
import viewImage from '../assets/view.png';
import CTASection from './CTASection';

const Conversationdesign = () => {
    const [chatOpen, setChatOpen] = useState(true);
    const [chatMessages, setChatMessages] = useState([
      { type: 'agent', text: 'Hello! How can I help with your project?' },
      { type: 'user', text: "I can't get the Knowledge Base API to work." },
      { type: 'agent', text: 'No problem. Can you share the code snippet from the API call so I can review?' },
      { type: 'user', text: 'Yes', isButton: true },
      { 
        type: 'user', 
        text: `{
    "question":"Suggest a woodworking project idea and how it would be built.",
    "chunkLimit":2,
    "tags":{
      "include":{
        "items": [
          "beginner",
          "small_scale"
        ]
      },
      "operator":"and"
    }
  }`,
        isCode: true
      },
      { type: 'agent', text: "I see the issue. Let me rewrite this for you using a different format for \"tags\"." }
    ]);
  
    return (
      <div className="min-h-screen bg-white pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="text-blue-600 text-sm font-medium mb-4 uppercase tracking-wide">
                  Conversation design
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Accelerate your team's conversation design workflow
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">Voigents helps conversational AI teams design, test, and manage agent design and testing workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-base">
                    Start for free
                  </button>
                  <button className="bg-white border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-md font-medium hover:border-gray-400 transition-colors text-base">
                    Book a demo
                  </button>
                </div>
              </div>
  
              {/* Client Logos Section */}
              <div className="mt-20 lg:mt-24">
                <h2 className="text-lg sm:text-xl text-gray-700 mb-8 font-medium">
                  Teams of every size trust Voiceflow for their conversation design processes
                </h2>
                <div className="flex flex-wrap items-center gap-8 lg:gap-12 opacity-60">
                  <div className="text-2xl font-bold text-gray-800">USAA</div>
                  <div className="text-2xl font-bold text-gray-800">Sage</div>
                  <div className="text-2xl font-bold text-gray-800">VODAFONE</div>
                  <div className="text-2xl font-bold text-gray-800">THE HOME DEPOT</div>
                </div>
              </div>
            </div>
  
            {/* Right Side - Chat Widget */}
            {chatOpen && (
              <div className="lg:sticky lg:top-24 w-full lg:w-auto">
                <div className="w-full lg:w-80 xl:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col max-h-[600px]">
                  {/* Chat Header */}
                  <div className="bg-gray-800 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
                    <span className="font-medium">Tico Project Agent</span>
                    <button 
                      onClick={() => setChatOpen(false)}
                      className="text-white/80 hover:text-white transition-colors"
                      aria-label="Close chat"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
  
                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {chatMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.type === 'agent' && (
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                              <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                            </svg>
                          </div>
                        )}
                        <div className={`max-w-[85%] ${message.type === 'user' ? 'text-right' : ''}`}>
                          {message.isButton ? (
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                              {message.text}
                            </button>
                          ) : message.isCode ? (
                            <div className="bg-gray-900 text-gray-100 px-4 py-3 rounded-lg text-xs font-mono whitespace-pre-wrap overflow-x-auto border border-gray-700">
                              {message.text}
                            </div>
                          ) : (
                            <div className={`px-4 py-2 rounded-lg text-sm ${
                              message.type === 'user' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-white text-gray-900 border border-gray-200'
                            }`}>
                              {message.text}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
  
                  {/* Chat Input */}
                  <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Write a message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                      <button className="text-gray-500 hover:text-gray-700 p-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zM13 9a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 p-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 4h12v12H4V4zm1 1v10h10V5H5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Why Teams Build AI Copilots Section */}
        <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="relative bg-blue-600 rounded-3xl p-8 lg:p-16 overflow-hidden text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 2px, transparent 2px)',
                  backgroundSize: '80px 80px'
                }}
              ></div>
            </div>
  
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                <p className="text-blue-200 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Conversation design
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Design complex conversations
                </h2>
                <p className="text-lg sm:text-xl text-blue-100">
                Design complex conversations using advanced features built specifically for the design of voice and chat agents.
                </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                      <path
                        d="M16 12L32 12L16 36L32 36"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time collaboration</h3>
                    <p className="text-blue-100 leading-relaxed">
                    Collaborate with up to 100 team members (we've tested) in real-time on the same design.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                      <path
                        d="M16 20C16 18.8954 16.8954 18 18 18H30C31.1046 18 32 18.8954 32 20V28C32 29.1046 31.1046 30 30 30H18C16.8954 30 16 29.1046 16 28V20Z"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path d="M24 30V40M24 8V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced logic & components</h3>
                    <p className="text-blue-100 leading-relaxed">
                    Create and share reusable components and templates for your team to leverage.     </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="3" />
                      <path
                        d="M16 18H32M16 24H32M16 30H28"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">User permissions</h3>
                    <p className="text-blue-100 leading-relaxed">
                    Secure and manage work across you organization with SSO and advanced user permissions.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="3" />
                      <path
                        d="M24 12V8M24 40V36M12 24H8M40 24H36"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Single source of truth</h3>
                    <p className="text-blue-100 leading-relaxed">
                    Maintain a true single source of truth, unifying your design files and team workflows in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* How It Works Section */}
        <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-12 lg:mb-16 text-center">
            <div className="inline-flex items-center justify-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-blue-200 text-base">⋃</span>
              Use cases
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 mx-auto max-w-4xl">
              Learn how these teams are designing conversations across teams
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Teams use Voigents to design, test, and launch chat or voice AI agents — together, faster, at scale.
            </p>
          </div>
  
          
  
        
        </section>
  
        {/* Case Studies Section */}
        <section className="bg-gray-100 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Client Logos */}
            <div className="flex flex-wrap items-center gap-8 lg:gap-12 mb-12 lg:mb-16 opacity-60">
              <div className="text-2xl font-bold text-gray-800">TRILOGY</div>
              <div className="text-2xl font-bold text-gray-800">Roam</div>
              <div className="text-2xl font-bold text-gray-800">Voigents</div>
            </div>
  
            {/* Case Study Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div>
                <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Trilogy automates 60% of their L1 and L2 support tickets.
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Their AI agent is powered by a curated knowledge base, integrates with Zendesk, and is embedded in the help centers of 90+ products.
                </p>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-base">
                  Read more
                </button>
              </div>
  
              {/* Right Side - Chart */}
              <div className="bg-gray-200 rounded-lg p-6 lg:p-8">
                <div className="relative w-full h-64 lg:h-80">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Grid lines */}
                    <defs>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4B5563" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4B5563" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <line
                        key={i}
                        x1="40"
                        y1={50 + i * 40}
                        x2="360"
                        y2={50 + i * 40}
                        stroke="#D1D5DB"
                        strokeWidth="1"
                      />
                    ))}
  
                    {/* Area chart path */}
                    <path
                      d="M 60 250 Q 100 240, 140 220 T 220 180 T 300 120 T 340 80"
                      fill="url(#areaGradient)"
                      stroke="none"
                    />
                    
                    {/* Line */}
                    <path
                      d="M 60 250 Q 100 240, 140 220 T 220 180 T 300 120 T 340 80"
                      fill="none"
                      stroke="#4B5563"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
  
                    {/* Data points */}
                    <circle cx="60" cy="250" r="4" fill="#4B5563" />
                    <circle cx="340" cy="80" r="4" fill="#4B5563" />
  
                    {/* Labels */}
                    <text x="50" y="260" fontSize="12" fill="#6B7280" fontWeight="500">
                      Week 1
                    </text>
                    <text x="50" y="255" fontSize="14" fill="#374151" fontWeight="bold">
                      6%
                    </text>
  
                    <text x="330" y="75" fontSize="12" fill="#6B7280" fontWeight="500" textAnchor="end">
                      Week 19
                    </text>
                    <text x="330" y="70" fontSize="14" fill="#374151" fontWeight="bold" textAnchor="end">
                      60%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
  
          {/* Enterprise Section */}
          <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="relative bg-gray-900 rounded-2xl lg:rounded-3xl p-6 lg:p-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-2 border-white/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-white/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-2 border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="relative z-10">
              {/* Hero Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-10 lg:mb-12">
                <div>
                  <div className="text-orange-500 text-sm font-medium mb-3 uppercase tracking-wide">
                    E Enterprise Cloud
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Scale and security with Voiceflow Enterprise
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                    Voiceflow helps enterprise product teams securely build, test, launch, and manage conversational AI agents at scale.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-base flex items-center gap-2">
                    Discover Enterprise Cloud
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:block">
                  {/* Abstract circular graphic placeholder */}
                  <div className="w-full h-48 flex items-center justify-center">
                    <div className="relative w-44 h-44">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 opacity-50"></div>
                      <div className="absolute inset-3 rounded-full border-2 border-white/10"></div>
                      <div className="absolute inset-6 rounded-full border border-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
                {/* Feature 1: Your AI platform of record */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-orange-500">
                      <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="3" strokeDasharray="2 2"/>
                      <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="3" strokeDasharray="2 2"/>
                      <path d="M24 18L24 30M18 24L30 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                    Your AI platform of record
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Build, scale, and collaborate on AI products in a centralized, secure platform across every team.
                  </p>
                </div>
  
                {/* Feature 2: Get ideas to market fast */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-orange-500">
                      <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="3"/>
                      <path d="M24 14L24 20M24 20L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 32C18 28.6863 20.6863 26 24 26C27.3137 26 30 28.6863 30 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="24" cy="18" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                    Get ideas to market fast
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Accelerate AI product team sprints to ship with speed and quality, while efficiently scaling to new use cases.
                  </p>
                </div>
  
                {/* Feature 3: Avoid vendor lock-in */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-orange-500">
                      <rect x="12" y="18" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="3"/>
                      <path d="M18 18L18 12C18 10.8954 18.8954 10 20 10H28C29.1046 10 30 10.8954 30 12V18" stroke="currentColor" strokeWidth="3"/>
                      <path d="M24 24L24 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                    Avoid vendor lock-in
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Bet on AI, not single vendors. Agnostically adapt to changing LLM and NLU technologies.
                  </p>
                </div>
  
                {/* Feature 4: Controlled customization */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-orange-500">
                      <path d="M24 8L24 40M8 24L40 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M24 8C24 8 16 16 16 24C16 32 24 40 24 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                      <path d="M24 8C24 8 32 16 32 24C32 32 24 40 24 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                      <circle cx="24" cy="24" r="4" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                    Controlled customization
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Build endless API-first data and interface integrations alongside any LLM models with secure guardrails.
                  </p>
                </div>
              </div>
  
              {/* Client Logos Section */}
              <div className="border-t border-gray-700 pt-8 lg:pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center">
                  {/* Left Side - Text */}
                  <div className="flex-shrink-0">
                    <h3 className="text-base sm:text-lg text-gray-400 font-medium whitespace-nowrap">
                      Trusted by the best in the business
                    </h3>
                  </div>
                  
                  {/* Right Side - Scrolling Logos */}
                  <div className="overflow-hidden relative">
                    <div className="flex items-center gap-6 lg:gap-8 opacity-60 animate-scroll">
                      {/* First set of logos */}
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">TOMIS</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">USbank</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">USAA</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">CISCO</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">KAISER PERMANENTE</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">vodafone</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">salesforce</div>
                      {/* Duplicate set for seamless loop */}
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">TOMIS</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">USbank</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">USAA</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">CISCO</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">KAISER PERMANENTE</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">vodafone</div>
                      <div className="text-base lg:text-lg font-bold text-white whitespace-nowrap">salesforce</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
  
        {/* Use Cases Section */}
        <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
          <div className="text-center mb-12 lg:mb-16">
            <a href="#usecases" className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors inline-block mb-6">
              Learn more about use cases
            </a>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate support, then everything else
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Teams are automating and improving business critical use cases with AI agents.
            </p>
          </div>
  
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1: Customer support */}
            <button 
              onClick={() => {
                // TODO: Add route navigation
                // Example: navigate('/customer-support');
              }}
              className="bg-gray-900 rounded-lg p-6 lg:p-8 flex flex-col text-left hover:bg-gray-800 transition-colors cursor-pointer w-full"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                  <path d="M12 20C12 16.6863 14.6863 14 18 14C21.3137 14 24 16.6863 24 20V28C24 31.3137 21.3137 34 18 34C14.6863 34 12 31.3137 12 28V20Z" stroke="currentColor" strokeWidth="3"/>
                  <path d="M24 20C24 16.6863 26.6863 14 30 14C33.3137 14 36 16.6863 36 20V28C36 31.3137 33.3137 34 30 34C26.6863 34 24 31.3137 24 28V20Z" stroke="currentColor" strokeWidth="3"/>
                  <path d="M18 24H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Customer support
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Automate customer support tickets, enable live agents, and solve complex user questions.
              </p>
            </button>
  
            {/* Card 2: In-app copilots */}
            <button 
              onClick={() => {
                // TODO: Add route navigation
                // Example: navigate('/in-app-copilots');
              }}
              className="bg-gray-900 rounded-lg p-6 lg:p-8 flex flex-col text-left hover:bg-gray-800 transition-colors cursor-pointer w-full"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                  <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="24" cy="24" r="6" fill="currentColor"/>
                  <path d="M24 12L24 8M24 40L24 36M12 24L8 24M40 24L36 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                In-app copilots
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Improve employee onboarding, human resources FAQs, and team activation.
              </p>
            </button>
  
            {/* Card 3: Conversation design */}
            <button 
              onClick={() => {
                // TODO: Add route navigation
                // Example: navigate('/conversation-design');
              }}
              className="bg-gray-900 rounded-lg p-6 lg:p-8 flex flex-col text-left hover:bg-gray-800 transition-colors cursor-pointer w-full"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="3"/>
                  <path d="M8 18H40M8 24H40M8 30H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Conversation design
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Accelerate manual revenue collection tasks and protect revenue using custom AI agents.
              </p>
            </button>
  
            {/* Card 4: Custom AI agents */}
            <button 
              onClick={() => {
                // TODO: Add route navigation
                // Example: navigate('/custom-ai-agents');
              }}
              className="bg-gray-900 rounded-lg p-6 lg:p-8 flex flex-col text-left hover:bg-gray-800 transition-colors cursor-pointer w-full"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                  <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="3"/>
                  <path d="M20 24L22 26L28 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Custom AI agents
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Guide users through tools, recommend products, or authenticate customers.
              </p>
            </button>
          </div>
        </section>
  
        <CTASection />
      </div>
    );
  };
  
  export default Conversationdesign;
  