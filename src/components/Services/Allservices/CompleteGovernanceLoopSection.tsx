'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  FileText,
  Bot,
  Database,
} from 'lucide-react';






const CompleteGovernanceLoopSection =()=>{
    return (
        <>
        <section className="bg-[#0F172A]/30 py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="text-center">
                    <h3 className="mb-6 text-2xl font-bold">Complete Governance Loop</h3>
                    <div className="mb-6 flex items-center justify-center space-x-8">
                      <div className="text-center">
                        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                          <Bot className="h-8 w-8 text-[#F47F21]" />
                        </div>
                        <div className="font-bold">AgentsFlow</div>
                        <div className="text-sm text-gray-400">Enforces</div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                      <div className="text-center">
                        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                          <FileText className="h-8 w-8 text-blue-400" />
                        </div>
                        <div className="font-bold">iComply</div>
                        <div className="text-sm text-gray-400">Proves</div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                      <div className="text-center">
                        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                          <Database className="h-8 w-8 text-green-400" />
                        </div>
                        <div className="font-bold">Your Stack</div>
                        <div className="text-sm text-gray-400">Integrates</div>
                      </div>
                    </div>
                    <p className="mb-6 text-gray-300">
                      AgentsFlow enforces guardrails and change control; iComply proves it with assessments, records, and reports. 
                      Adopt either — or both for a closed loop.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <Button variant="outline" className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white">
                        Explore AgentsFlow
                      </Button>
                      <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                        Explore iComply
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
        </>
    )
}
export default CompleteGovernanceLoopSection