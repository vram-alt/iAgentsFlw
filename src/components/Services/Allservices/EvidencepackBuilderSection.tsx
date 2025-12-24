'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Download,
} from 'lucide-react';







const EvidencepackBuilderSection =()=>{

    const [selectedFramework, setSelectedFramework] = useState('');
      const [selectedControls, setSelectedControls] = useState<string[]>([]);
      const [packManifest, setPackManifest] = useState<PackManifest | null>(null);
    
      const frameworks = {
        'GDPR': {
          name: 'General Data Protection Regulation',
          controls: [
            'Article 5 - Data Processing Principles',
            'Article 6 - Lawful Basis',
            'Article 7 - Consent',
            'Article 12-14 - Information & Transparency',
            'Article 15-22 - Data Subject Rights',
            'Article 25 - Data Protection by Design',
            'Article 30 - Records of Processing',
            'Article 32 - Security of Processing',
            'Article 33-34 - Breach Notification',
            'Article 35 - DPIA'
          ]
        },
        'ISO 27001': {
          name: 'Information Security Management',
          controls: [
            'A.5 - Information Security Policies',
            'A.6 - Organization of Information Security',
            'A.7 - Human Resource Security',
            'A.8 - Asset Management',
            'A.9 - Access Control',
            'A.10 - Cryptography',
            'A.11 - Physical Security',
            'A.12 - Operations Security',
            'A.13 - Communications Security',
            'A.14 - System Development Security'
          ]
        },
        'SOC 2': {
          name: 'Service Organization Control 2',
          controls: [
            'CC1 - Control Environment',
            'CC2 - Communication & Information',
            'CC3 - Risk Assessment',
            'CC4 - Monitoring Activities',
            'CC5 - Control Activities',
            'CC6 - Logical Access',
            'CC7 - System Operations',
            'CC8 - Change Management',
            'CC9 - Risk Mitigation'
          ]
        },
        'EU AI Act': {
          name: 'European Union AI Act',
          controls: [
            'Article 9 - Risk Management System',
            'Article 10 - Data Governance',
            'Article 11 - Technical Documentation',
            'Article 12 - Record Keeping',
            'Article 13 - Transparency',
            'Article 14 - Human Oversight',
            'Article 15 - Accuracy & Robustness',
            'Article 16 - Cybersecurity',
            'Article 17 - Quality Management'
          ]
        }
      };
    
      const generateManifest = () => {
        if (!selectedFramework || selectedControls.length === 0) return;
    
        const manifest = {
          framework: selectedFramework,
          controls: selectedControls.map(control => ({
            id: control,
            evidence: [
              'Policy document',
              'Implementation guide',
              'Control testing results',
              'Remediation plan (if applicable)',
              'Management attestation'
            ],
            status: Math.random() > 0.3 ? 'Complete' : 'In Progress',
            lastUpdated: new Date().toISOString().split('T')[0]
          })),
          summary: {
            totalControls: selectedControls.length,
            completeControls: selectedControls.filter(() => Math.random() > 0.3).length,
            inProgressControls: selectedControls.filter(() => Math.random() <= 0.3).length
          }
        };
    
        setPackManifest(manifest);
      };
    
      const createZipMock = () => {
        if (!packManifest) return;
    
        const zipContent = `
    EVIDENCE PACK - ${packManifest.framework}
    Generated: ${new Date().toISOString()}
    
    SUMMARY:
    - Total Controls: ${packManifest.summary.totalControls}
    - Complete: ${packManifest.summary.completeControls}
    - In Progress: ${packManifest.summary.inProgressControls}
    
    CONTROL MANIFEST:
    ${packManifest.controls.map((control) => `
    ${control.id}
    Status: ${control.status}
    Evidence Files:
    ${control.evidence.map((e) => `  - ${e}`).join('\n')}
    `).join('\n')}
    
    NOTE: This is a demo manifest. Actual evidence pack would contain the referenced documents and artifacts.
        `;
    
        const blob = new Blob([zipContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `evidence-pack-${selectedFramework.toLowerCase().replace(/\s+/g, '-')}.txt`;
        a.click();
        URL.revokeObjectURL(url);
      };
    
    return (
        <>

         <div className="space-y-6">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Evidence Pack Builder</h3>
                <p className="text-gray-300">Select framework and controls to generate an audit evidence pack manifest.</p>
              </div>
        
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Configuration Panel */}
                <Card className="border-white/10 bg-[#172135]/50 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle>Framework & Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Framework</label>
                      <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select framework" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(frameworks).map(([key, framework]) => (
                            <SelectItem key={key} value={key}>{framework.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
        
                    {selectedFramework && (
                      <div>
                        <label className="mb-2 block text-sm font-medium">Controls</label>
                        <div className="max-h-64 space-y-2 overflow-y-auto">
                          {frameworks[selectedFramework as keyof typeof frameworks].controls.map(control => (
                            <div key={control} className="flex items-center space-x-2">
                              <Checkbox
                                checked={selectedControls.includes(control)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedControls([...selectedControls, control]);
                                  } else {
                                    setSelectedControls(selectedControls.filter(c => c !== control));
                                  }
                                }}
                              />
                              <label className="text-sm">{control}</label>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedControls(frameworks[selectedFramework as keyof typeof frameworks].controls)}
                          >
                            Select All
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedControls([])}
                          >
                            Clear All
                          </Button>
                        </div>
                      </div>
                    )}
        
                    <Button 
                      onClick={generateManifest}
                      className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
                      disabled={!selectedFramework || selectedControls.length === 0}
                    >
                      Generate Pack Manifest
                    </Button>
                  </CardContent>
                </Card>
        
                {/* Results Panel */}
                {packManifest && (
                  <Card className="border-white/10 bg-[#172135] backdrop-blur-md">
                    <CardHeader>
                      <CardTitle>Evidence Pack Manifest</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg bg-blue-500/10 p-3 text-center">
                          <div className="text-xl font-bold text-blue-400">{packManifest.summary.totalControls}</div>
                          <div className="text-xs text-gray-300">Total</div>
                        </div>
                        <div className="rounded-lg bg-green-500/10 p-3 text-center">
                          <div className="text-xl font-bold text-green-400">{packManifest.summary.completeControls}</div>
                          <div className="text-xs text-gray-300">Complete</div>
                        </div>
                        <div className="rounded-lg bg-yellow-500/10 p-3 text-center">
                          <div className="text-xl font-bold text-yellow-400">{packManifest.summary.inProgressControls}</div>
                          <div className="text-xs text-gray-300">In Progress</div>
                        </div>
                      </div>
        
                      <div>
                        <h4 className="mb-2 font-semibold">Control Status</h4>
                        <div className="max-h-48 space-y-2 overflow-y-auto">
                          {packManifest.controls.map((control, index) => (
                            <div key={index} className="flex items-center justify-between rounded bg-white/5 p-2">
                              <span className="text-sm">{control.id}</span>
                              <Badge variant={control.status === 'Complete' ? 'default' : 'secondary'}>
                                {control.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
        
                      <div className="rounded-lg bg-blue-500/10 p-4">
                        <h4 className="mb-2 font-semibold">Standard Evidence Types</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Policy documents & procedures</li>
                          <li>• Implementation guides & runbooks</li>
                          <li>• Control testing results & screenshots</li>
                          <li>• Remediation plans & timelines</li>
                          <li>• Management attestations & sign-offs</li>
                        </ul>
                      </div>
        
                      <Button onClick={createZipMock} className="w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Create ZIP Mock
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
        </>
    )
}
export default EvidencepackBuilderSection