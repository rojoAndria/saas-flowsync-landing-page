import {
  Zap,
  Link2,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
  Globe,
  TrendingUp,
  Users,
  Clock,
  PlugZap,
  Workflow,
  Rocket,
} from 'lucide-react'

// ─── Features ────────────────────────────────────────────────────────────────

export const features = [
  {
    icon: Zap,
    title: 'Instant Automation',
    desc: 'Build workflows in minutes with our drag-and-drop editor. No dev needed.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: Link2,
    title: '100+ Integrations',
    desc: 'Connect Slack, Notion, HubSpot, GitHub and more in a single click.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Track every automation run, spot bottlenecks, and optimize instantly.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. Your data stays yours, always encrypted.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: BrainCircuit,
    title: 'AI-powered Suggestions',
    desc: 'Our AI learns your patterns and proactively suggests optimizations.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    desc: '99.99% uptime SLA. Deployed across 12 regions worldwide.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { icon: Users,      value: 2000,  suffix: '+',  label: 'Teams worldwide',  color: 'text-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-500/20' },
  { icon: Zap,        value: 12,    suffix: 'M+', label: 'Automations run',  color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { icon: Clock,      value: 99.99, suffix: '%',  label: 'Uptime SLA',       color: 'text-green-400',  bg: 'bg-green-500/10',  border: 'border-green-500/20' },
  { icon: TrendingUp, value: 4.9,   suffix: '/5', label: 'Average rating',   color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
]

// ─── How It Works steps ───────────────────────────────────────────────────────

export const steps = [
  {
    number: '01',
    icon: PlugZap,
    title: 'Connect your tools',
    desc: 'Link your existing apps in one click — Slack, Notion, HubSpot, GitHub and 100+ more integrations ready to go.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Build your workflow',
    desc: 'Use our visual drag-and-drop editor to define triggers, conditions, and actions. No code, no headaches.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/25',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Sit back and watch it run',
    desc: 'FlowSync executes your automations in real time, sends you reports, and learns from every run.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/25',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Ops · Stripe',
    avatar: 'SC',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=SarahChen&backgroundColor=b6e3f4',
    color: 'bg-indigo-500',
    rating: 5,
    text: 'FlowSync cut our manual reporting time by 80%. What used to take our team half a day now happens automatically every morning.',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO · Notion',
    avatar: 'MR',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=MarcusRivera&backgroundColor=c0aede',
    color: 'bg-purple-500',
    rating: 5,
    text: 'The integration library is insane. We connected 12 tools in an afternoon. The ROI was immediate — we should have switched much sooner.',
  },
  {
    name: 'Aiko Tanaka',
    role: 'Founder · Linear',
    avatar: 'AT',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=AikoTanaka&backgroundColor=ffdfbf',
    color: 'bg-pink-500',
    rating: 5,
    text: 'Best-in-class UX. The drag-and-drop editor is so intuitive our non-technical team built complex workflows without asking IT once.',
  },
  {
    name: 'James Okafor',
    role: 'VP Engineering · Vercel',
    avatar: 'JO',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=JamesOkafor&backgroundColor=d1d4f9',
    color: 'bg-blue-500',
    rating: 5,
    text: '99.99% uptime is not just a marketing claim — we have been running mission-critical workflows for 8 months without a single failure.',
  },
  {
    name: 'Elena Morozova',
    role: 'Director of Growth · Figma',
    avatar: 'EM',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=ElenaMorozova&backgroundColor=c1f0d4',
    color: 'bg-green-500',
    rating: 5,
    text: 'The AI suggestions are genuinely helpful. It spotted an inefficiency in our onboarding flow we had missed for months and fixed it automatically.',
  },
  {
    name: 'David Park',
    role: 'COO · Loom',
    avatar: 'DP',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=DavidPark&backgroundColor=ffd5dc',
    color: 'bg-orange-500',
    rating: 5,
    text: 'Switched from Zapier and never looked back. FlowSync handles 10x the volume at a fraction of the cost. The support team is exceptional.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    q: 'How long does it take to set up FlowSync?',
    a: 'Most teams are up and running in under 10 minutes. Connect your first integration, drag a few blocks together, and your first automation is live. No onboarding calls, no professional services required.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'Not at all. FlowSync is built for non-technical users. Our visual editor uses plain language conditions and actions. If you can use a spreadsheet, you can build workflows.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. FlowSync is SOC 2 Type II certified. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never sell your data and you can export or delete it at any time.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Absolutely. No lock-in, no cancellation fees. Cancel from your dashboard in one click and you will not be charged again. Your workflows stay accessible until the end of your billing period.',
  },
  {
    q: 'What happens if I exceed my plan limits?',
    a: 'We will notify you before you hit your limit. You can upgrade instantly from the dashboard or we can pause automations until the next billing cycle — your choice, never a surprise charge.',
  },
  {
    q: 'Do you offer discounts for startups or non-profits?',
    a: 'Yes. We offer 50% off for early-stage startups (under $1M ARR) and non-profit organizations. Reach out to our team with proof of status and we will apply the discount within 24 hours.',
  },
]

// ─── Pricing plans ────────────────────────────────────────────────────────────

export const plans = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'Perfect for individuals and small teams.',
    features: ['5 workflows', '3 integrations', '1,000 runs/month', 'Community support'],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    desc: 'For growing teams that need more power.',
    features: ['Unlimited workflows', '50+ integrations', '50,000 runs/month', 'Priority support', 'AI suggestions'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For organizations with advanced needs.',
    features: ['Everything in Pro', 'Custom integrations', 'Unlimited runs', 'Dedicated manager', 'SSO & compliance'],
    cta: 'Contact sales',
    highlight: false,
  },
]
