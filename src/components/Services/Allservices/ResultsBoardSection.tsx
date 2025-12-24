'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink,
} from 'lucide-react';








const ResultsBoardSection =()=>{
    return (
        <>
        <section className="bg-[#0F172A]/30 py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6">
                  <h3 className="mb-12 text-center text-3xl font-bold">Results you can take to the board.</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      { metric: 'Days', desc: 'Audit prep in days, not weeks.' },
                      { metric: '>95%', desc: 'On-time DSAR SLA' },
                      { metric: 'Lower Risk', desc: 'Change risk with canary & approvals' },
                      { metric: 'One Pane', desc: 'Privacy, Legal, Security & Business' }
                    ].map((item, index) => (
                      <Card key={index} className="border-white/10 bg-[#0F172A]/50 text-center backdrop-blur-md">
                        <CardContent className="p-6">
                          <div className="mb-2 text-2xl font-bold text-[#F47F21]">{item.metric}</div>
                          <p className="text-sm text-gray-300">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      See a sample report
                    </Button>
                  </div>
                </div>
              </section>
        </>
    )
}
export default ResultsBoardSection