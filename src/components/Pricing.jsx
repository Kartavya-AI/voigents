import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from './CTASection';

const plans = [
  {
    name: 'Starter',
    description: 'For students and hobbyists',
    price: 'Free',
    credits: '100 credits',
    cta: 'Get started for free',
    features: [
      '1 workspace',
      '50 knowledge sources',
      'Basic LLM models',
      '2 agents',
      '1 concurrent voice call'
    ],
    gradient: 'from-[#9fa9bb] to-[#7d879b]'
  },
  {
    name: 'Pro',
    description: 'For individual builders',
    price: '$60',
    suffix: '/month',
    credits: '10k credits',
    cta: 'Start 7-day trial',
    features: [
      '2 workspaces',
      '3k knowledge sources',
      'All LLM models',
      'Up to 20 agents',
      '5 concurrent voice calls'
    ],
    gradient: 'from-[#2d7dfc] to-[#1b65d8]'
  },
  {
    name: 'Business',
    description: 'For growing teams',
    price: '$150',
    suffix: '/month',
    credits: '30k credits',
    cta: 'Start 7-day trial',
    features: [
      '5 workspaces',
      '10k knowledge sources',
      'LLM fallback models',
      'Unlimited agents',
      'Priority support',
      '15 concurrent voice calls'
    ],
    gradient: 'from-[#c216f2] to-[#8c05c7]'
  },
  {
    name: 'Enterprise',
    description: 'For scaling volume',
    price: 'Custom pricing',
    suffix: '',
    credits: 'Billed Annually',
    cta: 'Contact sales',
    features: [
      'Unlimited product usage',
      'Agent CMS',
      'Custom & private cloud',
      'Dedicated training',
      'Professional services',
      'Migration services',
      'Custom LLM support',
      'Custom contracting',
      'Custom widget privacy',
      'User management',
      'Single Sign-On (SSO)'
    ],
    gradient: 'from-[#15181f] to-[#090b10]'
  }
];

const planHeaders = [
  { name: 'Starter', cta: 'Sign up for starter' },
  { name: 'Pro', cta: 'Sign up for pro' },
  { name: 'Business', cta: 'Sign up for business' },
  { name: 'Enterprise', cta: 'Contact sales', link: '/contact-sales' }
];

const compareSections = [
  {
    title: 'Build and collaborate',
    rows: [
      {
        feature: 'Editors',
        values: {
          Starter: 'Single editor',
          Pro: 'Additional editors available for purchase',
          Business: 'Additional editors available for purchase',
          Enterprise: 'Unlimited to purchase'
        }
      },
      {
        feature: 'View-only collaborators',
        values: { Starter: 'Unlimited', Pro: 'Unlimited', Business: 'Unlimited', Enterprise: 'Unlimited' }
      },
      {
        feature: 'Number of workspaces',
        values: { Starter: '1', Pro: '2', Business: '5', Enterprise: 'Unlimited' }
      },
      {
        feature: 'Number of projects',
        values: { Starter: '2', Pro: '20', Business: 'Unlimited', Enterprise: 'Unlimited' }
      },
      {
        feature: 'Version history',
        values: { Starter: '7 days', Pro: '30 days', Business: 'Unlimited', Enterprise: 'Unlimited' }
      }
    ]
  },
  {
    title: 'Prototype and user test',
    rows: [
      {
        feature: 'Test user personas',
        values: { Starter: '1', Pro: '5', Business: 'Unlimited', Enterprise: 'Unlimited' }
      },
      {
        feature: 'Password protected prototypes',
        values: { Starter: 'cross', Pro: 'cross', Business: 'check', Enterprise: 'check' }
      }
    ]
  },
  {
    title: 'Launch and host',
    rows: [
      {
        feature: 'Customizable chat embed',
        values: { Starter: 'check', Pro: 'check', Business: 'check', Enterprise: 'check' }
      },
      {
        feature: 'Dialog API',
        values: { Starter: 'check', Pro: 'check', Business: 'check', Enterprise: 'check' }
      },
      {
        feature: 'Transcripts dashboard',
        values: { Starter: 'check', Pro: 'check', Business: 'check', Enterprise: 'check' }
      },
      {
        feature: 'Analytics dashboard',
        values: { Starter: 'check', Pro: 'check', Business: 'check', Enterprise: 'check' }
      },
      {
        feature: 'Transcript history',
        values: { Starter: '6 months', Pro: '6 months', Business: '6 months', Enterprise: '6 months' }
      },
      {
        feature: 'Knowledge base sources per agent',
        values: { Starter: '50', Pro: '3,000', Business: '10,000', Enterprise: 'Unlimited' }
      }
    ]
  },
  {
    title: 'Large Language Models',
    rows: [
      {
        feature: 'Large Language Models included',
        values: {
          Starter: 'ChatGPT',
          Pro: 'All: OpenAI, Anthropic',
          Business: 'All: OpenAI, Anthropic',
          Enterprise: 'Any model'
        }
      },
      {
        feature: 'Bring your own LLM',
        values: { Starter: 'cross', Pro: 'cross', Business: 'cross', Enterprise: 'check' }
      }
    ]
  },
  {
    title: 'Security and compliance',
    rows: [
      {
        feature: 'User permissions',
        values: { Starter: 'cross', Pro: 'cross', Business: 'check', Enterprise: 'check' }
      },
      {
        feature: 'SAML + Single Sign On (SSO)',
        values: { Starter: 'cross', Pro: 'cross', Business: 'cross', Enterprise: 'check' }
      },
      {
        feature: 'Private cloud hosting (AWS)',
        values: { Starter: 'cross', Pro: 'cross', Business: 'cross', Enterprise: 'check' }
      },
      {
        feature: 'Custom contracting & invoicing',
        values: { Starter: 'cross', Pro: 'cross', Business: 'cross', Enterprise: 'check' }
      },
      {
        feature: 'Custom SLA',
        values: { Starter: 'cross', Pro: 'cross', Business: 'cross', Enterprise: 'check' }
      },
      {
        feature: 'Custom widget privacy features',
        values: { Starter: 'cross', Pro: 'cross', Business: 'check', Enterprise: 'check' }
      }
    ]
  }
];

