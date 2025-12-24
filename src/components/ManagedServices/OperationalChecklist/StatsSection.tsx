'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';





const StatsSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
         <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">95%</div>
                <div className="text-sm text-gray-300">Issues caught before production impact</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">70%</div>
                <div className="text-sm text-gray-300">Reduction in hallucination rates</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-sm text-gray-300">Checklist completion rate</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">40hrs</div>
                <div className="text-sm text-gray-300">Saved per month vs internal management</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default StatsSection