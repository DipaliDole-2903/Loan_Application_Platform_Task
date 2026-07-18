import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react'
import { loanBenefits, eligibilityCriteria, requiredDocuments, faqData } from '../data/loans'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b last:border-0" style={{ borderColor: 'var(--color-border)' }}>
      <button
        className="w-full flex justify-between items-center py-4 text-left font-medium text-sm hover:text-blue-700 transition-colors"
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

export default function PersonalLoan() {
  const navigate = useNavigate()

  return (
    <div id="personal-loan-page" className="animate-fade-in">
      {/* Hero Banner */}
      <section
        id="personal-loan-hero"
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0F4C81, #1a6ab1)' }}
      >
        <div className="section-wrapper">
          <div className="max-w-xl">
            <div className="badge badge-gold mb-4 inline-flex">Most Popular Loan</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Personal Loan<br /><span style={{ color: '#7EDBA0' }}>Made Simple</span>
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Get up to ₹25 Lakhs at rates starting 10.5% p.a. with minimal documentation and instant approval.
            </p>
            <button id="personal-loan-apply-btn" onClick={() => navigate('/contact')} className="btn btn-accent btn-lg">
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="personal-loan-benefits" className="py-16">
        <div className="section-wrapper">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fincera?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {loanBenefits.personal.map((b) => (
              <div key={b.title} id={`benefit-${b.title.toLowerCase().replace(' ', '-')}`} className="card p-6 text-center animate-fade-in">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Documents */}
      <section id="personal-loan-eligibility" className="py-16" style={{ background: 'var(--color-surface)' }}>
        <div className="section-wrapper">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-8">Eligibility Criteria</h2>
              <ul className="space-y-4">
                {eligibilityCriteria.personal.map((c) => (
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
                {requiredDocuments.personal.map((d) => (
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
      <section id="personal-loan-faqs" className="py-16">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="card p-6">
            {faqData.personal.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--color-primary)' }}>
        <div className="section-wrapper text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/70 mb-8">Quick, easy, transparent. Funds in your account within 2 hours.</p>
          <button id="personal-loan-cta-btn" onClick={() => navigate('/contact')} className="btn btn-accent btn-lg">
            Start Your Application <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
