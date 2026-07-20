import { useState } from 'react'
import { RefreshCw, TrendingUp, AlertTriangle, CheckCircle, X } from 'lucide-react'

const improvementTips = [
  { icon: CheckCircle, tip: 'Pay all EMIs and credit card bills on time', color: '#1FA971' },
  { icon: TrendingUp, tip: 'Keep credit utilisation below 30%', color: '#0F4C81' },
  { icon: CheckCircle, tip: 'Avoid multiple loan inquiries in a short period', color: '#1FA971' },
  { icon: AlertTriangle, tip: 'Do not close old credit cards – they build history', color: '#F5A623' },
  { icon: CheckCircle, tip: 'Maintain a healthy mix of secured & unsecured loans', color: '#1FA971' },
]

const products = ['Personal Loan', 'Business Loan', 'Credit Card', 'Home Loan', 'Car Loan']

function CreditGauge({ score }: { score: number }) {
  const pct = ((score - 300) / (900 - 300)) * 100
  const color = score >= 750 ? '#1FA971' : score >= 650 ? '#F5A623' : '#EF4444'
  const rating = score >= 750 ? 'Excellent' : score >= 700 ? 'Good' : score >= 650 ? 'Fair' : 'Poor'

  return (
    <div className="text-center">
      <div className="relative inline-block">
        <svg viewBox="0 0 200 120" width="260" height="156">
          {/* Background arc */}
          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E5E7EB" strokeWidth="18" strokeLinecap="round" />
          {/* Score arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={color}
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={`${pct * 2.51} 251`}
            style={{ transition: 'stroke-dasharray 1s ease, stroke 0.5s ease' }}
          />
          {/* Score text */}
          <text x="100" y="88" textAnchor="middle" fontSize="36" fontWeight="700" fill={color}>{score}</text>
          <text x="100" y="108" textAnchor="middle" fontSize="13" fill="#6B7280">{rating}</text>
        </svg>
      </div>
      <div className="flex justify-between text-xs mt-1 px-4" style={{ color: 'var(--color-text-muted)' }}>
        <span>300</span><span>Poor</span><span>Fair</span><span>Good</span><span>900</span>
      </div>
    </div>
  )
}

export default function CreditTracker() {
  const [score, setScore] = useState(742)
  const [refreshing, setRefreshing] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setScore(Math.floor(Math.random() * (800 - 700 + 1)) + 700)
      setRefreshing(false)
    }, 2000)
  }

  return (
    <div id="credit-tracker-page" className="animate-fade-in section-py">
      <div className="section-wrapper">
        <h1 className="text-3xl font-bold mb-2">Credit Tracker</h1>
        <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>Monitor your CIBIL score and get personalised tips to improve it.</p>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Score Card */}
          <div className="lg:col-span-2">
            <div className="card card-body" id="credit-score-card">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold">Your CIBIL Score</h2>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>Last updated: Today, {new Date().toLocaleDateString('en-IN')}</p>
                </div>
                <button
                  id="credit-refresh-btn"
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="btn btn-outline btn-sm flex items-center gap-2"
                >
                  <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} />
                  {refreshing ? 'Refreshing…' : 'Refresh'}
                </button>
              </div>

              <CreditGauge score={score} />

              <div className="grid grid-cols-3 gap-5 mt-10">
                {[
                  { label: 'Payment History', value: '95%', color: '#1FA971' },
                  { label: 'Credit Utilisation', value: '28%', color: '#0F4C81' },
                  { label: 'Credit Age', value: '5.2 Yrs', color: '#F5A623' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 rounded-3xl" style={{ background: 'var(--color-bg)' }}>
                    <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Improvement Tips */}
            <div className="card card-body mt-10" id="credit-tips-card">
              <h3 className="font-bold text-lg mb-5">Improvement Tips</h3>
              <ul className="space-y-4">
                {improvementTips.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <t.icon size={18} style={{ color: t.color, flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm">{t.tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Selection */}
          <div className="lg:col-span-1">
            <div className="card card-body" id="credit-product-card">
              <h3 className="font-bold text-lg mb-2">Best Products For You</h3>
              <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
                Based on your score of <strong>{score}</strong>, you're eligible for:
              </p>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p}>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        name="product"
                        value={p}
                        id={`product-${p.toLowerCase().replace(' ', '-')}`}
                        checked={selectedProduct === p}
                        onChange={() => setSelectedProduct(p)}
                        className="accent-blue-700"
                      />
                      <span className="text-sm font-medium">{p}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button
                id="credit-submit-btn"
                onClick={() => selectedProduct && setShowPopup(true)}
                disabled={!selectedProduct}
                className="btn btn-primary btn-md w-full mt-6"
              >
                Check Eligibility
              </button>
            </div>
            
            {/* Decorative Image */}
            <div className="mt-6 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="/credit-report.png" 
                alt="Credit Report and Analytics" 
                className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div id="credit-popup" className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
          <div className="card card-body max-w-md w-full animate-slide-up text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(31,169,113,0.1)' }}
            >
              <CheckCircle size={32} style={{ color: 'var(--color-secondary)' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">Great News!</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              With a CIBIL score of <strong>{score}</strong>, you're pre-qualified for a <strong>{selectedProduct}</strong>. Our team will reach out within 24 hours.
            </p>
            <button id="credit-popup-close" onClick={() => setShowPopup(false)} className="btn btn-primary btn-md w-full">
              Got It!
            </button>
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100">
              <X size={20} style={{ color: 'var(--color-text-muted)' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
