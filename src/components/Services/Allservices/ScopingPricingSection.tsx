'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { 
  Mail,
} from 'lucide-react';







const ScopingPricingSection =()=>{

     const [activeTab, setActiveTab] = useState('scope');
      const [config, setConfig] = useState<ScopeConfig>({
        industry: '',
        regions: 1,
        frameworks: [],
        agents: 5,
        dataSensitivity: 'Medium',
        coverage: '8x5',
        sla: {
          triage: '8h',
          change: '24h',
          dsar: '3d',
          reporting: 'monthly'
        },
        integrations: [],
        deadline: ''
      });
      const [estimate, setEstimate] = useState<Estimate | null>(null);
    
      const integrations = [
        'Slack', 'Microsoft Teams', 'Jira', 'ServiceNow', 'Salesforce',
        'AWS', 'Azure', 'GCP', 'Okta', 'Active Directory'
      ];
    
      const generateEstimate = () => {
        const baseWeeks = 8;
        const complexity = 
          (config.frameworks.length > 3 ? 1.4 : 1) *
          (config.regions > 2 ? 1.3 : 1) *
          (config.dataSensitivity === 'High' ? 1.2 : 1) *
          (config.agents > 20 ? 1.3 : 1) *
          (config.integrations.length > 5 ? 1.2 : 1);
    
        const totalWeeks = Math.ceil(baseWeeks * complexity);
    
        const timeline = [
          { phase: 'Discovery & Planning', start: 'Week 1', end: 'Week 2' },
          { phase: 'Implementation', start: 'Week 3', end: `Week ${Math.ceil(totalWeeks * 0.7)}` },
          { phase: 'Testing & Validation', start: `Week ${Math.ceil(totalWeeks * 0.7) + 1}`, end: `Week ${totalWeeks - 1}` },
          { phase: 'Go-Live & Handover', start: `Week ${totalWeeks}`, end: `Week ${totalWeeks}` }
        ];
    
        const team = [
          { role: 'Lead Consultant', fte: 0.8 },
          { role: 'GRC Specialist', fte: 0.6 },
          { role: 'Security Engineer', fte: 0.4 },
          { role: 'Program Manager', fte: 0.3 }
        ];
    
        const priceBand: 'Low' | 'Medium' | 'High' = 
          complexity < 1.2 ? 'Low' : complexity < 1.6 ? 'Medium' : 'High';
    
        const assumptions = [
          'Client provides timely access to systems and stakeholders',
          'Existing infrastructure supports integration requirements',
          'Key personnel available for workshops and reviews',
          'Change management process in place for policy updates'
        ];
    
        const nextSteps = [
          'Schedule discovery workshop',
          'Finalize scope and timeline',
          'Execute statement of work',
          'Begin stakeholder interviews'
        ];
    
        setEstimate({ timeline, team, priceBand, assumptions, nextSteps });
      };
    
      const exportSOW = () => {
        if (!estimate) return;
    
        const sowContent = `
    STATEMENT OF WORK - DRAFT
    
    PROJECT SCOPE:
    Industry: ${config.industry}
    Regions: ${config.regions}
    Frameworks: ${config.frameworks.join(', ')}
    AI Agents/Apps: ${config.agents}
    Data Sensitivity: ${config.dataSensitivity}
    Integrations: ${config.integrations.join(', ')}
    
    TIMELINE:
    ${estimate.timeline.map(phase => `${phase.phase}: ${phase.start} - ${phase.end}`).join('\n')}
    
    TEAM COMPOSITION:
    ${estimate.team.map(member => `${member.role}: ${member.fte} FTE`).join('\n')}
    
    PRICE BAND: ${estimate.priceBand}
    
    ASSUMPTIONS:
    ${estimate.assumptions.map(assumption => `• ${assumption}`).join('\n')}
    
    NEXT STEPS:
    ${estimate.nextSteps.map(step => `• ${step}`).join('\n')}
    
    NOTE: This is a preliminary estimate. Final scope and pricing subject to discovery workshop.
        `;
    
        const blob = new Blob([sowContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'draft-sow.txt';
        a.click();
        URL.revokeObjectURL(url);
      };
    return (
        <>
        <section id='scoping' className='py-12 sm:py-16 md:py-20'>
            <div className='container mx-auto px-4 sm:px-6'>
        <div className="space-y-6">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Scoping & Pricing</h3>
                <p className="text-gray-300">Estimate timeline, team, and price band in minutes — then book a workshop.</p>
              </div>
        
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Configuration Panel */}
                <div className="lg:col-span-2">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="scope">Scope</TabsTrigger>
                      <TabsTrigger value="operating">Operating Model</TabsTrigger>
                      <TabsTrigger value="timeline">Timeline</TabsTrigger>
                    </TabsList>
        
                    <TabsContent value="scope" className="space-y-6">
                      <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                          <CardTitle>Project Scope</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="mb-2 block text-sm font-medium">Industry</label>
                              <Select value={config.industry} onValueChange={(value) => setConfig({...config, industry: value})}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Financial Services">Financial Services</SelectItem>
                                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                                  <SelectItem value="Technology">Technology</SelectItem>
                                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
        
                            <div>
                              <label className="mb-2 block text-sm font-medium">Data Sensitivity</label>
                              <Select value={config.dataSensitivity} onValueChange={(value: 'Low' | 'Medium' | 'High') => setConfig({...config, dataSensitivity: value})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Low">Low</SelectItem>
                                  <SelectItem value="Medium">Medium</SelectItem>
                                  <SelectItem value="High">High</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
        
                          <div>
                            <label className="mb-2 block text-sm font-medium">
                              Regions: {config.regions}
                            </label>
                            <Slider
                              value={[config.regions]}
                              onValueChange={([value]) => setConfig({...config, regions: value})}
                              max={10}
                              min={1}
                              step={1}
                              className="w-full"
                            />
                          </div>
        
                          <div>
                            <label className="mb-2 block text-sm font-medium">
                              AI Agents/Apps: {config.agents}
                            </label>
                            <Slider
                              value={[config.agents]}
                              onValueChange={([value]) => setConfig({...config, agents: value})}
                              max={100}
                              min={1}
                              step={1}
                              className="w-full"
                            />
                          </div>
        
                          <div>
                            <label className="mb-2 block text-sm font-medium">Frameworks</label>
                            <div className="grid grid-cols-2 gap-2">
                              {['GDPR', 'CCPA', 'EU AI Act', 'ISO 27001', 'SOC 2', 'NIST'].map(framework => (
                                <div key={framework} className="flex items-center space-x-2">
                                  <Checkbox
                                    checked={config.frameworks.includes(framework)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setConfig({...config, frameworks: [...config.frameworks, framework]});
                                      } else {
                                        setConfig({...config, frameworks: config.frameworks.filter(f => f !== framework)});
                                      }
                                    }}
                                  />
                                  <label className="text-sm">{framework}</label>
                                </div>
                              ))}
                            </div>
                          </div>
        
                          <div>
                            <label className="mb-2 block text-sm font-medium">Integrations</label>
                            <div className="grid grid-cols-2 gap-2">
                              {integrations.slice(0, 6).map(integration => (
                                <div key={integration} className="flex items-center space-x-2">
                                  <Checkbox
                                    checked={config.integrations.includes(integration)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setConfig({...config, integrations: [...config.integrations, integration]});
                                      } else {
                                        setConfig({...config, integrations: config.integrations.filter(i => i !== integration)});
                                      }
                                    }}
                                  />
                                  <label className="text-sm">{integration}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
        
                    <TabsContent value="operating" className="space-y-6">
                      <Card className="border-white/10 bg-[#172135] backdrop-blur-md">
                        <CardHeader>
                          <CardTitle>Operating Model</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <label className="mb-2 block text-sm font-medium">Coverage Hours</label>
                            <Select value={config.coverage} onValueChange={(value: '8x5' | '16x5' | '24x7') => setConfig({...config, coverage: value})}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="8x5">8×5 (Business Hours)</SelectItem>
                                <SelectItem value="16x5">16×5 (Extended Hours)</SelectItem>
                                <SelectItem value="24x7">24×7 (Always On)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
        
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="mb-2 block text-sm font-medium">Incident Triage</label>
                              <Select value={config.sla.triage} onValueChange={(value: '4h' | '8h' | 'NBD') => setConfig({...config, sla: {...config.sla, triage: value}})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="4h">4 hours</SelectItem>
                                  <SelectItem value="8h">8 hours</SelectItem>
                                  <SelectItem value="NBD">Next business day</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
        
                            <div>
                              <label className="mb-2 block text-sm font-medium">DSAR Response</label>
                              <Select value={config.sla.dsar} onValueChange={(value: '1d' | '3d' | '5d') => setConfig({...config, sla: {...config.sla, dsar: value}})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1d">1 day</SelectItem>
                                  <SelectItem value="3d">3 days</SelectItem>
                                  <SelectItem value="5d">5 days</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
        
                          <div>
                            <label className="mb-2 block text-sm font-medium">Reporting Cadence</label>
                            <Select value={config.sla.reporting} onValueChange={(value: 'weekly' | 'monthly' | 'quarterly') => setConfig({...config, sla: {...config.sla, reporting: value}})}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
        
                    <TabsContent value="timeline" className="space-y-6">
                      <Card className="border-white/10 bg-[#172135] backdrop-blur-md">
                        <CardHeader>
                          <CardTitle>Timeline & Deadlines</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <label className="mb-2 block text-sm font-medium">Target Start Date</label>
                            <Input
                              type="date"
                              value={config.deadline || ''}
                              onChange={(e) => setConfig({...config, deadline: e.target.value})}
                            />
                          </div>
        
                          <div className="rounded-lg bg-blue-500/10 p-4">
                            <h4 className="mb-2 font-semibold">Typical Project Phases</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Discovery & Planning (2 weeks)</li>
                              <li>• Implementation (4-8 weeks)</li>
                              <li>• Testing & Validation (1-2 weeks)</li>
                              <li>• Go-Live & Handover (1 week)</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
        
                  <div className="mt-6">
                    <Button 
                      onClick={generateEstimate}
                      className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
                      disabled={!config.industry || config.frameworks.length === 0}
                    >
                      Generate Estimate
                    </Button>
                  </div>
                </div>
        
                {/* Results Panel */}
                <div>
                  {estimate && (
                    <Card className="sticky top-6 border-white/10 bg-[#172135] backdrop-blur-md">
                      <CardHeader>
                        <CardTitle>Project Estimate</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                          <div className="text-2xl font-bold text-[#F47F21]">{estimate.priceBand}</div>
                          <div className="text-sm text-gray-300">Price Band</div>
                        </div>
        
                        <div>
                          <h4 className="mb-2 font-semibold">Timeline</h4>
                          <div className="space-y-2">
                            {estimate.timeline.map((phase, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>{phase.phase}</span>
                                <span className="text-gray-400">{phase.start} - {phase.end}</span>
                              </div>
                            ))}
                          </div>
                        </div>
        
                        <div>
                          <h4 className="mb-2 font-semibold">Team & Hours</h4>
                          <div className="space-y-2">
                            {estimate.team.map((member, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>{member.role}</span>
                                <span>{member.fte} FTE</span>
                              </div>
                            ))}
                          </div>
                        </div>
        
                        <div>
                          <h4 className="mb-2 font-semibold">Key Assumptions</h4>
                          <ul className="space-y-1 text-sm">
                            {estimate.assumptions.slice(0, 3).map((assumption, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                                <span>{assumption}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
        
                        <div className="space-y-2">
                          <Button 
                            className="w-full" 
                            variant="outline"
                            onClick={onContactClick}
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Us for Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
              </div>

            </div>
            </section>
        </>
    )
}
export default ScopingPricingSection