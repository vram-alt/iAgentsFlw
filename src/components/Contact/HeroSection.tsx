'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    CheckCircle
} from 'lucide-react';


const HeroSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        serviceInterest: [] as string[]
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const today = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        message: formData.message,
        serviceInterest: formData.serviceInterest.join(", "),
        today,
      };

      try {
      await emailjs.send(
        'service_n80u5ue',
        'template_g03baru',
        templateParams,
        'aXwBdP85dhlGKcFYm'
      );
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        message: "",
        serviceInterest: [],
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error("Email send error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
    
    // Simulate form submission
    // setTimeout(() => {
    //   console.log('Form submitted:', formData);
    //   setIsSubmitting(false);
    //   setSubmitSuccess(true);
      
    //   // Reset form after 3 seconds
    //   setTimeout(() => {
    //     setFormData({
    //       name: '',
    //       email: '',
    //       company: '',
    //       role: '',
    //       message: '',
    //       serviceInterest: []
    //     });
    //     setSubmitSuccess(false);
    //   }, 3000);
    // }, 1500);
  };
    return (
        <section className="relative overflow-hidden pb-16 pt-32">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />

            <div className="container relative mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 space-y-6 text-center"
                >
                    <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                        Get in{' '}
                        <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>

                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                        Ready to transform your AI governance and compliance? Let&apos;s talk about how we can help.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
                    {/* Left Side - Company Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                            <CardContent className="space-y-6 p-8">
                                <div>
                                    <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                                    <p className="mb-8 text-gray-300">
                                        We&apos;re here to help you navigate AI governance, privacy compliance, and enterprise security.
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F47F21]/20">
                                        <MapPin className="h-6 w-6 text-[#F47F21]" />
                                    </div>
                                    <div>
                                        {/* <h3 className="mb-2 font-semibold">Office Address</h3> */}
                                        <p className="text-gray-300">
                                            AgentsFlow<br />
                                            Lewes, Delaware, USA
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F47F21]/20">
                                        <Phone className="h-6 w-6 text-[#F47F21]" />
                                    </div>
                                    <div>
                                        {/* <h3 className="mb-2 font-semibold">Phone</h3> */}
                                        <p className="text-gray-300">
                                            1800 211 8050<br />
                                            {/* Toll Free: +1 (800) 123-4567 */}
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F47F21]/20">
                                        <Mail className="h-6 w-6 text-[#F47F21]" />
                                    </div>
                                    <div>
                                        {/* <h3 className="mb-2 font-semibold">Email</h3> */}
                                        <p className="text-gray-300">
                                            Hello@iagentsflow.com<br />
                                            {/* Sales: sales@AgentsFlow.com<br />
                                            Support: support@AgentsFlow.com */}
                                        </p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                {/* <div className="flex items-start space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F47F21]/20">
                                        <Clock className="h-6 w-6 text-[#F47F21]" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold">Business Hours</h3>
                                        <p className="text-gray-300">
                                            Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                                            Saturday: 10:00 AM - 4:00 PM PST<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div> */}
                            </CardContent>
                        </Card>

                        {/* Additional Info Card */}
                        {/* <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                            <CardContent className="p-8">
                                <h3 className="mb-4 text-xl font-bold">Need Immediate Support?</h3>
                                <p className="mb-6 text-gray-300">
                                    For urgent matters or existing customer support, please reach out through your dedicated support channel or call our priority hotline.
                                </p>
                                <Button
                                    variant="outline"
                                    className="w-full border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
                                >
                                    Visit Support Center
                                </Button>
                            </CardContent>
                        </Card> */}
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                            <CardContent className="p-8">
                                <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>

                                {submitSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                                            <CheckCircle className="h-10 w-10 text-green-400" />
                                        </div>
                                        <h3 className="mb-2 text-2xl font-bold text-green-400">Message Sent!</h3>
                                        <p className="text-gray-300">
                                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                placeholder="Name"
                                                className="border-white/10 bg-white/5"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                className="border-white/10 bg-white/5"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                placeholder="Company"
                                                className="border-white/10 bg-white/5"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                required
                                            />
                                            <Input
                                                placeholder="Role"
                                                className="border-white/10 bg-white/5"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
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
                                                                    setFormData({ ...formData, serviceInterest: [...formData.serviceInterest, service] });
                                                                } else {
                                                                    setFormData({ ...formData, serviceInterest: formData.serviceInterest.filter(s => s !== service) });
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
                                            className="border-white/10 bg-white/5"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={3}
                                        />

                                        <Button
                                            type="submit"
                                            className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Contact Us'
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection