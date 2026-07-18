import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <div id="contact-page" className="animate-fade-in">
      {/* Hero */}
      <section className="py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #0F4C81, #1FA971)' }}>
        <div className="section-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg">We'd love to hear from you. Our team is always ready to help.</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-wrapper">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div id="contact-info">
              <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email Us', value: 'support@fincera.in', id: 'contact-email' },
                  { icon: Phone, label: 'Call Us', value: '+91 1800-FIN-CERA (Toll Free)', id: 'contact-phone' },
                  { icon: MapPin, label: 'Visit Us', value: 'Fincera HQ, BKC, Mumbai, Maharashtra – 400051', id: 'contact-address' },
                ].map(({ icon: Icon, label, value, id }) => (
                  <div key={id} id={id} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(15,76,129,0.08)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{label}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-10 card p-6" id="contact-hours">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <div className="flex justify-between">
                    <span>Monday – Friday</span><span className="font-medium">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span><span className="font-medium">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span><span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="contact-form-section">
              {submitted ? (
                <div className="card p-10 text-center animate-fade-in" id="contact-success">
                  <CheckCircle size={56} className="mx-auto mb-5" style={{ color: 'var(--color-secondary)' }} />
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button id="contact-send-another-btn" onClick={() => setSubmitted(false)} className="btn btn-primary btn-md mt-6">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="card p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`input-field ${errors.name ? 'error' : ''}`}
                      />
                      {errors.name && <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--color-error)' }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email-input" className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        id="contact-email-input"
                        type="email"
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`input-field ${errors.email ? 'error' : ''}`}
                      />
                      {errors.email && <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--color-error)' }}>{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="How can we help you today?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`input-field resize-none ${errors.message ? 'error' : ''}`}
                      />
                      {errors.message && <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--color-error)' }}>{errors.message}</p>}
                    </div>
                    <button id="contact-submit-btn" type="submit" className="btn btn-primary btn-lg w-full">
                      Send Message <Send size={17} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
