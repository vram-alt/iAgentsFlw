'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';




const FaqSection =()=>{
    return (
        <>
        <section id="faq" className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                  <h3 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h3>
                  <div className="mx-auto max-w-3xl space-y-6">
                    {[
                      {
                        q: 'Do you operate on our tenant?',
                        a: 'Yes, with least-privilege access & change control.'
                      },
                      {
                        q: 'Can we start with a pilot?',
                        a: 'Yes; most start with one domain/region.'
                      },
                      {
                        q: 'What if we already have GRC tools?',
                        a: 'We integrate and focus on execution & evidence.'
                      },
                      {
                        q: 'Where do you offer coverage?',
                        a: 'AMER/EMEA/APAC; 8×5 to 24×7.'
                      },
                      {
                        q: 'How is data handled?',
                        a: 'Data-minimized engagement; evidence stays in your systems unless agreed.'
                      }
                    ].map((faq, index) => (
                      <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardContent className="p-6">
                          <h4 className="mb-2 font-bold">{faq.q}</h4>
                          <p className="text-gray-300">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
        </>
    )
}
export default FaqSection