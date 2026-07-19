import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Share2, Globe, MessageCircle, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-primary)', color: 'white' }}>
      {/* Main Footer */}
      <div className="section-wrapper py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                F
              </div>
              <span className="font-bold text-2xl text-white">Fincera</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Empowering your financial journey with smart, transparent, and instant lending solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Share2, Globe, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  id={`footer-social-${i}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Products
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Personal Loan', path: '/personal-loan' },
                { label: 'Business Loan', path: '/business-loan' },
                { label: 'Credit Tracker', path: '/credit-tracker' },
                { label: 'Partners', path: '/partners' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    id={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                    className="text-sm flex items-center gap-1.5 group hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms & Conditions', path: '/terms' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    id={`footer-link-${link.label.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    className="text-sm flex items-center gap-1.5 group hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'support@fincera.in', id: 'footer-email' },
                { icon: Phone, text: '+91 1800-FIN-CERA', id: 'footer-phone' },
                { icon: MapPin, text: 'Mumbai, Maharashtra, India', id: 'footer-address' },
              ].map(({ icon: Icon, text, id }) => (
                <li key={id} className="flex items-start gap-3" id={id}>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <Icon size={14} />
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="section-wrapper py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {currentYear} Fincera Financial Services. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            RBI Registered NBFC • CIN: U65910MH2020PTC123456
          </p>
        </div>
      </div>
    </footer>
  )
}
