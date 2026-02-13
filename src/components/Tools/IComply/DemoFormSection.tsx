import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const DemoFormSection = () => {
    return (
       <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">See iComply in action</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a personalized demo and see how iComply can transform your compliance operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>30-minute personalized walkthrough</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Custom demo environment with your use cases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Implementation timeline and pricing discussion</span>
                </div>
              </div>
            </div>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <Input type="email" className="bg-white/5 border-white/10" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input className="bg-white/5 border-white/10" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Size</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary Interest</label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="What brings you here?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gdpr">GDPR Compliance</SelectItem>
                        <SelectItem value="ccpa">CCPA/CPRA Compliance</SelectItem>
                        <SelectItem value="dsar">DSAR Automation</SelectItem>
                        <SelectItem value="ropa">RoPA Management</SelectItem>
                        <SelectItem value="breach">Breach Response</SelectItem>
                        <SelectItem value="audit">Audit Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your compliance challenges..."
                      className="bg-white/5 border-white/10"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox className="mt-1" />
                    <label className="text-sm text-gray-300">
                      I agree to receive marketing communications from AgentsFlow.com. 
                      You can unsubscribe at any time. <a href="#" className="text-[#F47F21] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white">
                    Book Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
export default DemoFormSection;