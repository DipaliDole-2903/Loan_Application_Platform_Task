import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Bell, Home, CreditCard, Users, Info, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/home', icon: <Home size={16} /> },
  {
    label: 'Loans',
    icon: <CreditCard size={16} />,
    children: [
      { label: 'Personal Loan', path: '/personal-loan' },
      { label: 'Business Loan', path: '/business-loan' },
    ],
  },
  { label: 'Credit Tracker', path: '/credit-tracker', icon: <CreditCard size={16} /> },
  { label: 'Partners', path: '/partners', icon: <Users size={16} /> },
  { label: 'About', path: '/about', icon: <Info size={16} /> },
  { label: 'Contact', path: '/contact', icon: <Phone size={16} /> },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loansOpen, setLoansOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className="sticky top-0 z-50 glass border-b border-white/40"
      style={{ boxShadow: '0 2px 20px rgba(15,76,129,0.08)' }}
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-2.5 group"
            id="header-logo"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0F4C81, #1FA971)' }}
            >
              F
            </div>
            <span className="font-bold text-xl" style={{ color: 'var(--color-primary)' }}>
              Fin<span style={{ color: 'var(--color-secondary)' }}>cera</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8" id="desktop-nav">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    id={`nav-${item.label.toLowerCase()}-dropdown`}
                    onClick={() => setLoansOpen(!loansOpen)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-blue-50"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${loansOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {loansOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-44 rounded-2xl overflow-hidden shadow-xl border border-gray-100 animate-fade-in"
                      style={{ background: 'white' }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          id={`nav-${child.label.toLowerCase().replace(' ', '-')}`}
                          onClick={() => setLoansOpen(false)}
                          className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors"
                          style={{ color: isActive(child.path) ? 'var(--color-primary)' : 'var(--color-text)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  id={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-blue-50"
                  style={{
                    color: isActive(item.path!) ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: isActive(item.path!) ? '600' : '500',
                    background: isActive(item.path!) ? 'rgba(15,76,129,0.08)' : '',
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              id="header-notification"
              className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <Bell size={18} />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ background: 'var(--color-secondary)' }}
              />
            </button>

            <button
              id="header-apply-btn"
              onClick={() => navigate('/personal-loan')}
              className="hidden md:flex btn btn-primary btn-sm"
            >
              Apply Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="header-menu-toggle"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
              style={{ color: 'var(--color-text)' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t animate-fade-in"
          style={{ borderColor: 'var(--color-border)', background: 'white' }}
        >
          <div className="section-wrapper py-4 flex flex-col gap-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      id={`mobile-nav-${child.label.toLowerCase().replace(' ', '-')}`}
                      onClick={() => setMenuOpen(false)}
                      className="block px-6 py-2.5 rounded-xl text-sm transition-colors hover:bg-blue-50"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  id={`mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-blue-50"
                  style={{ color: isActive(item.path!) ? 'var(--color-primary)' : 'var(--color-text)' }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-2 border-t mt-2" style={{ borderColor: 'var(--color-border)' }}>
              <button
                id="mobile-apply-btn"
                onClick={() => { navigate('/personal-loan'); setMenuOpen(false) }}
                className="btn btn-primary btn-md w-full"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
