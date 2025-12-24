'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  CheckCircle, 
} from 'lucide-react';







const TalktoConvertionSection =()=>{

     const [activeSection, setActiveSection] = useState('overview');
      const [showContactForm, setShowContactForm] = useState(false);
      const [contactModalOpen, setContactModalOpen] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        serviceInterest: [] as string[]
      });
    
      const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'assessment', label: 'Assessment' },
        { id: 'managed', label: 'Managed Governance' },
        { id: 'audit', label: 'Audit Readiness' },
        { id: 'scoping', label: 'Scoping & Pricing' },
        { id: 'faq', label: 'FAQ' }
      ];
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        setShowContactForm(false);
        // Show success message
      };
    return (
        <>
         <section className="bg-[#0F172A]/30 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold">Talk to an expert</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Personalized agenda</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Readiness review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Timeline & next steps</span>
                </li>
              </ul>
            </div>

            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Role"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium">Service Interest</label>
                    <div className="space-y-2">
                      {['Assessment', 'Managed Governance', 'Audit Readiness'].map(service => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            checked={formData.serviceInterest.includes(service)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({...formData, serviceInterest: [...formData.serviceInterest, service]});
                              } else {
                                setFormData({...formData, serviceInterest: formData.serviceInterest.filter(s => s !== service)});
                              }
                            }}
                          />
                          <label className="text-sm">{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Textarea
                    placeholder="Tell us about your current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />

                  <Button 
                    type="button" 
                    className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
                    onClick={() => setContactModalOpen(true)}
                  >
                    Contact Us
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        </>
    )
}
export default TalktoConvertionSection