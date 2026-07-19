import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react'
import { loanBenefits, eligibilityCriteria, requiredDocuments, faqData } from '../data/loans'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b last:border-0" style={{ borderColor: 'var(--color-border)' }}>
      <button
        className="w-full flex justify-between items-center py-4 text-left font-medium text-sm"
        onClick={() => setOpen(!open)}
        style={{ color: 'var(--color-text)' }}
      >
        {q}
        {open ? <ChevronUp size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />}
      </button>
      {open && (
        <div className="pb-4 text-sm leading-relaxed animate-fade-in" style={{ color: 'var(--color-text-muted)' }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function BusinessLoan() {
  const navigate = useNavigate()

  return (
    <div id="business-loan-page" className="animate-fade-in">
      {/* Hero */}
      <section
        id="business-loan-hero"
        className="py-32 md:py-48 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1FA971, #27c484)' }}
      >
        <div className="section-wrapper">
          <div className="max-w-xl">
            <div className="badge mb-4 inline-flex" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
              Business Growth Partner
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Business Loan<br /><span style={{ color: '#fff9c4' }}>Scale Faster</span>
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Fuel your business growth with up to ₹2 Crores at 12% p.a. Quick disbursal, minimal collateral.
            </p>
            <button id="business-loan-apply-btn" onClick={() => navigate('/contact')} className="btn btn-xl" style={{ background: 'white', color: 'var(--color-secondary)' }}>
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="business-loan-benefits" className="py-28 md:py-36">
        <div className="section-wrapper">
          <h2 className="text-3xl font-bold text-center mb-16 md:mb-20">Why Businesses Love Fincera</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 stagger-children">
            {loanBenefits.business.map((b) => (
              <div key={b.title} id={`biz-benefit-${b.title.toLowerCase().replace(' ', '-')}`} className="card p-8 text-center animate-fade-in">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Documents */}
      <section id="business-loan-eligibility" className="py-28 md:py-36" style={{ background: 'var(--color-surface)' }}>
        <div className="section-wrapper">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-8">Eligibility Criteria</h2>
              <ul className="space-y-4">
                {eligibilityCriteria.business.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                    <span className="text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-8">Required Documents</h2>
              <ul className="space-y-4">
                {requiredDocuments.business.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="business-loan-faqs" className="py-28 md:py-36">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 md:mb-20">FAQs</h2>
          <div className="card p-8 md:p-10">
            {faqData.business.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36" style={{ background: 'var(--color-primary)' }}>
        <div className="section-wrapper text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Grow Your Business Today</h2>
          <p className="text-white/70 mb-8">Fast approvals. Flexible repayment. Your business, your terms.</p>
          <button id="business-loan-cta-btn" onClick={() => navigate('/contact')} className="btn btn-xl" style={{ background: 'white', color: 'var(--color-secondary)' }}>
            Apply for Business Loan <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
