import React, { useMemo, useState } from 'react';

const categories = [
  'AI Basics',
  'AI Implementation',
  'AI Platforms',
  'Automation',
  'Business & Agencies',
  'Chatbots',
  'Conversational Design',
  'Sales & Marketing',
  'Vertical AI',
  'Voice AI'
];


const posts = [
  {
    category: 'Chatbots',
    date: 'October 30, 2025',
    title: 'How to Build a Chatbot with Zapier (Step by Step)',
    excerpt:
      'This step-by-step guide shows you how to build a Zapier AI chatbot using Voiceflow. Learn to design a conversation that…',
    accent: 'from-[#f0702c] to-[#d14900]',
    icon: 'zapier'
  },
  {
    category: 'Voice AI',
    date: 'October 30, 2025',
    title: 'How to Build an AI IVR and Call Center [2025]',
    excerpt:
      'This guide explains why traditional “press-button” IVR systems are costing you customers, and why your business should adop…',
    accent: 'from-[#1a64ff] to-[#003ac9]',
    icon: 'ivr'
  },
  {
    category: 'Conversational Design',
    date: 'October 30, 2025',
    title: 'Best Way to Use Conversational AI for E-Commerce [2025]',
    excerpt:
      'Modern conversational AI is no longer optional for e-commerce, driving higher conversion and better post-purchase support…',
    accent: 'from-[#f0702c] to-[#d14900]',
    icon: 'cart'
  },
  {
    category: 'Voice AI',
    date: 'October 30, 2025',
    title: 'How to Build an AI Call Agent for Restaurants [2025]',
    excerpt:
      'Stop losing customers to your voicemail. With diners ordering elsewhere after one missed call, an AI call agent is a must…',
    accent: 'from-[#8d22f2] to-[#5d04a9]',
    icon: 'store'
  },
  {
    category: 'AI Platforms',
    date: 'October 30, 2025',
    title: '3 Best AI Scheduling Assistants in 2025 [Tried & Tested]',
    excerpt:
      'We review the 3 top scheduling assistants, how they work, and why they are crucial for protecting your team’s focus…',
    accent: 'from-[#f2b621] to-[#d18100]',
    icon: 'calendar'
  },
  {
    category: 'Voice AI',
    date: 'October 30, 2025',
    title: 'Automate Phone Calls with the #1 AI Voice Agent [2025]',
    excerpt:
      'Stop making customers wait on hold and paying human agents to answer the same questions. Learn how modern AI agents handle…',
    accent: 'from-[#1a64ff] to-[#003ac9]',
    icon: 'wave'
  }
];

const iconMap = {
  zapier: (
    <svg width="96" height="32" viewBox="0 0 96 32" fill="none">
      <text x="0" y="22" fill="white" fontSize="24" fontWeight="600">
        zapier
      </text>
    </svg>
  ),
  ivr: (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" stroke="white" strokeWidth="2.2">
      <rect x="5" y="5" width="70" height="30" rx="8" strokeDasharray="6 6" />
      <path d="M15 45H65" strokeLinecap="round" />
      <path d="M20 40L25 45L30 40" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cart: (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" stroke="white" strokeWidth="2.5">
      <circle cx="20" cy="42" r="4" />
      <circle cx="38" cy="42" r="4" />
      <path d="M10 10H14L18 32H42L46 18H20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  store: (
    <svg width="60" height="54" viewBox="0 0 60 54" fill="none" stroke="white" strokeWidth="2.2">
      <path d="M6 20L10 6H50L54 20" strokeLinecap="round" />
      <rect x="10" y="20" width="40" height="28" rx="4" />
      <path d="M30 20V48" strokeLinecap="round" />
    </svg>
  ),
  calendar: (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" stroke="white" strokeWidth="2.2">
      <rect x="8" y="12" width="38" height="34" rx="6" />
      <path d="M8 20H46" />
      <path d="M18 8V16" strokeLinecap="round" />
      <path d="M36 8V16" strokeLinecap="round" />
      <circle cx="27" cy="33" r="6" />
    </svg>
  ),
  wave: (
    <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="white" strokeWidth="2.2">
      <path d="M5 20H15" strokeLinecap="round" />
      <path d="M20 8V32" strokeLinecap="round" />
      <path d="M30 4V36" strokeLinecap="round" />
      <path d="M40 10V30" strokeLinecap="round" />
      <path d="M50 6V34" strokeLinecap="round" />
      <path d="M60 12V28" strokeLinecap="round" />
      <path d="M70 16V24" strokeLinecap="round" />
    </svg>
  )
};

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return posts;
    return posts.filter((post) => {
      const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [searchValue]);

  return (
    <div className="relative overflow-hidden bg-[#0b1118] text-white pt-28 lg:pt-32 pb-24 min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 60%)'
        }}
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)'
        }}
      ></div>

      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-5xl sm:text-6xl font-semibold tracking-tight mb-4">Blog</p>
        <h1 className="text-xl sm:text-2xl font-normal text-white/80">
          Everything you need to know about conversational AI, at your fingertips.
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full text-sm border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-10">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">⌕</span>
            <input
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Try FAQ chatbot, Zendesk integration..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-11 pr-4 text-base placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
            />
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-white/70 py-16 border border-white/5 rounded-3xl">
            No articles match “{searchValue}”. Try a different keyword.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {filteredPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-[28px] bg-white shadow-[0_25px_60px_rgba(8,15,52,0.08)] overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gray-500">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] tracking-[0.25em]">
                    {post.category}
                  </span>
                  <span className="text-gray-400 tracking-normal">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-3">{post.excerpt}</p>
              </div>
              <div className={`h-40 relative bg-gradient-to-r ${post.accent} text-white`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
                    backgroundSize: '14px 14px'
                  }}
                ></div>
                <div className="relative z-[1] h-full flex items-center justify-center">{iconMap[post.icon]}</div>
              </div>
            </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;

