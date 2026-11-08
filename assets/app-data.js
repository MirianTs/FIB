// New mobile version (Stitch project "FIB Professional Ecosystem"), in the 7-phase order of its QA report.
// Order here = prev/next order on the screens.
window.FIB_APP = [
  { phase: 'რეგისტრაცია და ონბორდინგი', en: 'Onboarding & Registration', items: [
    ['welcome', 'Welcome & Sign In'],
    ['welcome-register', 'Registration (5 steps)'],
    ['company-setup', 'Company Setup & Verification'],
    ['talent-setup', 'Individual Talent Onboarding'],
  ]},
  { phase: 'დაფები, ძიება და შეტყობინებები', en: 'Dashboards, Matching & Messaging', items: [
    ['company-dashboard', 'Company & Employer Dashboard'],
    ['talent-dashboard', 'Individual & Talent Dashboard'],
    ['matching-hub', 'AI Matching & Discovery Hub'],
    ['collaboration-hub', 'Invitations, Messages & Notifications'],
  ]},
  { phase: 'კერძო AI მოლაპარაკება', en: 'Private AI Negotiation', items: [
    ['negotiation', 'Bilateral AI Negotiation & Privacy Firewall'],
  ]},
  { phase: 'საბოლოო ბრიფი და შეთანხმება', en: 'Final Brief & Agreement Lock', items: [
    ['final-brief', 'Final Brief & Bilateral Review'],
    ['deal-matrix', 'AI Deal Matrix & Consensus'],
    ['agreement-lock', 'Mutual Agreement Lock & Baseline'],
  ]},
  { phase: 'სამუშაო სივრცე და შედეგები', en: 'Workspace & Deliverables', items: [
    ['workspace', 'Shared Project Workspace'],
    ['deliverables', 'Deliverables Review & Audit'],
  ]},
  { phase: 'ცვლილებები და შესწორებები', en: 'Change Requests & Amendments', items: [
    ['change-request', 'Change Request & AI Impact Analysis'],
    ['amendment-review', 'Amendment Review & Version History'],
  ]},
  { phase: 'გადახდა და დასრულება', en: 'Settlement & Completion', items: [
    ['payments', 'Payments, Escrow & Ledger'],
    ['completion', 'Project Completion & Mutual Reviews'],
  ]},
];
