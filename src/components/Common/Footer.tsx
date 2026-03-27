'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname();
  
  // Return null if URL contains 'studio' (Sanity Studio)
  if (pathname?.includes('studio')) {
    return null;
  }
  
  return (
    <footer className="bg-card/20 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-6 sm:mb-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="mb-3 font-display text-lg font-bold sm:mb-4 sm:text-xl">AgentsFlow</h3>
            <p className="mb-3 text-sm text-muted-foreground sm:mb-4 sm:text-base">
              Leading AI Agent lifecycle management & Governance platform for enterprises
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/tools/agentsflow" className="transition-colors hover:text-foreground">AgentsFlow</Link></li>
              <li><Link href="/tools/icomply" className="transition-colors hover:text-foreground">iComply</Link></li>
              {/* <li><Link href="/tools/AgentsFlow" className="transition-colors hover:text-foreground">AgentsFlow</Link></li>
              <li><Link href="/tools/docx" className="transition-colors hover:text-foreground">DocX.AI</Link></li>
              <li><Link href="/tools/iprivacyhub" className="transition-colors hover:text-foreground">iPrivacyHub</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/services/assessment" className="transition-colors hover:text-foreground">Assessment</Link></li>
              <li><Link href="/services/managed-services" className="transition-colors hover:text-foreground">Managed Services</Link></li>
              <li><Link href="/services/audit-readiness" className="transition-colors hover:text-foreground">Audit Readiness</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/industries/finance" className="transition-colors hover:text-foreground">Finance</Link></li>
              <li><Link href="/industries/healthcare" className="transition-colors hover:text-foreground">Healthcare</Link></li>
              <li><Link href="/industries/insurance" className="transition-colors hover:text-foreground">Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Platforms</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/platforms/salesforce" className="transition-colors hover:text-foreground">Salesforce</Link></li>
              <li><Link href="/platforms/servicenow" className="transition-colors hover:text-foreground">ServiceNow</Link></li>
              <li><Link href="/platforms/workday" className="transition-colors hover:text-foreground">Workday</Link></li>
            </ul>
          </div>
        </div>
        <div className="mb-6 mt-6 grid gap-6 sm:mb-8 sm:mt-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Managed Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/managed-services/guardrail-monitoring" className="transition-colors hover:text-foreground">Guardrail Monitoring</Link></li>
              <li><Link href="/managed-services/operational-checklist" className="transition-colors hover:text-foreground">Operational Checklist</Link></li>
              <li><Link href="/managed-services/data-governance" className="transition-colors hover:text-foreground">Data Governance</Link></li>
              <li><Link href="/managed-services/continuous-monitoring" className="transition-colors hover:text-foreground">Continuous Monitoring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-transparent sm:mb-4 sm:text-base">Managed Services Continued</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/managed-services/spend-management" className="transition-colors hover:text-foreground">AI Spend Management</Link></li>
              <li><Link href="/managed-services/change-management" className="transition-colors hover:text-foreground">AI Change Management</Link></li>
              <li><Link href="/managed-services/audit-readiness" className="transition-colors hover:text-foreground">AI Audit Readiness</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><Link href="/about" className="transition-colors hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
              <li><Link href="/partners" className="transition-colors hover:text-foreground">Partners</Link></li>
              <li><Link href="/privacy-policy" className="transition-colors hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="transition-colors hover:text-foreground">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li><Link href="/blog" className="transition-colors hover:text-foreground">Blog</Link></li>
              <li><Link href="/resources/state-of-enterprise" className="transition-colors hover:text-foreground">State of Enterprise</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-foreground">All Services</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            {/* Copyright Text */}
            <div className="text-sm text-muted-foreground sm:text-base">
              <p>&copy; 2025 AgentsFlow Corp. All rights reserved.</p>
            </div>
            
            {/* Social Icons */}
            <ul className="flex items-center gap-3">
              <li>
                <a 
                  target="_blank" 
                  href="https://www.facebook.com/profile.php?id=61586195077581" 
                  title="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-[#0e2c46]">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  href="https://x.com/iAgentsFlow" 
                  title="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 1226.37 1226.37" className="fill-[#0e2c46]">
                    <g transform="matrix(1,0,0,1,0,0)">
                      <path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" fill="#0e2c46" opacity="1" data-original="#000000"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  href="https://www.linkedin.com/company/iagentsflow" 
                  title="Linkedin"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-[#0e2c46]">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  href="https://www.youtube.com/@AigentsFlow" 
                  title="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-[#0e2c46]">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  href="https://www.instagram.com/iagentsflow/" 
                  title="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-[#0e2c46]">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

