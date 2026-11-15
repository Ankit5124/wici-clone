import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, CheckCircle, Shield, CreditCard, User, Hash } from 'lucide-react'
import { useKioskStore } from '@/store/kioskStore'

export const ServiceApplyModal: React.FC = () => {
  const { activeModalService, closeServiceModal, submitApplication } = useKioskStore()

  const [applicantName, setApplicantName] = useState('')
  const [aadhaarNumber, setAadhaarNumber] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  if (!activeModalService) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!applicantName || !aadhaarNumber) return

    submitApplication({
      applicantName,
      aadhaarNumber: `XXXX-XXXX-${aadhaarNumber.slice(-4) || '9999'}`,
      serviceId: activeModalService.id,
      serviceName: activeModalService.name,
      department: activeModalService.department,
      feePaid: activeModalService.fee,
    })

    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setApplicantName('')
      setAadhaarNumber('')
    }, 1500)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl relative"
        >
          <button
            onClick={closeServiceModal}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40"
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-white">Application Dispatched!</h3>
              <p className="text-sm text-slate-400">
                Your request has been routed to the respective department server. Tracking ID created.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {activeModalService.name}
                  </h3>
                  <p className="text-xs text-slate-400">{activeModalService.department}</p>
                </div>
              </div>

              <div className="bg-slate-850/80 p-3 rounded-xl border border-slate-800 mb-5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Government Processing Fee:</span>
                <span className="font-semibold text-emerald-400 text-sm">
                  {activeModalService.fee === 0 ? 'FREE / Nil' : `₹ ${activeModalService.fee}`}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-orange-400" /> Full Legal Citizen Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Verma"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-orange-400" /> Aadhaar / VID Number (12 digits)
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={14}
                    placeholder="XXXX-XXXX-XXXX"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition font-mono"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={closeServiceModal}
                    className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    Submit & Proceed
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
