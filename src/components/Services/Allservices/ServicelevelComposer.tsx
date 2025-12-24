'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  Download,
} from 'lucide-react';

interface AssessmentScope {
  industry: string;
  regions: number;
  frameworks: string[];
  agents: number;
  dataSensitivity: 'Low' | 'Medium' | 'High';
}

interface AssessmentPlan {
  weeks: number;
  team: { consultant: number; sme: number; pm: number };
  backlog: string[];
  pilotSuggestion: string;
}

interface ManagedInput {
  regions: number;
  coverage: '8x5' | '16x5' | '24x7';
  sla: {
    triage: '4h' | '8h' | 'NBD';
    change: '24h' | '48h' | 'custom';
    dsar: '1d' | '3d' | '5d';
    reporting: 'weekly' | 'monthly' | 'quarterly';
  };
}

interface ManagedPlan {
  roster: { hitl: number; grc: number; sse: number; pm: number };
  monthlyEffort: 'Low' | 'Medium' | 'High';
  escalationTree: string[];
  scoreTarget: number;
}

interface ScopeConfig extends AssessmentScope, ManagedInput {
  integrations: string[];
  deadline?: string;
}

interface Estimate {
  timeline: { phase: string; start: string; end: string }[];
  team: { role: string; fte: number }[];
  priceBand: 'Low' | 'Medium' | 'High';
  assumptions: string[];
  nextSteps: string[];
}

interface ControlManifest {
  id: string;
  evidence: string[];
  status: 'Complete' | 'In Progress';
  lastUpdated: string;
}

interface PackManifest {
  framework: string;
  controls: ControlManifest[];
  summary: {
    totalControls: number;
    completeControls: number;
    inProgressControls: number;
  };
}





const ServicelevelComposer =()=>{

    
 const [input, setInput] = useState<ManagedInput>({
    regions: 1,
    coverage: '8x5',
    sla: {
      triage: '8h',
      change: '24h',
      dsar: '3d',
      reporting: 'monthly'
    }
  });
  const [plan, setPlan] = useState<ManagedPlan | null>(null);

  const generatePlan = () => {
    const baseRoster = { hitl: 1, grc: 1, sse: 0.5, pm: 0.5 };
    
    const coverageMultiplier = {
      '8x5': 1,
      '16x5': 1.5,
      '24x7': 2.5
    }[input.coverage];

    const slaMultiplier = 
      (input.sla.triage === '4h' ? 1.3 : 1) *
      (input.sla.change === '24h' ? 1.2 : 1) *
      (input.sla.dsar === '1d' ? 1.4 : 1);

    const regionMultiplier = Math.max(1, input.regions * 0.7);

    const roster = {
      hitl: Math.ceil(baseRoster.hitl * coverageMultiplier * regionMultiplier),
      grc: Math.ceil(baseRoster.grc * slaMultiplier * regionMultiplier),
      sse: Math.ceil(baseRoster.sse * coverageMultiplier),
      pm: Math.ceil(baseRoster.pm * regionMultiplier)
    };

    const totalEffort = roster.hitl + roster.grc + roster.sse + roster.pm;
    const monthlyEffort: 'Low' | 'Medium' | 'High' = 
      totalEffort < 3 ? 'Low' : totalEffort < 6 ? 'Medium' : 'High';

    const escalationTree = [
      'L1: HITL Operator',
      'L2: GRC Specialist',
      'L3: Senior Security Engineer',
      'L4: Program Manager',
      'L5: Client Success Director'
    ];

    const scoreTarget = input.sla.triage === '4h' && input.sla.dsar === '1d' ? 95 : 90;

    setPlan({ roster, monthlyEffort, escalationTree, scoreTarget });
  };

  const exportRunbook = () => {
    const runbookContent = `
# MANAGED GOVERNANCE RUNBOOK

## Service Configuration
- Regions: ${input.regions}
- Coverage: ${input.coverage}
- SLA Triage: ${input.sla.triage}
- Change Window: ${input.sla.change}
- DSAR Response: ${input.sla.dsar}
- Reporting: ${input.sla.reporting}

## Team Roster
- HITL Operators: ${plan?.roster.hitl} FTE
- GRC Specialists: ${plan?.roster.grc} FTE
- Security Engineers: ${plan?.roster.sse} FTE
- Program Managers: ${plan?.roster.pm} FTE

## Escalation Tree
${plan?.escalationTree.map((level, i) => `${i + 1}. ${level}`).join('\n')}

## Target Compliance Score: ${plan?.scoreTarget}%

## Standard Operating Procedures
1. Incident Response
2. Change Management
3. DSAR Processing
4. Evidence Collection
5. Reporting & Analytics
    `;

    const blob = new Blob([runbookContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'managed-governance-runbook.md';
    a.click();
    URL.revokeObjectURL(url);
  };
    return (
        <>
        <div className="space-y-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Service Level Composer</h3>
        <p className="text-gray-300">Design your managed governance service with custom SLAs and coverage.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Configuration Panel */}
        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Service Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Regions: {input.regions}
              </label>
              <Slider
                value={[input.regions]}
                onValueChange={([value]) => setInput({...input, regions: value})}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Coverage Hours</label>
              <Select value={input.coverage} onValueChange={(value: '8x5' | '16x5' | '24x7') => setInput({...input, coverage: value})}>
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

            <div className="space-y-4">
              <h4 className="font-semibold">Service Level Agreements</h4>
              
              <div>
                <label className="mb-2 block text-sm font-medium">Incident Triage</label>
                <Select value={input.sla.triage} onValueChange={(value: '4h' | '8h' | 'NBD') => setInput({...input, sla: {...input.sla, triage: value}})}>
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
                <label className="mb-2 block text-sm font-medium">Change Approval</label>
                <Select value={input.sla.change} onValueChange={(value: '24h' | '48h' | 'custom') => setInput({...input, sla: {...input.sla, change: value}})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">24 hours</SelectItem>
                    <SelectItem value="48h">48 hours</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">DSAR Response</label>
                <Select value={input.sla.dsar} onValueChange={(value: '1d' | '3d' | '5d') => setInput({...input, sla: {...input.sla, dsar: value}})}>
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

              <div>
                <label className="mb-2 block text-sm font-medium">Reporting Cadence</label>
                <Select value={input.sla.reporting} onValueChange={(value: 'weekly' | 'monthly' | 'quarterly') => setInput({...input, sla: {...input.sla, reporting: value}})}>
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
            </div>

            <Button 
              onClick={generatePlan}
              className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
            >
              Generate Service Plan
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        {plan && (
          <Card className="border-white/10 bg-[#172135] backdrop-blur-md">
            <CardHeader>
              <CardTitle>Service Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                  <div className="text-2xl font-bold text-[#F47F21]">{plan.scoreTarget}%</div>
                  <div className="text-sm text-gray-300">Target Score</div>
                </div>
                <div className="rounded-lg bg-green-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{plan.monthlyEffort}</div>
                  <div className="text-sm text-gray-300">Monthly Effort</div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Team Roster (FTE)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>HITL Operators</span>
                    <span>{plan.roster.hitl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GRC Specialists</span>
                    <span>{plan.roster.grc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Engineers</span>
                    <span>{plan.roster.sse}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Program Managers</span>
                    <span>{plan.roster.pm}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Escalation Tree</h4>
                <ul className="space-y-1">
                  {plan.escalationTree.map((level, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F47F21]/20 text-xs">
                        {index + 1}
                      </div>
                      <span className="text-sm">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button onClick={exportRunbook} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Generate Runbook Excerpt
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
        </>
    )
}
export default ServicelevelComposer