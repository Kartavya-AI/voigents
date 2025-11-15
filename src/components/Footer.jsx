import React from 'react';
import { Link } from 'react-router-dom';
import voigentsLogo from '../assets/voigentslogo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-12 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <img src={voigentsLogo} alt="Voigents" className="h-10 w-auto mb-4" />
          </div>

          {/* Voiceflow Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Voigents</h4>
            <ul className="space-y-3">
              <li><a href="#create-account" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Create account</a></li>
              <li><a href="#sign-in" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Sign in</a></li>
              <li><a href="#docs" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Docs</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</a></li>
              <li><a href="#changelog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Changelog</a></li>
              <li><a href="#status" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><a href="#docs" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Docs</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</a></li>
              <li><a href="#changelog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Changelog</a></li>
              <li><a href="#status" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#ai-agents" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">AI agents</a></li>
              <li><a href="#industries" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Industries</a></li>
              <li><a href="#automate-support" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Automate support</a></li>
              <li><a href="#call-automation" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Call automation</a></li>
              <li><a href="#answering-service" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Answering service</a></li>
              <li><a href="#cold-calling" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Cold calling</a></li>
              <li><a href="#appointment-booking" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Appointment booking</a></li>
              <li><a href="#virtual-receptionist" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Virtual receptionist</a></li>
            </ul>
          </div>

          {/* Sales Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Sales</h4>
            <ul className="space-y-3">
              <li><a href="#overview" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Overview</a></li>
              <li><a href="#security" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Security</a></li>
              <li><a href="#contact-sales" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact sales</a></li>
              <li><a href="#soc2" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">SOC-2 compliance</a></li>
              <li><a href="#gdpr" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">GDPR compliance</a></li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Community</h4>
            <ul className="space-y-3">
              <li><a href="#experts" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Voigents Experts</a></li>
              <li><a href="#discord" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Discord</a></li>
              <li><a href="#resources" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Resources</a></li>
              <li><a href="#templates" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Templates</a></li>
              <li><a href="#integrations" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Integrations</a></li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li><a href="#pathways" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pathways</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a></li>
              <li><a href="#brand-assets" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Brand assets</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Careers</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms of service</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</a></li>
              <li><a href="#workplace-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Workplace policy</a></li>
            </ul>
          </div>
        </div>

        {/* G2 Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            G2 Leader Winter 2025
          </div>
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            G2 Leader Winter 2025
          </div>
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            G2 High Performer Winter 2025
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Voigents, Inc.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#twitter" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#linkedin" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V9H8V19ZM6.5 7.5C5.672 7.5 5 6.828 5 6C5 5.172 5.672 4.5 6.5 4.5C7.328 4.5 8 5.172 8 6C8 6.828 7.328 7.5 6.5 7.5ZM20 19H17V13.5C17 12.12 15.88 11 14.5 11C13.12 11 12 12.12 12 13.5V19H9V9H12V10.5C12.88 9.34 14.12 8.5 15.5 8.5C18.538 8.5 20 10.962 20 14V19Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#discord" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.317 4.37C19.396 3.768 18.381 3.308 17.281 3.01C16.95 2.45 16.5 1.97 15.96 1.6C15.42 1.23 14.8 0.98 14.15 0.87C13.5 0.76 12.83 0.79 12.19 0.96C11.55 1.13 10.95 1.44 10.44 1.87C9.93 2.3 9.52 2.84 9.24 3.45C8.14 3.15 7.13 2.69 6.21 2.09C5.29 1.49 4.47 0.76 3.77 0C3.07 0.76 2.25 1.49 1.33 2.09C0.41 2.69 -0.6 3.15 -1.7 3.45C-1.98 2.84 -2.39 2.3 -2.9 1.87C-3.41 1.44 -4.01 1.13 -4.65 0.96C-5.29 0.79 -5.97 0.76 -6.62 0.87C-7.27 0.98 -7.89 1.23 -8.43 1.6C-8.97 1.97 -9.42 2.45 -9.75 3.01C-10.85 3.31 -11.86 3.77 -12.78 4.37C-13.7 4.97 -14.52 5.7 -15.22 6.46C-15.22 7.46 -15.22 8.46 -15.22 9.46C-14.52 10.22 -13.7 10.95 -12.78 11.55C-11.86 12.15 -10.85 12.61 -9.75 12.91C-9.42 13.47 -8.97 13.95 -8.43 14.32C-7.89 14.69 -7.27 14.94 -6.62 15.05C-5.97 15.16 -5.29 15.13 -4.65 14.96C-4.01 14.79 -3.41 14.48 -2.9 14.05C-2.39 13.62 -1.98 13.08 -1.7 12.47C-0.6 12.77 0.41 13.23 1.33 13.83C2.25 14.43 3.07 15.16 3.77 15.92C4.47 15.16 5.29 14.43 6.21 13.83C7.13 13.23 8.14 12.77 9.24 12.47C9.52 13.08 9.93 13.62 10.44 14.05C10.95 14.48 11.55 14.79 12.19 14.96C12.83 15.13 13.5 15.16 14.15 15.05C14.8 14.94 15.42 14.69 15.96 14.32C16.5 13.95 16.95 13.47 17.28 12.91C18.38 12.61 19.39 12.15 20.31 11.55C21.23 10.95 22.05 10.22 22.75 9.46C22.75 8.46 22.75 7.46 22.75 6.46C22.05 5.7 21.23 4.97 20.31 4.37H20.317Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#youtube" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M23.498 6.186C23.251 5.28 22.533 4.562 21.627 4.315C19.822 3.833 12 3.833 12 3.833S4.178 3.833 2.373 4.315C1.467 4.562 0.749 5.28 0.502 6.186C0.02 7.991 0.02 12 0.02 12S0.02 16.009 0.502 17.814C0.749 18.72 1.467 19.438 2.373 19.685C4.178 20.167 12 20.167 12 20.167S19.822 20.167 21.627 19.685C22.533 19.438 23.251 18.72 23.498 17.814C23.98 16.009 23.98 12 23.98 12S23.98 7.991 23.498 6.186ZM9.545 15.568V8.432L15.818 12L9.545 15.568Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#github" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.546 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17.005 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 17.005 14.177 17.301C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