const renderCellValue = (value) => {
  if (value === 'check') {
    return <span className="text-blue-600 text-lg">✓</span>;
  }
  if (value === 'cross') {
    return <span className="text-gray-400 text-lg">×</span>;
  }
  return <span className="text-gray-800">{value}</span>;
};

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');
  const [openSection, setOpenSection] = useState('Build and collaborate');

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24 pb-16">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-[0.2em] mb-6">
            Pricing
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Pricing that scales from Startups to the Fortune 500
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Choose the right plan and credits package. To estimate the right credits package for you,
            use our credits calculator.
          </p>
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 gap-1 shadow-inner">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billing === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billing === 'annual'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Annual billing <span className="hidden sm:inline">(save 10%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="bg-white rounded-[32px] border border-gray-100 shadow-2xl shadow-gray-900/5 overflow-hidden flex flex-col"
            >
              <div
                className={`bg-gradient-to-b ${plan.gradient} text-white px-6 py-8 min-h-[180px] flex flex-col justify-between`}
              >
                <div>
                  <p className="text-sm text-white/70">{plan.description}</p>
                  <h3 className="text-2xl font-semibold mt-1">{plan.name}</h3>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    {plan.price}{' '}
                    {plan.suffix && <span className="text-lg font-medium">{plan.suffix}</span>}
                  </div>
                  <p className="text-sm text-white/80 mt-2">{plan.credits}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-6 flex-1">
                {plan.name === 'Enterprise' ? (
                  <Link
                    to="/contact-sales"
                    className="bg-gray-900 text-white w-full py-3 rounded-full font-semibold hover:bg-black/80 transition-colors text-center"
                  >
                    {plan.cta} →
                  </Link>
                ) : (
                  <button className="bg-gray-900 text-white w-full py-3 rounded-full font-semibold hover:bg-black/80 transition-colors">
                    {plan.cta} →
                  </button>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-red-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">New to Voigents credits?</h3>
            <p className="text-gray-600 text-sm mb-6">
              Credits power your AI agents and all AI services they use, including third-party LLMs and other
              AI tools.
            </p>
            <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors">
              Intro to Voigents credits
              <span>→</span>
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Need to estimate credit usage?</h3>
            <p className="text-gray-600 text-sm mb-6">
              Use our credit calculator to figure out how many credits you need, and the best plan for your
              team.
            </p>
            <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors">
              Use our credit calculator
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Compare Plans */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 shadow-lg">
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="p-6 border-r border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900">Compare Plans</h3>
            </div>
            {planHeaders.map((plan, index) => (
              <div
                key={plan.name}
                className={`p-6 text-center ${index < planHeaders.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <p className="text-lg font-semibold text-gray-900 mb-4">{plan.name}</p>
                {plan.link ? (
                  <Link
                    to={plan.link}
                    className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-black transition-colors"
                  >
                    {plan.cta} →
                  </Link>
                ) : (
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-black transition-colors">
                    {plan.cta} →
                  </button>
                )}
              </div>
            ))}
          </div>

          {compareSections.map((section) => (
            <div key={section.title} className="border-t border-gray-200">
              <button
                onClick={() => setOpenSection((prev) => (prev === section.title ? '' : section.title))}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{section.title}</span>
                <span
                  className={`text-gray-500 transition-transform duration-300 ${
                    openSection === section.title ? 'rotate-180' : ''
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSection === section.title ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className="overflow-x-auto border-t border-gray-100">
                  <table className="w-full text-left">
                    <tbody>
                      {section.rows.map((row) => (
                        <tr key={row.feature} className="border-b border-gray-100">
                          <td className="w-1/5 px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                          {planHeaders.map((plan, index) => (
                            <td
                              key={plan.name}
                              className={`px-6 py-4 text-sm text-center ${
                                index < planHeaders.length - 1 ? 'border-l border-gray-100' : ''
                              }`}
                            >
                              {renderCellValue(row.values[plan.name])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Pricing;