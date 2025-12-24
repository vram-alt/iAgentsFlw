'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckSquare, 
  AlertTriangle, 
  CheckCircle, 
  Target,
  Users,
  ArrowRight,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
  Eye,
  UserCheck
} from 'lucide-react';






const CtaSection =()=>{
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ensure Consistent AI Quality</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts handle your operational checklists so your AI systems stay reliable
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

        </>
    )
}
export default CtaSection