// Mobile screens exported from Stitch, grouped by user flow.
// Each entry: [slug, title, hasDarkVariant, hasLightVariant]
window.FIB_SCREENS = [
  { group: 'ონბორდინგი და ანგარიში', en: 'Onboarding & Account', items: [
    ['welcome', 'Welcome to FIB', false, true],
    ['sign-up', 'Sign Up', false, true],
    ['sign-in', 'Sign In', false, true],
    ['two-factor', 'Two-Factor & Biometric Verification', false, true],
    ['choose-role', 'Choose Your Role', false, true],
    ['client-setup', 'Client Profile & Hiring Setup', false, true],
    ['business-setup', 'Profile & Business Setup', false, true],
    ['provider-setup-1', 'Provider Setup 1–2: Identity & About', false, true],
    ['provider-setup-2', 'Provider Setup 3–4: Skills & Portfolio', false, true],
    ['provider-setup-3', 'Provider Setup 5–6: KYC & Payouts', true, false],
  ]},
  { group: 'დაფები და ძიება', en: 'Dashboards & Discovery', items: [
    ['client-dashboard', 'Client Dashboard & Marketplace', false, true],
    ['provider-dashboard', 'Provider & Job Seeker Dashboard', false, true],
    ['talent-finder', 'AI Talent Finder', false, true],
    ['talent-finder-chat', 'AI Talent Finder — Chat', true, true],
    ['brief-builder', 'AI Collaborative Brief Builder', true, true],
  ]},
  { group: 'მოლაპარაკება (FIB Arbitrate)', en: 'Negotiation', items: [
    ['reconciliation', 'Bilateral AI Reconciliation', true, true],
    ['negotiation-employer', 'AI Dual Negotiation — Employer', true, true],
    ['negotiation-candidate', 'Candidate Private Chat', true, true],
    ['final-signoff', 'Final Brief Sign-Off', true, true],
    ['agreement-signed', 'Signed Agreement & Escrow Activation', true, true],
  ]},
  { group: 'პროექტის სამუშაო სივრცე', en: 'Project Workspace', items: [
    ['workspace', 'Project Workspace & AI Task Engine', true, true],
    ['project-chat', 'Shared Chat, Files & Escrow Milestones', true, true],
    ['deliverable-review', 'AI Project Manager & Deliverable Review', true, true],
  ]},
];
