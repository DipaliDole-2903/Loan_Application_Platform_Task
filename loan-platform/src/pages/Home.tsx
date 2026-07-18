import { useNavigate } from 'react-router-dom'
import { ArrowRight, Star, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react'
import { loanProducts } from '../data/loans'

const services = [
  { icon: TrendingUp, title: 'Credit Tracker', desc: 'Monitor & improve your CIBIL score in real time', path: '/credit-tracker', color: '#0F4C81' },
  { icon: Shield, title: 'Insurance', desc: 'Protect your loan with comprehensive coverage', path: '#', color: '#1FA971' },
  { icon: Zap, title: 'Instant Transfer', desc: 'Funds in your account within hours', path: '#', color: '#F5A623' },
]

const testimonials = [
  { name: 'Rahul Sharma', role: 'Software Engineer', text: 'Got my personal loan in under 2 hours. The process was incredibly smooth!', rating: 5 },
  { name: 'Priya Menon', role: 'Business Owner', text: 'Fincera helped me expand my boutique with a hassle-free business loan.', rating: 5 },
  { name: 'Amit Patel', role: 'Freelancer', text: 'Best interest rates I found after comparing 10+ apps. Highly recommend!', rating: 5 },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div id="home-page" className="animate-fade-in">
      {/* Hero Banner */}
      <section
        id="home-hero"
        className="relative overflow-hidden py-24 md:py-40"
        style={{ background: 'linear-gradient(135deg, #0F4C81 0%, #1a6ab1 45%, #1FA971 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="absolute rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)', width: `${200 + i * 100}px`, height: `${200 + i * 100}px`, top: `${-10 + i * 20}%`, right: `${-10 + i * 10}%` }} />
          ))}
        </div>
        <div className="section-wrapper relative">
          <div className="max-w-2xl">
            <div className="badge badge-gold mb-4 inline-flex animate-fade-in">
              <Zap size={12} /> New: Instant Approval in 2 Hours
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Your Dreams,<br />Our <span style={{ color: '#7EDBA0' }}>Funding</span>
            </h1>
            <p className="text-white/80 text-lg mb-10 max-w-lg animate-slide-up" style={{ animationDelay: '100ms' }}>
              Get instant personal & business loans at competitive rates. Minimal paperwork. Maximum trust.
            </p>
            <div className="flex flex-wrap gap-6 animate-slide-up stagger-children">
              <button id="home-apply-personal-btn" onClick={() => navigate('/personal-loan')} className="btn btn-accent btn-lg">
                Apply for Personal Loan <ArrowRight size={18} />
              </button>
              <button id="home-apply-business-btn" onClick={() => navigate('/business-loan')} className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                Business Loan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="home-stats" className="py-12 md:py-16" style={{ background: 'var(--color-surface)' }}>
        <div className="section-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: '2M+', label: 'Happy Customers' },
              { value: '₹500Cr+', label: 'Total Disbursed' },
              { value: '10.5%', label: 'Interest Starting' },
              { value: '2 Hrs', label: 'Approval Time' },
            ].map((stat) => (
              <div key={stat.label} className="animate-fade-in">
                <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>{stat.value}</div>
                <div className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section id="home-loan-products" className="py-20 md:py-28">
        <div className="section-wrapper">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Our Loan Products</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Choose the right financial solution for your needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 stagger-children">
            {loanProducts.map((loan) => (
              <div
                key={loan.id}
                id={`loan-card-${loan.id}`}
                className="card p-8 cursor-pointer animate-fade-in"
                onClick={() => navigate(loan.type === 'personal' ? '/personal-loan' : '/business-loan')}
              >
                <div className="text-4xl mb-4">{loan.icon}</div>
                <div className="badge mb-3" style={{ background: `${loan.color}15`, color: loan.color }}>
                  {loan.badge}
                </div>
                <h3 className="font-semibold text-lg mb-2">{loan.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>{loan.description}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--color-text-muted)' }}>Rate</span>
                    <span className="font-medium">{loan.interestRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--color-text-muted)' }}>Max Amount</span>
                    <span className="font-medium">{loan.maxAmount}</span>
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-sm mt-5 w-full"
                  id={`loan-apply-${loan.id}`}
                >
                  Apply Now <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section id="home-services" className="py-20 md:py-28" style={{ background: 'var(--color-surface)' }}>
        <div className="section-wrapper">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl font-bold mb-3">Other Services</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Everything you need for your financial health</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 stagger-children">
            {services.map((svc) => (
              <div
                key={svc.title}
                id={`service-card-${svc.title.toLowerCase().replace(' ', '-')}`}
                className="card p-8 text-center cursor-pointer animate-fade-in"
                onClick={() => svc.path !== '#' && navigate(svc.path)}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${svc.color}15` }}
                >
                  <svc.icon size={26} style={{ color: svc.color }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{svc.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="home-testimonials" className="py-20 md:py-28">
        <div className="section-wrapper">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 stagger-children">
            {testimonials.map((t, i) => (
              <div key={i} id={`testimonial-${i}`} className="card p-8 md:p-10 animate-fade-in">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={16} fill="#F5A623" style={{ color: '#F5A623' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: 'var(--color-primary)' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="home-cta" className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0F4C81, #1FA971)' }}>
        <div className="section-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 text-lg">Join 2 million+ Indians who trust Fincera for their financial needs.</p>
          <button id="home-cta-btn" onClick={() => navigate('/personal-loan')} className="btn btn-accent btn-xl">
            Apply Now – It's Free <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  )
}
