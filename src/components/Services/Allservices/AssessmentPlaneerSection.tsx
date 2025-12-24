'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { 
  CheckCircle, 
  Download,
} from 'lucide-react';








const AssessmentPlannerSection =()=>{

    const [scope, setScope] = useState<AssessmentScope>({
        industry: '',
        regions: 1,
        frameworks: [],
        agents: 5,
        dataSensitivity: 'Medium'
      });
      const [plan, setPlan] = useState<AssessmentPlan | null>(null);
    
      const industries = [
        'Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 
        'Retail', 'Government', 'Education', 'Energy', 'Other'
      ];
    
      const frameworks = [
        'GDPR', 'CCPA', 'LGPD', 'EU AI Act', 'ISO/IEC 42001', 
        'ISO 27001', 'NIST', 'SOC 2', 'HIPAA'
      ];
    
      const generatePlan = () => {
        const baseWeeks = 4;
        const complexityMultiplier = 
          (scope.frameworks.length > 3 ? 1.5 : 1) *
          (scope.regions > 2 ? 1.3 : 1) *
          (scope.dataSensitivity === 'High' ? 1.2 : 1) *
          (scope.agents > 20 ? 1.4 : 1);
    
        const weeks = Math.ceil(baseWeeks * complexityMultiplier);
        
        const team = {
          consultant: Math.ceil(weeks * 0.6),
          sme: Math.ceil(weeks * 0.4),
          pm: Math.ceil(weeks * 0.3)
        };
    
        const backlog = [
          'Current state discovery & inventory',
          'Gap analysis vs selected frameworks',
          'Risk assessment & prioritization',
          'Target operating model design',
          'Quick-start workflow templates',
          'Pilot implementation planning'
        ];
    
        const pilotSuggestion = scope.dataSensitivity === 'High' 
          ? 'Start with high-risk AI agents in controlled environment'
          : 'Begin with customer-facing agents for immediate impact';
    
        setPlan({ weeks, team, backlog, pilotSuggestion });
      };
    
      const exportBrief = () => {
        const briefContent = `
    ASSESSMENT BRIEF
    
    Industry: ${scope.industry}
    Regions: ${scope.regions}
    Frameworks: ${scope.frameworks.join(', ')}
    AI Agents/Apps: ${scope.agents}
    Data Sensitivity: ${scope.dataSensitivity}
    
    ESTIMATED PLAN:
    Duration: ${plan?.weeks} weeks
    Team: ${plan?.team.consultant} consultant days, ${plan?.team.sme} SME days, ${plan?.team.pm} PM days
    
    PILOT SUGGESTION:
    ${plan?.pilotSuggestion}
    
    DELIVERABLES:
    ${plan?.backlog.map(item => `• ${item}`).join('\n')}
        `;
    
        const blob = new Blob([briefContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'assessment-brief.txt';
        a.click();
        URL.revokeObjectURL(url);
      };
    return (
        <>
         <div className="space-y-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Assessment Planner</h3>
        <p className="text-gray-300">Configure your assessment scope and get an instant timeline and team estimate.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Panel */}
        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Scope Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Industry</label>
              <Select value={scope.industry} onValueChange={(value) => setScope({...scope, industry: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Regions: {scope.regions}
              </label>
              <Slider
                value={[scope.regions]}
                onValueChange={([value]) => setScope({...scope, regions: value})}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Frameworks</label>
              <div className="grid grid-cols-2 gap-2">
                {frameworks.map(framework => (
                  <div key={framework} className="flex items-center space-x-2">
                    <Checkbox
                      checked={scope.frameworks.includes(framework)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setScope({...scope, frameworks: [...scope.frameworks, framework]});
                        } else {
                          setScope({...scope, frameworks: scope.frameworks.filter(f => f !== framework)});
                        }
                      }}
                    />
                    <label className="text-sm">{framework}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                AI Agents/Apps: {scope.agents}
              </label>
              <Slider
                value={[scope.agents]}
                onValueChange={([value]) => setScope({...scope, agents: value})}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Data Sensitivity</label>
              <Select value={scope.dataSensitivity} onValueChange={(value: 'Low' | 'Medium' | 'High') => setScope({...scope, dataSensitivity: value})}>
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

            <Button 
              onClick={generatePlan}
              className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
              disabled={!scope.industry || scope.frameworks.length === 0}
            >
              Generate Assessment Plan
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        {plan && (
          <Card className="border-white/10 bg-[#172135] backdrop-blur-md">
            <CardHeader>
              <CardTitle>Assessment Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                  <div className="text-2xl font-bold text-[#F47F21]">{plan.weeks}</div>
                  <div className="text-sm text-gray-300">Weeks</div>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {plan.team.consultant + plan.team.sme + plan.team.pm}
                  </div>
                  <div className="text-sm text-gray-300">Total Days</div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Team Composition</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Consultant</span>
                    <span>{plan.team.consultant} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SME</span>
                    <span>{plan.team.sme} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PM</span>
                    <span>{plan.team.pm} days</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Key Deliverables</h4>
                <ul className="space-y-1">
                  {plan.backlog.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-blue-500/10 p-4">
                <h4 className="mb-2 font-semibold">Pilot Suggestion</h4>
                <p className="text-sm text-gray-300">{plan.pilotSuggestion}</p>
              </div>

              <Button onClick={exportBrief} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Brief
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
        </>
    )
}
export default AssessmentPlannerSection