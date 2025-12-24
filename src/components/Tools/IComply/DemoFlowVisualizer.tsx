import { useState } from 'react';
import { FileText, Target, Shield, CheckCircle, Users, Database, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, RefreshCw, Eye, Settings } from 'lucide-react';
import { useEffect } from 'react';
const DemoFlowVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const processFlow = [
    {
      name: 'Request Intake',
      icon: Users,
      color: 'bg-blue-500',
      duration: '< 1 min',
      subSteps: [
        { name: 'Form Submission', description: 'Multi-language intake form with validation', time: '30s' },
        { name: 'Auto-Classification', description: 'AI categorizes request type (Access, Portability, Erasure)', time: '15s' },
        { name: 'Initial Triage', description: 'System assigns priority and routing rules', time: '10s' }
      ],
      details: {
        inputs: ['Personal details', 'Request type', 'Supporting documents'],
        outputs: ['Case ID', 'Initial classification', 'SLA timeline'],
        automations: ['Duplicate detection', 'Fraud scoring', 'Language detection']
      }
    },
    {
      name: 'Identity Verification',
      icon: Shield,
      color: 'bg-yellow-500',
      duration: '2-24 hrs',
      subSteps: [
        { name: 'Document Check', description: 'ID verification against submitted documents', time: '5 min' },
        { name: 'Multi-Factor Auth', description: 'Email/SMS verification with security questions', time: '10 min' },
        { name: 'Risk Assessment', description: 'Fraud detection and compliance scoring', time: '2 min' },
        { name: 'Manual Review', description: 'Human verification for high-risk cases', time: '1-24 hrs' }
      ],
      details: {
        inputs: ['Government ID', 'Proof of address', 'Biometric data'],
        outputs: ['Verification status', 'Risk score', 'Approved identity'],
        automations: ['OCR document scanning', 'Face matching', 'Address validation']
      }
    },
    {
      name: 'Data Discovery',
      icon: Database,
      color: 'bg-purple-500',
      duration: '1-4 hrs',
      subSteps: [
        { name: 'System Mapping', description: 'Identify all systems containing personal data', time: '30 min' },
        { name: 'Data Scanning', description: 'Automated search across databases and files', time: '2 hrs' },
        { name: 'Cross-Reference', description: 'Link data across systems using identifiers', time: '45 min' },
        { name: 'Classification', description: 'Categorize data by sensitivity and source', time: '30 min' }
      ],
      details: {
        inputs: ['User identifiers', 'System credentials', 'Search parameters'],
        outputs: ['Data inventory', 'Source mapping', 'Sensitivity classification'],
        automations: ['API integrations', 'Database queries', 'File system scanning']
      }
    },
    {
      name: 'Data Compilation',
      icon: FileText,
      color: 'bg-green-500',
      duration: '30 min - 2 hrs',
      subSteps: [
        { name: 'Data Extraction', description: 'Pull relevant data from identified sources', time: '45 min' },
        { name: 'Format Conversion', description: 'Standardize data formats for delivery', time: '20 min' },
        { name: 'Redaction Process', description: 'Remove third-party or sensitive information', time: '30 min' },
        { name: 'Package Creation', description: 'Generate secure, downloadable package', time: '15 min' }
      ],
      details: {
        inputs: ['Raw data extracts', 'Redaction rules', 'Format preferences'],
        outputs: ['Compiled dataset', 'Redaction log', 'Delivery package'],
        automations: ['Data anonymization', 'Format conversion', 'Encryption']
      }
    },
    {
      name: 'Legal Review',
      icon: CheckCircle,
      color: 'bg-orange-500',
      duration: '1-3 days',
      subSteps: [
        { name: 'Completeness Check', description: 'Verify all requested data is included', time: '2 hrs' },
        { name: 'Legal Assessment', description: 'Review for legal compliance and exemptions', time: '4 hrs' },
        { name: 'Risk Evaluation', description: 'Assess disclosure risks and mitigation', time: '2 hrs' },
        { name: 'Final Approval', description: 'Legal sign-off for data release', time: '1 hr' }
      ],
      details: {
        inputs: ['Compiled data', 'Legal framework', 'Risk assessment'],
        outputs: ['Approval decision', 'Legal opinion', 'Release authorization'],
        automations: ['Compliance checking', 'Risk scoring', 'Approval workflows']
      }
    },
    {
      name: 'Secure Delivery',
      icon: ArrowRight,
      color: 'bg-red-500',
      duration: '< 30 min',
      subSteps: [
        { name: 'Encryption', description: 'End-to-end encryption of data package', time: '5 min' },
        { name: 'Delivery Method', description: 'Secure portal or encrypted email delivery', time: '10 min' },
        { name: 'Access Control', description: 'Time-limited access with download tracking', time: '5 min' },
        { name: 'Confirmation', description: 'Delivery confirmation and case closure', time: '5 min' }
      ],
      details: {
        inputs: ['Approved package', 'Delivery preferences', 'Security requirements'],
        outputs: ['Encrypted package', 'Access credentials', 'Delivery receipt'],
        automations: ['Encryption protocols', 'Delivery tracking', 'Access logging']
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (activeSubStep < processFlow[activeStep].subSteps.length - 1) {
          setActiveSubStep(prev => prev + 1);
        } else if (activeStep < processFlow.length - 1) {
          setActiveStep(prev => prev + 1);
          setActiveSubStep(0);
        } else {
          setActiveStep(0);
          setActiveSubStep(0);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isPlaying, activeStep, activeSubStep, processFlow]);

  const currentStep = processFlow[activeStep];

  return (
    <div className="bg-[#0F172A]/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Advanced DSAR Process Flow</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Complete end-to-end data subject access request workflow</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            size="sm"
            className="border-gray-500 text-gray-300 text-xs sm:text-sm"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {showDetails ? 'Hide' : 'Show'} Details
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            size="sm"
            className="border-[#F47F21] text-[#F47F21] text-xs sm:text-sm"
          >
            {isPlaying ? <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />}
            {isPlaying ? 'Playing' : 'Play Demo'}
          </Button>
        </div>
      </div>
      
      {/* Main Process Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {processFlow.map((step, index) => (
          <motion.div
            key={step.name}
            className="relative cursor-pointer"
            onClick={() => {
              setActiveStep(index);
              setActiveSubStep(0);
            }}
          >
            <motion.div
              className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all ${
                index === activeStep 
                  ? 'border-[#F47F21] bg-[#F47F21]/10' 
                  : index < activeStep 
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-gray-600 bg-gray-600/10'
              }`}
              animate={{ 
                scale: index === activeStep ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 ${
                    index === activeStep ? 'bg-[#F47F21] text-white' :
                    index < activeStep ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}
                  animate={{ 
                    rotate: index === activeStep ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <div className="text-xs sm:text-sm font-medium">{step.name}</div>
                <div className="text-xs text-gray-400 mt-1">{step.duration}</div>
              </div>
            </motion.div>
            
            {/* Connection Line - Hidden on mobile */}
            {index < processFlow.length - 1 && (
              <motion.div
                className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#F47F21] to-gray-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: index < activeStep ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Sub-Steps Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[#0A0F1A]/50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h4 className="text-lg sm:text-xl font-bold text-[#F47F21]">{currentStep.name}</h4>
            <div className="text-xs sm:text-sm text-gray-400">Duration: {currentStep.duration}</div>
          </div>
          
          {/* Sub-Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {currentStep.subSteps.map((subStep, index) => (
              <motion.div
                key={index}
                className={`p-3 sm:p-4 rounded-lg border transition-all ${
                  index === activeSubStep 
                    ? 'border-[#F47F21] bg-[#F47F21]/10' 
                    : index < activeSubStep
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-600 bg-gray-600/10'
                }`}
                animate={{ 
                  scale: index === activeSubStep ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === activeSubStep ? 'bg-[#F47F21] text-white' :
                    index < activeSubStep ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium">{subStep.name}</div>
                </div>
                <p className="text-xs text-gray-400 mb-2">{subStep.description}</p>
                <div className="text-xs text-[#F47F21]">⏱ {subStep.time}</div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round(((activeSubStep + 1) / currentStep.subSteps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className="bg-[#F47F21] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((activeSubStep + 1) / currentStep.subSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Detailed Information Panel */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-3 gap-6 bg-[#0A0F1A]/30 rounded-lg p-6">
              <div>
                <h5 className="font-bold text-green-400 mb-3 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Inputs
                </h5>
                <ul className="space-y-2">
                  {currentStep.details.inputs.map((input, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-blue-400 mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Automations
                </h5>
                <ul className="space-y-2">
                  {currentStep.details.automations.map((automation, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {automation}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-[#F47F21] mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Outputs
                </h5>
                <ul className="space-y-2">
                  {currentStep.details.outputs.map((output, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <div className="w-1 h-1 bg-[#F47F21] rounded-full mt-2 mr-2 flex-shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#F47F21]">6</div>
          <div className="text-xs text-gray-400">Main Steps</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-green-400">21</div>
          <div className="text-xs text-gray-400">Sub-Processes</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-400">95%</div>
          <div className="text-xs text-gray-400">Automation Rate</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-yellow-400">&lt; 72h</div>
          <div className="text-xs text-gray-400">Avg Completion</div>
        </div>
      </div>
    </div>
  );
};
export default DemoFlowVisualizer;