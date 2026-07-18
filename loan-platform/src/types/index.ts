// Shared TypeScript types for the CredNova platform

export interface User {
  id: string
  name: string
  email: string
  mobile: string
}

export interface LoanApplication {
  id: string
  type: 'personal' | 'business'
  amount: number
  tenure: number
  status: 'pending' | 'approved' | 'rejected' | 'disbursed'
  appliedAt: string
}

export interface CreditScore {
  score: number
  rating: 'Excellent' | 'Good' | 'Fair' | 'Poor'
  lastUpdated: string
  factors: CreditFactor[]
}

export interface CreditFactor {
  name: string
  impact: 'positive' | 'neutral' | 'negative'
  description: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NavItem {
  label: string
  path: string
  icon?: string
}
