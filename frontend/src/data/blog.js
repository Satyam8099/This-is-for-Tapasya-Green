export const BLOG_POSTS = [
  {
    slug: "scaling-rmg-to-saizoner",
    category: "Engineering",
    title: "Scaling from an RMG to a Saizoner: Getting the endpoint right.",
    excerpt:
      "Endpoint drift is the number-one reason pilot batches don't translate to commercial output. Here's how we scope scale-up on the Saizoner platform.",
    author: "Prochem Tapasya Engineering",
    date: "2026-04-18",
    readTime: "6 min read",
    hero: "machinery_1",
    body: [
      { type: "p", text: "Wet granulation is deceptively simple until scale-up. A 25 L pilot batch that behaved perfectly at 220 rpm impeller speed rarely reproduces on a 400 L Saizoner without recalibration. Endpoint torque, impeller tip speed and binder-addition profile all change with vessel geometry — and the process is more sensitive than most teams plan for." },
      { type: "h", text: "Three levers that matter more than speed" },
      { type: "p", text: "In the Saizoner geometry, the primary levers are (1) impeller tip speed rather than absolute rpm, (2) Froude number matching between vessel sizes and (3) binder-addition rate normalised to bowl working volume. Getting these three right removes 80 % of the scale-up variance we see in customer trials at our pilot lab." },
      { type: "h", text: "Instrument the batch, don't guess it" },
      { type: "p", text: "We recommend running scale-up batches with live torque and load-cell logging enabled from the start. It costs nothing, but it means the operator sees the same endpoint curve every batch — and the process team has data to defend during a regulator inspection." },
      { type: "list", items: [
        "Match impeller tip speed, not rpm",
        "Normalise binder rate to working volume, not batch mass",
        "Log torque and load cells from batch one",
        "Freeze the recipe once three consecutive PSD reports overlap",
      ] },
    ],
  },
  {
    slug: "fbd-efficiency-levers",
    category: "Operations",
    title: "Fluid bed drying efficiency: five levers most plant managers miss.",
    excerpt:
      "FBDs are the biggest energy consumers on many solid dosage lines. Small changes to filter cleaning, damper trim and air-flow profile can cut cycle times by 15 to 20 %.",
    author: "Prochem Tapasya Process Team",
    date: "2026-03-05",
    readTime: "5 min read",
    hero: "plant_1",
    body: [
      { type: "p", text: "A poorly tuned FBD is the single largest source of avoidable energy cost on a granulation line. In audits we've run across 40+ plants, the average cycle can be shortened by 15 – 20 % — without any capex — by adjusting five operating variables that most sites overlook." },
      { type: "h", text: "The five levers" },
      { type: "list", items: [
        "Filter shake frequency — over-shaking loads the bag, under-shaking chokes the bed",
        "Inlet damper trim — most FBDs run 8 – 12 % over-drawn against nameplate",
        "Bed temperature vs. product temperature — you're likely controlling the wrong one",
        "Batch mass vs. bowl volume — 60 – 70 % fill is the sweet spot for most granules",
        "Bag cleaning cycle — schedule it on turbidity, not on operator judgement",
      ] },
      { type: "p", text: "Small, evidence-based changes here also feed into your OEE story — cycle time reductions of even 10 % typically pay back the instrumentation investment inside a quarter." },
    ],
  },
  {
    slug: "prepping-for-usfda-audit",
    category: "Regulatory",
    title: "Preparing for a USFDA audit: what to fix before the inspector arrives.",
    excerpt:
      "Most audit findings on solid dosage lines are documentation gaps, not machine defects. Here's a practical, machine-by-machine checklist.",
    author: "Prochem Tapasya Quality",
    date: "2026-01-22",
    readTime: "7 min read",
    hero: "laboratory_1",
    body: [
      { type: "p", text: "Ninety percent of 483 observations on solid-dosage machines come from documentation gaps and not from machine performance. If you've been notified of an audit, focus your last 30 days on paperwork, calibration currency and change-control traceability." },
      { type: "h", text: "Machine-side items to close before the walkthrough" },
      { type: "list", items: [
        "Verify calibration currency on every load cell, temperature probe and RTD",
        "Print out the last 20 batch reports and check operator sign-offs are intact",
        "Confirm audit trail on the PLC / HMI is enabled and not overwritten",
        "Cross-reference URS to as-built P&IDs — flag any changes",
        "Ensure spare-parts inventory matches the change-control log",
      ] },
      { type: "h", text: "What we're often asked to help with" },
      { type: "p", text: "Retrofitting older machines to 21 CFR Part 11 — audit trail, user roles, e-signature — is one of the most common upgrade requests we get in the last four weeks before an audit. It's an increasingly manageable retrofit on Siemens or Allen-Bradley control platforms, but it needs planning, not panic." },
    ],
  },
];

export const NEWS_ITEMS = [
  {
    date: "2026-05-12",
    tag: "Milestone",
    title: "500th Saizoner delivered.",
    body: "Our 500th Saizoner high-shear mixer granulator was dispatched this week — this unit joins a solid dosage line in the Middle East.",
  },
  {
    date: "2026-04-02",
    tag: "Facility",
    title: "New pilot suite commissioned.",
    body: "We opened a dedicated 25 L / 100 L pilot suite for customer trials, cutting scale-up study lead-times to under two weeks.",
  },
  {
    date: "2026-02-18",
    tag: "Recognition",
    title: "Featured in Indian Pharma Machinery Report 2026.",
    body: "Prochem Tapasya was ranked among the top three granulation OEMs by installed base in the annual industry report.",
  },
  {
    date: "2025-12-06",
    tag: "Partnership",
    title: "Distribution agreement signed in South East Asia.",
    body: "New regional distribution and service partner appointed to shorten field-service response times across five ASEAN countries.",
  },
];

export const EVENTS = [
  {
    date: "2026-09-08",
    endDate: "2026-09-10",
    tag: "Trade Show",
    title: "CPHI South East Asia 2026",
    venue: "Bangkok, Thailand",
    hall: "Booth F-14",
    body: "Meet our engineering team at CPHI SEA — we'll be showcasing the Saizoner platform and the new pellet-coating suite.",
    cta: "Book a meeting",
  },
  {
    date: "2026-10-22",
    endDate: "2026-10-24",
    tag: "Trade Show",
    title: "P-MEC India 2026",
    venue: "New Delhi, India",
    hall: "Hall 3, Stand B-08",
    body: "Live machine demonstrations across granulation, drying and blending. Technical sessions daily at 11:00 and 15:00.",
    cta: "Add to calendar",
  },
  {
    date: "2026-11-14",
    tag: "Webinar",
    title: "Scale-up strategy for wet granulation.",
    venue: "Online · 60 minutes",
    hall: "Registration required",
    body: "Our senior process engineer walks through Saizoner scale-up methodology — Q&A included.",
    cta: "Register",
  },
];
