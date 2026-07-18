export type PartnerCategory = 'lending' | 'banking' | 'digital'

export interface Partner {
  id: string
  name: string
  category: PartnerCategory
  logo: string
  description: string
  termsUrl: string
}

export const partners: Partner[] = [
  // Lending Partners
  { id: 'lp-1', name: 'FinFast Capital', category: 'lending', logo: '🏦', description: 'Premier NBFC offering quick personal loans', termsUrl: '#' },
  { id: 'lp-2', name: 'SwiftCredit', category: 'lending', logo: '⚡', description: 'Instant credit solutions for every need', termsUrl: '#' },
  { id: 'lp-3', name: 'RapidFunds', category: 'lending', logo: '💸', description: 'Same-day loan disbursement specialists', termsUrl: '#' },
  { id: 'lp-4', name: 'MoneyBridge', category: 'lending', logo: '🌉', description: 'Bridging the gap between borrowers and capital', termsUrl: '#' },

  // Banking Partners
  { id: 'bp-1', name: 'NeoBank Plus', category: 'banking', logo: '🏛️', description: 'Digital-first banking for the modern era', termsUrl: '#' },
  { id: 'bp-2', name: 'Aurelia Bank', category: 'banking', logo: '🔑', description: 'Trusted banking partner with 25+ years', termsUrl: '#' },
  { id: 'bp-3', name: 'UrbanBank', category: 'banking', logo: '🌆', description: 'City-centric banking solutions', termsUrl: '#' },

  // Digital Partners
  { id: 'dp-1', name: 'PayEase', category: 'digital', logo: '📱', description: 'Seamless digital payment ecosystem', termsUrl: '#' },
  { id: 'dp-2', name: 'CreditVault', category: 'digital', logo: '🔐', description: 'Secure credit bureau integration', termsUrl: '#' },
  { id: 'dp-3', name: 'FinAPI', category: 'digital', logo: '⚙️', description: 'Open finance API infrastructure', termsUrl: '#' },
  { id: 'dp-4', name: 'ZeroDoc', category: 'digital', logo: '📋', description: 'Paperless KYC and verification platform', termsUrl: '#' },
]
