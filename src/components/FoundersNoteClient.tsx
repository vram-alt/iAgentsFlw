'use client'

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const FoundersNoteClient = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Founder&apos;s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Note
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Transforming Together in the Era of Enterprise AI
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 sm:p-12">
                <div className="prose prose-invert prose-lg max-w-none space-y-3">
                  <p className="text-gray-300 text-lg leading-snug">
                    Dear Customers and Partners,
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-snug">
                    Over the past few months, we&apos;ve been on an exciting journey of transformation — evolving from our roots in enterprise software into a new chapter centered on AI-driven products that empower organizations to work smarter, faster, and more responsibly.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-snug">
                    The world of enterprise AI is moving at unprecedented speed. Yet amid this pace, one principle has guided our evolution: trust and governance must remain at the core of every AI innovation. Our mission has always been to help enterprises embrace technology with confidence — and now, we&apos;re extending that vision to help you build, deploy, and scale AI responsibly.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-snug font-semibold">
                    We&apos;ve reimagined our platform and product line to focus on:
                  </p>
                  
                  <ul className="list-none space-y-4 ml-0">
                    <li className="flex items-start space-x-3">
                      <span className="text-[#F47F21] mt-2">•</span>
                      <span className="text-gray-300 text-lg leading-snug">
                        <strong className="text-white">AI Governance & Compliance:</strong> Embedding accountability and transparency into every model and workflow.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[#F47F21] mt-2">•</span>
                      <span className="text-gray-300 text-lg leading-snug">
                        <strong className="text-white">Intelligent Automation:</strong> Turning complex enterprise data and processes into adaptive, learning systems.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[#F47F21] mt-2">•</span>
                      <span className="text-gray-300 text-lg leading-snug">
                        <strong className="text-white">Responsible AI Enablement:</strong> Ensuring your teams can innovate freely — with the right safeguards in place.
                      </span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-300 text-lg leading-snug">
                    This transformation isn&apos;t just a product shift; it&apos;s a mindset. We&apos;re partnering with our customers more deeply than ever to co-create real enterprise outcomes — not experiments.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-snug">
                    As we enter this next phase, I want to personally thank you for your trust, collaboration, and belief in our vision. Your feedback, ideas, and partnership continue to shape our path forward.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-snug font-semibold">
                    The future of enterprise AI is not about replacing human expertise — it&apos;s about amplifying it. And together, we&apos;re building that future.
                  </p>
                  <div className="h-2" />
                  <span className="text-gray-300 text-lg leading-snug">Warm regards,</span><br/>  
                  <span className="text-lg leading-snug font-semibold text-white">Ram Venky</span><br/>  
                  <span className="text-gray-300 text-lg leading-snug italic"><span className="font-mono">0 = [x-y]-1</span></span><br/>  
                  <span className="text-gray-300 text-lg leading-snug italic">Iagentsflow.com</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersNoteClient;

