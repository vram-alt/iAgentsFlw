'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export default function BlogHero() {
  return (
    <section className="pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
            Insights & Updates
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest insights on AI compliance, governance, and enterprise best practices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

