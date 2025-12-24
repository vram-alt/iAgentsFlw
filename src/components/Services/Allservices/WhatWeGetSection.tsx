'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  RefreshCw,
  Zap,
} from 'lucide-react';






const WhatWeGetSection =()=>{
    return (
        <>
        <section className="bg-[#0F172A]/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                <Zap className="h-8 w-8 text-[#F47F21]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Speed</h3>
              <p className="text-gray-300">Weeks to first results, not months.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                <Shield className="h-8 w-8 text-[#F47F21]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Assurance</h3>
              <p className="text-gray-300">Evidence, SLAs, and audit-ready artifacts.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                <RefreshCw className="h-8 w-8 text-[#F47F21]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Continuity</h3>
              <p className="text-gray-300">Operating model + change control that sticks.</p>
            </motion.div>
          </div>

          {/* Stats Strip */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-[#F47F21]">&gt;95%</div>
                <div className="text-sm text-gray-400">DSAR SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F47F21]">&gt;90%</div>
                <div className="text-sm text-gray-400">Control Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F47F21]">Weeks</div>
                <div className="text-sm text-gray-400">First Audit Pack</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default WhatWeGetSection