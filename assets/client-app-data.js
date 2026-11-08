// Georgian client mobile app (Stitch project "FIB Mobile App Foundation"), in user-flow order.
// Order here = prev/next order on the screens.
window.FIB_CLIENT_APP = [
  { phase: 'ავტორიზაცია', en: 'Sign up & Sign in', items: [
    ['splash', 'Splash'],
    ['sign-up', 'რეგისტრაცია'],
    ['log-in', 'შესვლა'],
    ['verification', 'ტელეფონის დადასტურება'],
  ]},
  { phase: 'მთავარი', en: 'Home & Inbox', items: [
    ['home', 'მთავარი — გამარჯობა, გიორგი'],
    ['inbox', 'ჩატები და AI ასისტენტი'],
    ['notifications', 'შეტყობინებები'],
  ]},
  { phase: 'AI ბრიფი და გუნდი', en: 'AI Brief & Team', items: [
    ['brief-start', 'AI ბრიფის დაწყება'],
    ['brief-progress', 'ბრიფის პროგრესი'],
    ['brief-summary', 'ბრიფის შეჯამება'],
    ['execution-mode', 'როგორ გსურს შესრულება?'],
    ['ai-offers', 'AI შეთავაზებები'],
    ['company-profile', 'კომპანიის პროფილი — Studio Apex'],
    ['team-builder', 'შენთვის აწყობილი გუნდი'],
  ]},
  { phase: 'მოლაპარაკება და დაკვეთა', en: 'Negotiation & Order', items: [
    ['ai-negotiation', 'AI მოლაპარაკება'],
    ['final-offer', 'საბოლოო შეთავაზება'],
    ['order-created', 'დაკვეთა შეიქმნა'],
    ['team-chat', 'გუნდის ჩატი'],
  ]},
  { phase: 'ჩემი დაკვეთები', en: 'My Orders', items: [
    ['my-orders', 'ჩემი დაკვეთები'],
    ['orders-filter', 'დაკვეთების ფილტრი'],
    ['order-detail', 'დაკვეთის დეტალები'],
    ['media', 'მედია'],
    ['media-stream', 'მედია ნაკადი და ვერსიები'],
  ]},
];
