export interface ServiceItem {
  id: number
  name: string
  category: 'Identity' | 'Revenue & Land' | 'Welfare & Pensions' | 'Utilities' | 'Transport'
  department: string
  fee: number
  slaDays: number
  status: 'Instant' | '1-3 Days' | '3-7 Days'
  popular: boolean
  description: string
}

export const CATEGORIES = [
  'All',
  'Identity',
  'Revenue & Land',
  'Welfare & Pensions',
  'Utilities',
  'Transport',
] as const

const SERVICE_NAMES = [
  'Aadhaar Demographic Update',
  'Instant e-PAN Allotment',
  'Passport Renewal Verification',
  'State Domicile & Income Certificate',
  'PM-KISAN Samman Nidhi Status & eKYC',
  'Ayushman Bharat Golden Card Generation',
  'DigiLocker Certified Marks Sheet Fetch',
  'Driving License Renewal & DL Extract',
  'Commercial Electricity Connection Request',
  'Kisan Credit Card (KCC) Application',
  'Senior Citizen Old Age Pension Registry',
  'Property Mutation & Bhulekh ROR Extract',
  'Voter EPIC Card Replacement & Address Update',
  'Udyam Micro-Enterprise Registration',
  'Water Utility Connection Bill Waiver',
  'Pradhan Mantri Awas Yojana (PMAY) Verification',
  'Disability Certificate & UDID Card',
  'Birth & Death Certificate Digitize Service',
  'Vehicle Registration Certificate (RC) Transfer',
  'Solar Rooftop Subsidy Application',
]

const DEPARTMENTS = [
  'UIDAI',
  'Income Tax Dept',
  'Ministry of External Affairs',
  'Revenue & Land Records',
  'Ministry of Agriculture',
  'National Health Authority',
  'Ministry of Electronics & IT',
  'Ministry of Road Transport',
  'State Electricity Board',
  'Ministry of Finance',
]

export const MOCK_SERVICES: ServiceItem[] = Array.from({ length: 1200 }, (_, index) => {
  const nameBase = SERVICE_NAMES[index % SERVICE_NAMES.length]
  const catIndex = index % 5
  const categories: Array<ServiceItem['category']> = [
    'Identity',
    'Revenue & Land',
    'Welfare & Pensions',
    'Utilities',
    'Transport',
  ]
  const slaIndex = index % 3
  const slas: Array<ServiceItem['status']> = ['Instant', '1-3 Days', '3-7 Days']
  const dept = DEPARTMENTS[index % DEPARTMENTS.length]

  return {
    id: index + 1,
    name: index < SERVICE_NAMES.length ? nameBase : `${nameBase} (Region Circle ${Math.floor(index / 10) + 1})`,
    category: categories[catIndex],
    department: dept,
    fee: (index % 5) * 25,
    slaDays: (index % 5) + 1,
    status: slas[slaIndex],
    popular: index % 7 === 0 || index < 6,
    description: `Official digital kiosk counter application for ${nameBase} facilitated under National e-Governance standards.`,
  }
})
