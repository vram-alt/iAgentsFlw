'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Return null if URL contains 'studio' (Sanity Studio)
  if (pathname?.includes('studio')) {
    return null;
  }
  
  const isAgentsFlowRoute = pathname?.includes('/tools/AgentsFlow');

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 !bg-[#161f32]/95 shadow-xl backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="h-18 flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <img
              src="/images/logo.webp"
              alt="AgentsFlow Logo"
              width="200"
              height="48"
              className="h-12 w-auto object-contain"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {/* Services Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsServicesOpen(true)}
                 onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center rounded-lg px-3 py-2 font-medium text-white transition-colors hover:bg-white/5 hover:text-[#0080FF]">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border-2 border-white/20 bg-[#0F172A]/95 p-4 shadow-2xl backdrop-blur-md"
                  >
                    <Link href="/services" className="mb-2 block rounded-lg border-b border-white/10 p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">All Services</div>
                      <div className="text-sm text-gray-400">Complete services overview</div>
                    </Link>
                    <Link href="/services/assessment" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Assessment</div>
                      <div className="text-sm text-gray-400">AI compliance evaluation</div>
                    </Link>
                    <Link href="/services/managed-services" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Managed Services</div>
                      <div className="text-sm text-gray-400">24/7 monitoring & oversight</div>
                    </Link>
                    <Link href="/services/audit-readiness" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Audit Readiness</div>
                      <div className="text-sm text-gray-400">Complete audit preparation</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tools Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsProductsOpen(true)}
                 onMouseLeave={() => setIsProductsOpen(false)}>
                <button className="flex items-center rounded-lg px-3 py-2 font-medium text-white transition-colors hover:bg-white/5 hover:text-[#0080FF]">
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border-2 border-white/20 bg-[#0F172A]/95 p-4 shadow-2xl backdrop-blur-md"
                  >
                    <Link href="/tools/agentsflow" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">AgentsFlow</div>
                      <div className="text-sm text-gray-400">Enterprise Apps&AI Governance and management software</div>
                    </Link>
                    <Link href="/tools/icomply" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">iComply</div>
                      <div className="text-sm text-gray-400">Intelligent compliance automation</div>
                    </Link>
                    {/* 
                    <Link href="/tools/docx" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">DocX.AI</div>
                      <div className="text-sm text-gray-400">Document intelligence platform</div>
                    </Link>
                    <Link href="/tools/iprivacyhub" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">iPrivacyHub</div>
                      <div className="text-sm text-gray-400">AI enterprise privacy platform</div>
                    </Link> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/partners" className="rounded-lg px-3 py-2 font-medium text-white transition-colors hover:bg-white/5 hover:text-[#0080FF]">
              Partners
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsResourcesOpen(true)}
                 onMouseLeave={() => setIsResourcesOpen(false)}>
              <button className="flex items-center rounded-lg px-3 py-2 font-medium text-white transition-colors hover:bg-white/5 hover:text-[#0080FF]">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border-2 border-white/20 bg-[#0F172A]/95 p-4 shadow-2xl backdrop-blur-md"
                  >
                    <Link href="/blog" className="mb-2 block rounded-lg border-b border-white/10 p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Blog</div>
                      <div className="text-sm text-gray-400">Latest articles and insights</div>
                    </Link>
                    <Link href="/videos" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Videos</div>
                      <div className="text-sm text-gray-400">Video tutorials and content</div>
                    </Link>
                    {/* <Link 
                      href="http://forum.iagentsflow.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg p-3 transition-colors hover:bg-white/10"
                    >
                      <div className="font-medium text-white">Forum</div>
                      <div className="text-sm text-gray-400">Community discussions</div>
                    </Link> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* About Us Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsAboutOpen(true)}
                 onMouseLeave={() => setIsAboutOpen(false)}>
              <button className="flex items-center rounded-lg px-3 py-2 font-medium text-white transition-colors hover:bg-white/5 hover:text-[#0080FF]">
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border-2 border-white/20 bg-[#0F172A]/95 p-4 shadow-2xl backdrop-blur-md"
                  >
                    <Link href="/about" className="mb-2 block rounded-lg border-b border-white/10 p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">About Us</div>
                      <div className="text-sm text-gray-400">Learn about our mission and team</div>
                    </Link>
                    <Link href="/founders-note" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Founder&apos;s Note</div>
                      <div className="text-sm text-gray-400">A message from our founder</div>
                    </Link>
                    <Link href="/contact" className="block rounded-lg p-3 transition-colors hover:bg-white/10">
                      <div className="font-medium text-white">Contact</div>
                      <div className="text-sm text-gray-400">Get in touch with us</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 py-4 md:hidden"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-400">Services</div>
                  <Link href="/services" className="block pl-4 font-medium text-white transition-colors hover:text-[#0080FF]">
                    All Services
                  </Link>
                  <Link href="/services/assessment" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Assessment
                  </Link>
                  <Link href="/services/managed-services" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Managed Services
                  </Link>
                  <Link href="/services/audit-readiness" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Audit Readiness
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-400">Tools</div>
                  <Link href="/tools/agentsflow" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    AgentsFlow
                  </Link>
                  <Link href="/tools/icomply" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    iComply
                  </Link>
                  <Link href="/tools/agentsflow" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    AgentsFlow
                  </Link>
                  <Link href="/tools/docx" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    DocX.AI
                  </Link>
                  <Link href="/tools/iprivacyhub" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    iPrivacyHub
                  </Link>
                </div>
                <Link href="/partners" className="block text-white transition-colors hover:text-[#0080FF]">
                  Partners
                </Link>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-400">Resources</div>
                  <Link href="/blog" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Blog
                  </Link>
                  <Link href="/videos" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Videos
                  </Link>
                  <Link 
                    href="http://forum.iagentsflow.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block pl-4 text-white transition-colors hover:text-[#0080FF]"
                  >
                    Forum
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-400">About Us</div>
                  <Link href="/about" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    About Us
                  </Link>
                  <Link href="/founders-note" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Founder&apos;s Note
                  </Link>
                  <Link href="/contact" className="block pl-4 text-white transition-colors hover:text-[#0080FF]">
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;

