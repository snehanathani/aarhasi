/**
 * content.config.js
 * ------------------------------------------------------------
 * Single source of truth for company identity, navigation and
 * leadership content. Swap values here — do not hunt through
 * HTML files to update a phone number or legal name.
 *
 * IMPORTANT: Fields left as `null` are UNVERIFIED. The site's
 * render logic (see index.html <script> at bottom) checks for
 * null/empty and simply omits that row — it never prints
 * "pending" text to the public site. Fill a field in here and
 * it will start appearing automatically; leave it null and it
 * stays invisible until confirmed.
 * ------------------------------------------------------------
 */

const companyIdentity = {
  displayName: "Aarhasi Global",           // approved public-facing brand name — safe to use now
  legalName: null,                          // UNVERIFIED — do not publish a guessed Pvt Ltd / LLP suffix
  entityType: null,                         // UNVERIFIED
  registeredAddress: {
    ahmedabad: null,                        // UNVERIFIED — street address not yet supplied
    rajkot: null                            // UNVERIFIED
  },
  gstin: null,                              // UNVERIFIED — never render "GST pending" publicly
  cinOrLlpin: null,                         // UNVERIFIED
  email: null,                              // UNVERIFIED
  phone: null,                              // UNVERIFIED
  website: "https://www.aarhasiglobal.com/",// working domain assumption — confirm before go-live
  whatsappNumber: null,                     // UNVERIFIED — WhatsApp button hides itself until this is set
  locations: [
    { city: "Ahmedabad", country: "India", status: "hq" },
    { city: "Rajkot", country: "India", status: "live" },
    { city: "Dubai", country: "UAE", status: "sister-entity", note: "Operated as Aarhasi World Trade FZCO — separate site" }
  ]
};

// Verified facts only — sourced from Aarhasi_Global_Team_Profile_2026.pptx.
// Each `scope` flag distinguishes an individual's PRIOR employer track
// record from anything achieved at Aarhasi itself. Never merge the two
// in copy without this distinction visible to the reader.
const leadership = [
  {
    name: "Vikramsinh H. Jadeja",
    role: "MD & Director · Founder",
    yearsExperience: 18,
    scope: "aarhasi",
    bio: "Founded Aarhasi in 2023 after 18 years across Welspun India, Orient Abrasive, Big FM Radio, Divya Bhaskar Group and the Poojara Group. Built Aarhasi's Apple distribution business to ₹320 Cr within three years.",
    verifiedStats: [
      { value: "18+", label: "years leadership experience" },
      { value: "₹320 Cr", label: "Apple distribution built at Aarhasi" },
      { value: "3", label: "years to reach that scale" }
    ]
  },
  {
    name: "Bhairav D. Pandhi",
    role: "Strategic Advisor",
    yearsExperience: 28,
    scope: "prior-employer",
    bio: "28 years in distribution. As Director & Partner at Hari OM Mobiles Pvt Ltd — OPPO's Gujarat agent — managed a ₹2,700 Cr business with a 3,500+ person team, 90+ distributors and 6,000+ retail partners. Earlier, 14 years at LG Electronics India as the All-India #1 Branch Manager. Advises Aarhasi's distribution build-out; these figures are his prior-employer track record, not Aarhasi's current scale.",
    verifiedStats: [
      { value: "28", label: "years experience" },
      { value: "6,000+", label: "retail network built (prior role)" }
    ]
  },
  {
    name: "Ramesh Chandragiri",
    role: "National Sales Head",
    yearsExperience: 17,
    scope: "prior-employer",
    bio: "17 years of Apple ecosystem and distribution expertise — 11 years as National Sales Manager at Redington India managing Apple iPhone & iPad distribution nationally, and 4 years at Ingram Micro handling Apple products across Andhra Pradesh. Hyderabad-based, anchoring South India expansion for Aarhasi.",
    verifiedStats: [
      { value: "17", label: "years Apple ecosystem" },
      { value: "11", label: "years, Redington India (prior role)" }
    ]
  }
];

// Planned information architecture. Only `status: "live"` pages exist
// as real files today and should appear in navigation / sitemap.xml.
// Everything else is a documented roadmap item — do NOT create empty
// pages just to fill this list; build a page only once its content
// can be supported by verified facts.
const siteArchitecture = [
  { path: "/", label: "Home", status: "live" },
  { path: "/about.html", label: "About", status: "live" },
  { path: "/solutions.html", label: "Solutions", status: "live" },
  { path: "/leadership.html", label: "Leadership", status: "live" },
  { path: "/contact.html", label: "Contact", status: "live" },
  { path: "/products/apple", label: "Apple / Mobility (dedicated page)", status: "planned" },
  { path: "/industries", label: "Industries (dedicated page)", status: "planned" },
  { path: "/partners", label: "Partner / OEM Ecosystem (dedicated page)", status: "planned" },
  { path: "/insights", label: "Insights", status: "planned" }
];

if (typeof module !== "undefined") {
  module.exports = { companyIdentity, leadership, siteArchitecture };
}
