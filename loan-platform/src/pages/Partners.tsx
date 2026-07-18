import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { partners, type PartnerCategory } from '../data/partners'

const tabs: { label: string; value: PartnerCategory }[] = [
  { label: 'Lending Partners', value: 'lending' },
  { label: 'Banking Partners', value: 'banking' },
  { label: 'Digital Partners', value: 'digital' },
]

export default function Partners() {
  const [activeTab, setActiveTab] = useState<PartnerCategory>('lending')
  const filtered = partners.filter((p) => p.category === activeTab)

  return (
    <div id="partners-page" className="animate-fade-in">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F4C81, #1FA971)' }}>
        <div className="section-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Partners</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            We work with India's most trusted financial institutions to bring you the best lending experience.
          </p>
        </div>
      </section>

      {/* Tabs + Cards */}
      <section className="py-16">
        <div className="section-wrapper">
          {/* Tab Bar */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-1" id="partners-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                id={`partner-tab-${tab.value}`}
                onClick={() => setActiveTab(tab.value)}
                className="flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: activeTab === tab.value ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: activeTab === tab.value ? 'white' : 'var(--color-text)',
                  boxShadow: activeTab === tab.value ? '0 4px 14px rgba(15,76,129,0.3)' : 'var(--shadow-sm)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Partner Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children" id="partners-grid">
            {filtered.map((partner) => (
              <div
                key={partner.id}
                id={`partner-card-${partner.id}`}
                className="card p-6 text-center animate-fade-in"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: 'var(--color-bg)' }}
                >
                  {partner.logo}
                </div>
                <h3 className="font-semibold text-base mb-2">{partner.name}</h3>
                <p className="text-xs mb-5" style={{ color: 'var(--color-text-muted)' }}>{partner.description}</p>
                <a
                  href={partner.termsUrl}
                  id={`partner-terms-${partner.id}`}
                  className="btn btn-ghost btn-sm inline-flex gap-1.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Terms <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
