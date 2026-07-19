export default function Terms() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using the Fincera platform, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, please discontinue use immediately.',
    },
    {
      title: '2. Eligibility',
      content: 'You must be at least 21 years of age, an Indian resident, and have a valid government-issued ID to use our services. Minors are strictly prohibited from using this platform.',
    },
    {
      title: '3. Loan Products',
      content: 'All loan products offered through Fincera are subject to credit assessment, applicable regulations, and individual lender terms. Approval is not guaranteed and is at the sole discretion of the lending partner.',
    },
    {
      title: '4. Interest Rates & Fees',
      content: 'Interest rates are indicative and subject to change based on your credit profile, loan amount, and tenure. All applicable processing fees, GST, and other charges will be disclosed before disbursement.',
    },
    {
      title: '5. Repayment',
      content: 'You are obligated to repay all loans on schedule. Late payments may attract penal charges and adversely affect your CIBIL score. Fincera reserves the right to initiate recovery proceedings for defaults.',
    },
    {
      title: '6. Data Accuracy',
      content: 'You agree to provide accurate and complete information. Any misrepresentation or fraud may result in immediate cancellation of your application and legal action.',
    },
    {
      title: '7. Intellectual Property',
      content: 'All content, design, logos, and trademarks on the Fincera platform are the exclusive property of Fincera Financial Services. Unauthorized use is strictly prohibited.',
    },
    {
      title: '8. Limitation of Liability',
      content: 'Fincera shall not be liable for any indirect, incidental, or consequential damages arising from the use of this platform. Our total liability shall not exceed the amount of fees paid by you in the last 3 months.',
    },
    {
      title: '9. Governing Law',
      content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.',
    },
    {
      title: '10. Contact',
      content: 'For queries regarding these Terms, contact us at legal@fincera.in or write to Fincera Financial Services, BKC, Mumbai – 400051.',
    },
  ]

  return (
    <div id="terms-page" className="animate-fade-in">
      <section className="relative overflow-hidden py-16 md:py-28 lg:py-36" style={{ background: 'linear-gradient(135deg, #1FA971, #27c484)' }}>
        <div className="section-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-white/70">Last updated: 1 July 2026</p>
        </div>
      </section>

      <section className="section-py">
        <div className="section-wrapper max-w-4xl mx-auto">
          <p className="text-sm mb-10 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            Please read these Terms & Conditions carefully before using the Fincera platform. These terms constitute a legally binding agreement between you and Fincera Financial Services.
          </p>
          <div className="space-y-6">
            {sections.map((s) => (
              <div key={s.title} id={`terms-${s.title.split('.')[0].trim()}`} className="card card-body">
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
