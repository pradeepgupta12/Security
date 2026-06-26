// Centralized company information and site-wide singletons.
// Edit company name, contact details, social links, stats and marketing
// blurbs here — they are consumed across the whole site via lib/data.js.

export const company = {
  name: "LFM Group Security Management Pvt. Ltd.",
  shortName: "LFM Group Security",
  tagline: "Aapki Suraksha Mein Sadaa",
  phone: ["+022-62320001/02", "+040-23114922/23116922", "+0522-4337001/02"],
  mobileSales: [
    "+918877119973, 8877119974",
    "+918886662321, 9820009277",
    "+916390006001, 9966062100"
  ],
  email: "service@LFMgroupindia.com",
  emailsRegional: {
    mumbai: "service@LFMgroupindia.com",
    hyderabad: "service.hyd@LFMgroupindia.com",
    lucknow: "lucknow@LFMgroupindia.com"
  },
  hours: "Mon – Sat: 9AM – 7PM",
  registeredAddress: "121/620/RD, W BLOCK, TULSI VIHAR COLONY, KESHAV NAGAR, KANPUR (U.P.) 208024",
  corporateAddress: "1005, Corporate Annexe, Near Udyog Bhawan, Sonawala Road, Goregaon (East), Mumbai - 400 063",
  regionalOffices: {
    mumbai: {
      zone: "West Zone (Corporate Office)",
      address: "1005, Corporate Annexe, Near Udyog Bhawan, Sonawala Road, Goregaon (East), Mumbai - 400 063",
      phone: "+022-62320001/02",
      sales: "+918877119973, 8877119974",
      email: "service@LFMgroupindia.com",
      branches: "Maharashtra, Goa, Gujarat, M.P"
    },
    hyderabad: {
      zone: "South Zone",
      address: "Plot #101, R.K Plaza, Vithalrao Nagar, Madhapur, Hyderabad - 500 081",
      phone: "+040-23114922/23116922",
      sales: "+918886662321, 9820009277",
      email: "service.hyd@LFMgroupindia.com",
      branches: "Telangana, A.P, Tamilnadu, Karnataka, Orissa, Puduchery"
    },
    lucknow: {
      zone: "North Zone",
      address: "10/119 Indira Nagar, Lucknow - 226016",
      phone: "+0522-4337001/02",
      sales: "+916390006001, 9966062100",
      email: "lucknow@LFMgroupindia.com",
      branches: "U.P, Uttrakhand, Delhi, Bihar, Jharkhand, WB"
    }
  },
  social: {
    facebook: "https://facebook.com/LFMgroupsecurity",
    twitter: "https://twitter.com/LFMgroupsecurity",
    instagram: "https://instagram.com/LFMgroupsecurity",
    youtube: "https://youtube.com/@LFMgroupsecurity",
    linkedin: "https://linkedin.com/company/LFMgroupsecurity",
  },
};

export const stats = [
  { value: 8, suffix: "+", label: "Years in Business" },
  { value: 390, suffix: "+", label: "Happy Clients" },
  { value: 11000, suffix: "+", label: "Trained Workers" },
  { value: 6000, suffix: "+", label: "Deal Assigned" },
];

export const hero = {
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  fallbackImage: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=1920&q=80",
  title: "Security Solutions for a Safer Tomorrow",
  subtitle: "India's Most Trusted Security Management Company — ISO Certified & PSARA Licensed",
};

export const whatsapp = {
  number: "+919800891700",
  message: "Hello, I want to enquire about LFM security services.",
};

export const ourProfile = {
  description: "LFM Group is a reputable and professional security solutions provider, dedicated to safeguarding our clients' assets, properties, and personnel. With a team of highly trained and skilled security personnel, advanced technology, and a customer-centric approach, we have earned a strong reputation for excellence in the security industry.",
};

export const LFMGroup = [
  "Saksham Services", "SSL Makeover Studio", "LFM Crystals",
  "LFM Security", "The Curious Plate", "LFM Foundation", "VSRA Infra Project",
];

export const securityGuards = {
  imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1400&q=80",
};

export const associations = [
  { name: "GST Registered", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" },
  { name: "ISO 9001:2015", logo: "https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.png" },
  { name: "PSARA Licensed", logo: "https://eaglesecurity.co.in/wp-content/uploads/2026/02/psara-logo-300x300.png" },
  { name: "MSME Certified", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MSME_Logo_India.svg/3840px-MSME_Logo_India.svg.png" },
  { name: "ESIC Registered", logo: "https://upload.wikimedia.org/wikipedia/en/7/77/Employee_State_Insurance_Corporation_Logo.png" },
];

export const whyChooseUs = [
  { icon: "👥", title: "24/7 Support" },
  { icon: "🎯", title: "Trained Security Guards" },
  { icon: "🚗", title: "Skilled Supervisor" },
  { icon: "🔧", title: "Latest Equipment" },
  { icon: "😊", title: "100% Happy Clients" },
  { icon: "📋", title: "All Licensed Available" },
];

export const presence = {
  stats: [
    { value: 11000, suffix: "+", label: "Trained Workers" },
    { value: 65, suffix: "+", label: "Qualified Employees" },
    { value: 5500, suffix: "+", label: "Deal Assigned" },
    { value: 390, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Branch Offices" },
  ],
  states: [
    "Uttar Pradesh", "Delhi/NCR", "Punjab", "Haryana", "Rajasthan",
    "Gujarat", "Maharashtra", "Telangana", "Andhra Pradesh", "Tamil Nadu",
    "West Bengal", "Jharkhand", "Chhattisgarh", "Madhya Pradesh", "Assam",
    "Himachal Pradesh", "Uttarakhand",
  ],
};

export const footer = {
  description: "Our company was established in 2017 as LFM Security Management Services. Due to total devotion, hard work, and sincerity of purpose, the company took long strides in its growth and development.",
  copyright: "©  LFM GroupSecurity & Facility Management  All Rights Reserved.",
};

export default company;
