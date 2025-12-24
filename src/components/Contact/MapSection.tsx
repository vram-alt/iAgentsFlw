'use client'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle
} from 'lucide-react';
import { Card } from '../ui/card';

const MapSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <Card className="bg-[#172135] backdrop-blur-md border-white/10 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-[#F47F21] mx-auto mb-4" />
                            <p className="text-gray-300">Interactive map coming soon</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default MapSection