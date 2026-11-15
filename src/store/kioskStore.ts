import { create } from 'zustand'

export type LanguageCode = 'en' | 'hi' | 'bn' | 'te' | 'ta'

export interface CitizenApplication {
  id: string
  applicantName: string
  aadhaarNumber: string
  serviceId: number
  serviceName: string
  department: string
  status: 'Under Review' | 'Verified' | 'Dispatched' | 'Requires Action'
  appliedAt: string
  feePaid: number
}

interface KioskState {
  language: LanguageCode
  selectedCategory: string
  searchQuery: string
  applications: CitizenApplication[]
  activeModalService: null | {
    id: number
    name: string
    department: string
    fee: number
  }
  setLanguage: (lang: LanguageCode) => void
  setSelectedCategory: (cat: string) => void
  setSearchQuery: (query: string) => void
  openServiceModal: (service: { id: number; name: string; department: string; fee: number }) => void
  closeServiceModal: () => void
  submitApplication: (app: Omit<CitizenApplication, 'id' | 'appliedAt' | 'status'>) => void
}

const initialApplications: CitizenApplication[] = [
  {
    id: 'APP-98210',
    applicantName: 'Aarav Sharma',
    aadhaarNumber: 'XXXX-XXXX-4819',
    serviceId: 1,
    serviceName: 'Aadhaar Demographic Update',
    department: 'UIDAI',
    status: 'Verified',
    appliedAt: '2026-11-10 10:30 AM',
    feePaid: 50,
  },
  {
    id: 'APP-98211',
    applicantName: 'Priya Patel',
    aadhaarNumber: 'XXXX-XXXX-9102',
    serviceId: 2,
    serviceName: 'Instant e-PAN Allotment',
    department: 'Income Tax Dept',
    status: 'Under Review',
    appliedAt: '2026-11-11 02:15 PM',
    feePaid: 0,
  },
  {
    id: 'APP-98212',
    applicantName: 'Suresh Kumar',
    aadhaarNumber: 'XXXX-XXXX-3341',
    serviceId: 3,
    serviceName: 'Passport Renewal Verification',
    department: 'Ministry of External Affairs',
    status: 'Requires Action',
    appliedAt: '2026-11-12 11:45 AM',
    feePaid: 1500,
  },
  {
    id: 'APP-98213',
    applicantName: 'Meenakshi Iyer',
    aadhaarNumber: 'XXXX-XXXX-7723',
    serviceId: 4,
    serviceName: 'State Domicile & Income Certificate',
    department: 'Revenue & Land Records',
    status: 'Dispatched',
    appliedAt: '2026-11-13 09:20 AM',
    feePaid: 30,
  },
]

export const useKioskStore = create<KioskState>((set) => ({
  language: 'en',
  selectedCategory: 'All',
  searchQuery: '',
  applications: initialApplications,
  activeModalService: null,
  setLanguage: (language) => set({ language }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  openServiceModal: (service) => set({ activeModalService: service }),
  closeServiceModal: () => set({ activeModalService: null }),
  submitApplication: (app) =>
    set((state) => ({
      applications: [
        {
          ...app,
          id: `APP-${Math.floor(10000 + Math.random() * 90000)}`,
          status: 'Under Review',
          appliedAt: 'Just now',
        },
        ...state.applications,
      ],
      activeModalService: null,
    })),
}))
