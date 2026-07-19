export default function About() {
  const stats = [
    { value: '2020', label: 'Founded' },
    { value: '2M+', label: 'Customers' },
    { value: '28', label: 'Cities' },
    { value: '₹500Cr+', label: 'Disbursed' },
  ]

  const team = [
    { name: 'Arjun Mehta', role: 'CEO & Co-Founder', emoji: '👨‍💼' },
    { name: 'Siya Kapoor', role: 'CTO & Co-Founder', emoji: '👩‍💻' },
    { name: 'Rohan Verma', role: 'Chief Risk Officer', emoji: '👨‍💼' },
  ]

  return (
    <div id="about-page" className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-28 lg:py-36" style={{ background: 'linear-gradient(135deg, #0F4C81, #1a6ab1)' }}>
        <div className="section-wrapper text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">About Fincera</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            We're on a mission to make credit accessible, transparent, and empowering for every Indian.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-py" style={{ background: 'var(--color-surface)' }}>
        <div className="section-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label} id={`about-stat-${s.label.toLowerCase()}`}>
                <div className="text-4xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{s.value}</div>
                <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section id="about-mission" className="section-py">
        <div className="section-wrapper">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'Democratize access to credit by leveraging technology to provide fast, fair, and transparent lending solutions.' },
              { icon: '🔭', title: 'Our Vision', desc: "To be India's most trusted fintech platform, empowering individuals and businesses to achieve their financial goals." },
              { icon: '💡', title: 'Our Values', desc: 'Transparency, innovation, customer-first mindset, and responsible lending are the pillars that guide everything we do.' },
            ].map((item) => (
              <div key={item.title} id={`about-${item.title.toLowerCase().replace(' ', '-')}`} className="card card-body text-center">
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="about-team" className="section-py" style={{ background: 'var(--color-surface)' }}>
        <div className="section-wrapper">
          <div className="section-heading">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto stagger-children">
            {team.map((member) => (
              <div key={member.name} id={`team-${member.name.toLowerCase().replace(' ', '-')}`} className="card card-body text-center animate-fade-in">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
