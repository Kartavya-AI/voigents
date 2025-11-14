import React from 'react';
import CTASection from './CTASection';

const ContactSales = () => {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24 pb-16">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
          Contact sales
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Request a Voigents Enterprise demo
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              Connect with our sales team to see how the Enterprise plan can help your team build and deploy AI
              agents at scale.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Work email*"
                className="w-full rounded-full border border-gray-200 px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full rounded-full border border-gray-200 px-5 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Where are you in your AI agent journey?*</option>
                <option value="production">We’re in production already but it needs improvement.</option>
                <option value="deliver-soon">Scoped project, need to deliver in the next 3-6 months.</option>
                <option value="just-started">Scoped project, just getting started.</option>
                <option value="researching">Researching, no scoped project yet.</option>
              </select>
              <textarea
                rows={3}
                placeholder="How did you hear about us?*"
                className="w-full rounded-2xl border border-gray-200 px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a call →
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(25,98,255,0.2) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              ></div>
            </div>
            <div className="relative grid grid-cols-3 gap-3">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-28 border border-blue-200 rounded-lg flex items-center justify-center text-[7px] font-mono text-blue-600/70 whitespace-pre leading-tight"
                >
                  {idx % 3 === 0 ? '@@@@' : ''}
                </div>
              ))}
              <div className="absolute inset-6 border border-blue-200 rounded-3xl mix-blend-multiply p-6 text-blue-600/60 font-mono text-[8px] leading-tight">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@%%%%%@@@@@@
@@@@@@@@@@@@@@%%%%%%@@@@@@
@@@@@@@@@@@@%%%%%%%%@@@@@@
@@@@@@@@@@@%%%%%%%%%@@@@@@`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 mt-16 pt-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
            <div>
              <h3 className="text-base sm:text-lg text-gray-500 font-medium whitespace-nowrap">
                Trusted by the best in the business
              </h3>
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-12 opacity-70 animate-scroll">
                {['TOMIS', 'USbank', 'USAA', 'CISCO', 'KAISER PERMANENTE', 'vodafone', 'salesforce'].map(
                  (logo) => (
                    <span key={logo} className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wide">
                      {logo}
                    </span>
                  )
                )}
                {['TOMIS', 'USbank', 'USAA', 'CISCO', 'KAISER PERMANENTE', 'vodafone', 'salesforce'].map(
                  (logo) => (
                    <span key={`${logo}-dup`} className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wide">
                      {logo}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />    
    </div>
  );
};

export default ContactSales;

