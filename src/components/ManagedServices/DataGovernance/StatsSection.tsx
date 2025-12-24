'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';






const StatsSection =()=>{
    return (
        <>
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Regulatory Compliance</div>
                <p className="text-sm text-gray-300">Meet GDPR, CCPA, and industry-specific requirements</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">75%</div>
                <div className="text-lg font-semibold mb-2">Faster Implementation</div>
                <p className="text-sm text-gray-300">Deploy data governance faster than building in-house</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">Data Breaches</div>
                <p className="text-sm text-gray-300">Proactive governance prevents unauthorized access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default StatsSection