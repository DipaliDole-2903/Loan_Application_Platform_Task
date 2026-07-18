export interface LoanProduct {
  id: string
  type: 'personal' | 'business'
  title: string
  description: string
  interestRate: string
  maxAmount: string
  tenure: string
  icon: string
  badge: string
  color: string
}

export const loanProducts: LoanProduct[] = [
  {
    id: 'pl-001',
    type: 'personal',
    title: 'Personal Loan',
    description: 'Quick funds for your personal needs with minimal documentation.',
    interestRate: 'Starting 10.5% p.a.',
    maxAmount: '₹25 Lakhs',
    tenure: 'Up to 5 Years',
    icon: '👤',
    badge: 'Most Popular',
    color: '#0F4C81',
  },
  {
    id: 'pl-002',
    type: 'personal',
    title: 'Home Renovation Loan',
    description: 'Transform your home with our affordable renovation financing.',
    interestRate: 'Starting 11.0% p.a.',
    maxAmount: '₹15 Lakhs',
    tenure: 'Up to 7 Years',
    icon: '🏠',
    badge: 'Low Interest',
    color: '#1FA971',
  },
  {
    id: 'bl-001',
    type: 'business',
    title: 'Business Loan',
    description: 'Scale your business with flexible financing solutions.',
    interestRate: 'Starting 12.0% p.a.',
    maxAmount: '₹2 Crores',
    tenure: 'Up to 10 Years',
    icon: '🏢',
    badge: 'Fast Approval',
    color: '#F5A623',
  },
  {
    id: 'bl-002',
    type: 'business',
    title: 'Working Capital Loan',
    description: 'Keep your operations running smoothly with working capital finance.',
    interestRate: 'Starting 13.5% p.a.',
    maxAmount: '₹50 Lakhs',
    tenure: 'Up to 3 Years',
    icon: '💼',
    badge: 'Quick Disbursal',
    color: '#0F4C81',
  },
]

export const loanBenefits = {
  personal: [
    { icon: '⚡', title: 'Instant Approval', desc: 'Get approval within 2 hours of applying' },
    { icon: '📄', title: 'Minimal Docs', desc: 'Just 3 documents needed to get started' },
    { icon: '💰', title: 'No Hidden Charges', desc: 'Transparent pricing with zero hidden fees' },
    { icon: '🔄', title: 'Flexible Tenure', desc: 'Choose repayment period from 12-60 months' },
  ],
  business: [
    { icon: '🚀', title: 'Quick Disbursement', desc: 'Funds in your account within 24 hours' },
    { icon: '📊', title: 'High Loan Amount', desc: 'Borrow up to ₹2 Crores for your business' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'Personal relationship manager assigned' },
    { icon: '🔐', title: 'Collateral Free', desc: 'No collateral required for amounts up to ₹25L' },
  ],
}

export const eligibilityCriteria = {
  personal: [
    'Age: 21–60 years',
    'Minimum salary: ₹20,000/month',
    'Employment: Salaried / Self-employed',
    'Credit Score: 700+',
    'Work experience: 1+ year',
  ],
  business: [
    'Business vintage: 2+ years',
    'Annual turnover: ₹10 Lakhs+',
    'GST registration required',
    'Credit Score: 650+',
    'Profitable for last 2 years',
  ],
}

export const requiredDocuments = {
  personal: [
    'PAN Card',
    'Aadhaar Card',
    'Last 3 months salary slips',
    'Last 6 months bank statement',
    'Form 16',
  ],
  business: [
    'PAN Card (Business & Proprietor)',
    'GST Certificate',
    'Last 2 years ITR with financials',
    'Last 12 months bank statements',
    'Business registration proof',
  ],
}

export const faqData = {
  personal: [
    {
      q: 'How long does approval take?',
      a: 'Personal loan approvals typically happen within 2 hours of submitting all required documents.',
    },
    {
      q: 'What is the maximum loan amount?',
      a: 'You can borrow up to ₹25 Lakhs based on your eligibility and credit profile.',
    },
    {
      q: 'Is there a prepayment penalty?',
      a: 'After 6 EMIs, you can prepay without any penalty charges.',
    },
    {
      q: 'What is the minimum CIBIL score required?',
      a: 'A CIBIL score of 700 or above is required for personal loan eligibility.',
    },
  ],
  business: [
    {
      q: 'Can a startup apply for a business loan?',
      a: 'Startups with at least 2 years of operation can apply for our business loan products.',
    },
    {
      q: 'Do I need collateral for a business loan?',
      a: 'Collateral-free loans are available up to ₹25 Lakhs. Higher amounts may require security.',
    },
    {
      q: 'What is the repayment flexibility?',
      a: 'You can choose from monthly, quarterly, or bullet repayment options.',
    },
    {
      q: 'How is the interest rate calculated?',
      a: 'Interest rates start at 12% p.a. and are based on your business profile and credit history.',
    },
  ],
}
