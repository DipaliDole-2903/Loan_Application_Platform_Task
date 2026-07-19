export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect personal information such as your name, email address, mobile number, PAN, Aadhaar, and financial information when you apply for a loan or use our services. We may also collect device and usage data automatically.',
    },
    {
      title: '2. How We Use Your Information',
      content: 'Your information is used to process loan applications, verify your identity, assess creditworthiness, communicate with you, improve our services, and comply with legal obligations.',
    },
    {
      title: '3. Data Sharing',
      content: 'We may share your data with credit bureaus, partner lenders, and regulatory authorities as required. We do not sell your personal information to third parties for marketing purposes.',
    },
    {
      title: '4. Data Security',
      content: 'We employ industry-standard encryption (TLS/SSL), secure servers, and access controls to protect your data. However, no method of transmission over the Internet is 100% secure.',
    },
    {
      title: '5. Your Rights',
      content: 'You have the right to access, correct, or delete your personal data. You may also withdraw consent at any time by contacting us at privacy@fincera.in.',
    },
    {
      title: '6. Cookies',
      content: 'We use cookies to enhance user experience and analyse site traffic. You can control cookie settings through your browser preferences.',
    },
    {
      title: '7. Changes to This Policy',
      content: 'We may update this Privacy Policy periodically. We will notify you of significant changes via email or a prominent notice on our platform.',
    },
    {
      title: '8. Contact Us',
      content: 'For privacy-related queries, contact our Data Protection Officer at privacy@fincera.in or write to Fincera Financial Services, BKC, Mumbai – 400051.',
    },
  ]

  return (
    <div id="privacy-policy-page" className="animate-fade-in">
      <section className="py-32 md:py-48" style={{ background: 'linear-gradient(135deg, #0F4C81, #1a6ab1)' }}>
        <div className="section-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: 1 July 2026</p>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="section-wrapper max-w-4xl mx-auto">
          <p className="text-sm mb-10 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            Fincera Financial Services ("Fincera", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
          </p>
          <div className="space-y-6">
            {sections.map((s) => (
              <div key={s.title} id={`privacy-${s.title.split('.')[0].trim()}`} className="card p-8 md:p-10">
                <h2 className="text-lg font-semibold mb-3">{s.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
