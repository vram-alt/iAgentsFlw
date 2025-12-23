'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isAppsBeeRoute = pathname?.includes('/tools/appsbee');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 !bg-[#161f32]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <Link href="/" className="hover:scale-105 transition-transform flex items-center">
            <Image 
              src="/images/logo.webp" 
              alt="AgentFlow Logo" 
              width={200}
              height={48}
              className="h-12 w-auto object-contain"
              priority
              quality={90}
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsServicesOpen(true)}
                 onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center text-white hover:text-[#0080FF] transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0F172A]/95 backdrop-blur-md border-2 border-white/20 rounded-xl p-4 shadow-2xl z-50"
                  >
                    <Link href="/services" className="block p-3 rounded-lg hover:bg-white/10 transition-colors border-b border-white/10 mb-2">
                      <div className="font-medium text-white">All Services</div>
                      <div className="text-sm text-gray-400">Complete services overview</div>
                    </Link>
                    <Link href="/services/assessment" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">Assessment</div>
                      <div className="text-sm text-gray-400">AI compliance evaluation</div>
                    </Link>
                    <Link href="/services/managed-services" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">Managed Services</div>
                      <div className="text-sm text-gray-400">24/7 monitoring & oversight</div>
                    </Link>
                    <Link href="/services/audit-readiness" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
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
                <button className="flex items-center text-white hover:text-[#0080FF] transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0F172A]/95 backdrop-blur-md border-2 border-white/20 rounded-xl p-4 shadow-2xl z-50"
                  >
                    <Link href="/tools/agentflow" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">AgentFlow</div>
                      <div className="text-sm text-gray-400">Enterprise Apps&AI Governance and management software</div>
                    </Link>
                    <Link href="/tools/icomply" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">iComply</div>
                      <div className="text-sm text-gray-400">Intelligent compliance automation</div>
                    </Link>
                    {/* <Link href="/tools/agentflow-old" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">AgentFlow Old</div>
                      <div className="text-sm text-gray-400">Production-safe AI agents for enterprise</div>
                    </Link>
                    <Link href="/tools/docx" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">DocX.AI</div>
                      <div className="text-sm text-gray-400">Document intelligence platform</div>
                    </Link>
                    <Link href="/tools/iprivacyhub" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white">iPrivacyHub</div>
                      <div className="text-sm text-gray-400">AI enterprise privacy platform</div>
                    </Link> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/partners" className="text-white hover:text-[#0080FF] transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
              Partners
            </Link>
            {/* Resources - Disabled for now
            <Link href="/resources/state-of-enterprise" className="text-white hover:text-[#0080FF] transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
              Resources
            </Link>
            */}
            <Link href="/contact" className="text-white hover:text-[#0080FF] transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
              Contact
            </Link>
            <Link href="/about" className="text-white hover:text-[#0080FF] transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
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
              className="md:hidden border-t border-white/10 py-4"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-gray-400 text-sm font-medium">Services</div>
                  <Link href="/services" className="block pl-4 text-white hover:text-[#0080FF] transition-colors font-medium">
                    All Services
                  </Link>
                  <Link href="/services/assessment" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    Assessment
                  </Link>
                  <Link href="/services/managed-services" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    Managed Services
                  </Link>
                  <Link href="/services/audit-readiness" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    Audit Readiness
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-400 text-sm font-medium">Tools</div>
                  <Link href="/tools/appsbee" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    AppsBee
                  </Link>
                  <Link href="/tools/icomply" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    iComply
                  </Link>
                  <Link href="/tools/agentflow" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    AgentFlow
                  </Link>
                  <Link href="/tools/docx" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    DocX.AI
                  </Link>
                  <Link href="/tools/iprivacyhub" className="block pl-4 text-white hover:text-[#0080FF] transition-colors">
                    iPrivacyHub
                  </Link>
                </div>
                <Link href="/partners" className="block text-white hover:text-[#0080FF] transition-colors">
                  Partners
                </Link>
                <Link href="/contact" className="block text-white hover:text-[#0080FF] transition-colors">
                  Contact
                </Link>
                <Link href="/about" className="block text-white hover:text-[#0080FF] transition-colors">
                  About Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;

