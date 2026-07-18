import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F4C81 0%, #1a6ab1 50%, #1FA971 100%)' }}
      id="splash-screen"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              background: 'rgba(255,255,255,0.05)',
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              top: `${10 + i * 12}%`,
              left: `${-20 + i * 20}%`,
              animation: `spin-slow ${6 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative animate-fade-in text-center">
        <div
          className="w-28 h-28 rounded-3xl flex items-center justify-center text-white font-bold text-5xl shadow-2xl mx-auto mb-6 animate-pulse-glow"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          F
        </div>
        <h1 className="text-5xl font-bold text-white mb-2">
          Fin<span style={{ color: '#7EDBA0' }}>cera</span>
        </h1>
        <p className="text-white/70 text-lg font-light tracking-wide">Smart Lending. Brighter Future.</p>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-white/50"
              style={{
                animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
        <p className="text-white/50 text-xs tracking-widest uppercase">Loading</p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
