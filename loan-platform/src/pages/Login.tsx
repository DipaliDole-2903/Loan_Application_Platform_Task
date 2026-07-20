import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, ArrowRight } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', mobile: '' })
  const [errors, setErrors] = useState<{ email?: string; mobile?: string }>({})

  const validate = () => {
    const newErrors: { email?: string; mobile?: string } = {}
    if (!form.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (!form.mobile) newErrors.mobile = 'Mobile number is required'
    else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) navigate('/home')
  }

  return (
    <div className="min-h-screen flex relative overflow-hidden" id="login-page">
      {/* Left Panel */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 relative"
        style={{ background: 'linear-gradient(135deg, #55810fff 0%, #b1ae1aff 55%, #1FA971 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                width: `${100 + i * 60}px`,
                height: `${100 + i * 60}px`,
                bottom: `${5 + i * 10}%`,
                right: `${-10 + i * 15}%`,
              }}
            />
          ))}
        </div>
        <div className="relative text-center text-white animate-fade-in">
          <div className="w-full flex justify-center mb-8">
            <img 
              src="/image.png" 
              alt="Fincera Logo" 
              className="w-20 h-20 object-contain rounded-2xl shadow-2xl bg-white/20 opacity-50"
              style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)' }}
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-xs mx-auto">
            Your smarter lending journey continues. Get instant loans, track credit & more.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 stagger-children">
            {[
              { value: '2M+', label: 'Happy Customers' },
              { value: '₹500Cr', label: 'Disbursed' },
              { value: '4.8★', label: 'App Rating' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-4 text-center animate-fade-in"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
              >
                <div className="font-bold text-xl">{stat.value}</div>
                <div className="text-white/60 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12" style={{ background: 'var(--color-bg)' }}>
        <div className="w-full max-w-md animate-slide-up">
          {/* Mobile Logo */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8 lg:hidden text-center">
            <img 
              src="/image.png" 
              alt="Fincera Logo" 
              className="w-14 h-14 object-contain rounded-2xl shadow-lg bg-white/20 opacity-50"
            />
            <span className="font-bold text-2xl" style={{ color: 'var(--color-primary)' }}>
              Fin<span style={{ color: 'var(--color-secondary)' }}>cera</span>
            </span>
            <p className="text-xs tracking-wide" style={{ color: 'var(--color-text-muted)' }}>Smart Lending. Brighter Future.</p>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center lg:text-left" style={{ color: 'var(--color-text)' }}>Sign In</h1>
          <p className="mb-10 text-sm text-center lg:text-left" style={{ color: 'var(--color-text-muted)' }}>
            Enter your details to continue to your dashboard
          </p>

          <form onSubmit={handleSubmit} id="login-form" className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`input-field !pl-11 ${errors.email ? 'error' : ''}`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--color-error)' }}>{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="login-mobile" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                Mobile Number
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  id="login-mobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  className={`input-field !pl-11 ${errors.mobile ? 'error' : ''}`}
                />
              </div>
              {errors.mobile && (
                <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--color-error)' }}>{errors.mobile}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="login-terms"
                className="mt-1 w-4 h-4 rounded border-gray-300"
                style={{ accentColor: '#55810f' }}
                required
              />
              <label htmlFor="login-terms" className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I agree to the{' '}
                <a href="/terms" className="font-semibold transition-colors hover:text-blue-800" style={{ color: 'var(--color-primary)' }}>Terms & Conditions</a>
                {' '}and{' '}
                <a href="/privacy-policy" className="font-semibold transition-colors hover:text-blue-800" style={{ color: 'var(--color-primary)' }}>Privacy Policy</a>
              </label>
            </div>

            <button
              id="login-submit-btn"
              type="submit"
              className="btn btn-primary btn-lg w-full"
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
