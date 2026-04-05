import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  BarChart3,
  BriefcaseBusiness,
  Cpu,
  Database,
  DollarSign,
  Eye,
  FileCheck,
  Fingerprint,
  Ghost,
  Gavel,
  Lock,
  UserCheck,
  Users,
} from 'lucide-react';

export const HIGHLIGHT_WORDS = ['Visibility', 'Governance', 'Compliance', 'Innovation', 'Privacy-First'] as const;

export type ProblemCard = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
};

export const problemCards: ProblemCard[] = [
  {
    icon: Users,
    title: 'Agent Sprawl',
    description: 'Unmanaged AI agents proliferating across teams without visibility or oversight.',
  },
  {
    icon: DollarSign,
    title: 'No Control over AI Spend',
    description: 'Costs spiraling with no central tracking, budgets, or accountability.',
  },
  {
    icon: Ghost,
    title: 'Shadow AI',
    description: 'Employees deploying AI tools that bypass governance and security protocols.',
  },
];

export type FeatureCard = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
};

export const featureCards: FeatureCard[] = [
  {
    icon: Eye,
    title: 'Centralized Visibility',
    description: 'Full inventory of every AI agent, model, and data flow across your org.',
  },
  {
    icon: Lock,
    title: 'Policy Enforcement',
    description: 'Define and enforce governance policies automatically at scale.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Automation',
    description: 'Continuous compliance checks mapped to EU AI Act, NIST, ISO, and more.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Monitoring',
    description: 'Real-time risk scoring and anomaly detection across all agents.',
  },
  {
    icon: BarChart3,
    title: 'Audit Readiness',
    description: 'Comprehensive logs and reports ready for regulators and stakeholders.',
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'Track and control data flows to prevent leakage and ensure privacy.',
  },
];

export type PersonaSection = {
  readonly slug: string;
  readonly title: string;
  readonly icon: LucideIcon;
  readonly heading: string;
  readonly description: string;
  readonly bullets: readonly string[];
  readonly reversed: boolean;
};

export const personaSections: PersonaSection[] = [
  {
    slug: 'ceos',
    title: 'CEOs',
    icon: BriefcaseBusiness,
    heading: 'Executive Visibility into Your AI Landscape',
    description:
      'Gain complete executive visibility into your AI landscape. Understand AI risk posture, ensure board-level compliance reporting, and drive strategic AI adoption with confidence.',
    bullets: ['Board-ready compliance dashboards', 'Enterprise risk posture at a glance', 'Strategic AI adoption metrics'],
    reversed: false,
  },
  {
    slug: 'cios',
    title: 'CIOs',
    icon: Cpu,
    heading: 'Unified Infrastructure Governance',
    description:
      'Consolidate AI governance across your technology stack. Manage agent sprawl, enforce architectural standards, and maintain operational excellence across all AI deployments.',
    bullets: ['Cross-platform agent management', 'Infrastructure compliance automation', 'Technology stack governance'],
    reversed: true,
  },
  {
    slug: 'clos',
    title: 'CLOs',
    icon: Gavel,
    heading: 'Regulatory Compliance Made Simple',
    description:
      'Stay ahead of evolving AI regulations. Automated compliance mapping to EU AI Act, NIST AI RMF, ISO 42001, and more—with audit-ready documentation always at your fingertips.',
    bullets: ['Multi-framework compliance mapping', 'Automated regulatory reporting', 'Audit trail management'],
    reversed: false,
  },
  {
    slug: 'cpos',
    title: 'CPOs',
    icon: UserCheck,
    heading: 'Accelerate Innovation with Governance',
    description:
      'AgentsFlow accelerates innovation with standardized lifecycles, guardrails, and approval workflows—so your product teams can move fast without breaking compliance.',
    bullets: ['Standardized agent lifecycles', 'Built-in approval workflows', 'Innovation velocity metrics'],
    reversed: true,
  },
  {
    slug: 'dpos',
    title: 'DPOs',
    icon: Fingerprint,
    heading: 'Privacy-First AI Governance',
    description:
      'Ensure every AI agent respects data privacy. Track data flows, enforce consent requirements, and maintain GDPR/CCPA compliance across your entire AI ecosystem.',
    bullets: ['Data flow tracking & mapping', 'Consent management integration', 'Privacy impact assessments'],
    reversed: false,
  },
];

export const dashboardMetrics = [
  { label: 'Agents Governed', value: '247/247', pct: 100 },
  { label: 'Policies Active', value: '89', pct: 85 },
  { label: 'Compliance Score', value: '99.2%', pct: 99 },
  { label: 'Risk Level', value: 'Low', pct: 15 },
] as const;

export const heroStats = [
  { label: 'Agents Active', value: '247' },
  { label: 'Policies', value: '89' },
  { label: 'Compliance', value: '99.2%' },
] as const;

export const heroDashTiles = ['Data Flow', 'Audit Log', 'Cost Tracker', 'Alerts'] as const;

export const controlPlaneBullets = [
  'Unified agent registry',
  'Real-time policy enforcement',
  'Cross-platform compliance',
  'Automated risk assessment',
] as const;
