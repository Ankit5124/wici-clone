import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Clock, CheckCircle2, AlertCircle, ArrowUpRight, Cpu } from 'lucide-react'
import { useKioskStore } from '@/store/kioskStore'

export const Route = createFileRoute('/applications')({
  component: ApplicationsTrackerComponent,
})

function ApplicationsTrackerComponent() {
  const { applications } = useKioskStore()

  const getStatusBadge = (status: (typeof applications)[number]['status']) => {
    switch (status) {
      case 'Verified':
        return {
          icon: CheckCircle2,
          classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        }
      case 'Dispatched':
        return {
          icon: CheckCircle2,
          classes: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
        }
      case 'Requires Action':
        return {
          icon: AlertCircle,
          classes: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
        }
      default:
        return {
          icon: Clock,
          classes: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl glass-panel-glow border border-orange-500/30">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-orange-400" />
            <h2 className="text-2xl font-black text-white tracking-tight">
              Live Application Feed
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              LEDGER SYNCED
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Real-time biometric & document verification tracking across national registries.
          </p>
        </div>

        <Link
          to="/services"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-105 active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all self-start md:self-auto cursor-pointer"
        >
          <span>Submit Request</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {applications.map((app, index) => {
          const badge = getStatusBadge(app.status)
          const BadgeIcon = badge.icon

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col justify-between p-6 rounded-2xl glass-panel hover-scale-card cursor-pointer gap-5"
            >
              <div className="flex flex-row items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="w-fit font-mono text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-lg border border-orange-500/30">
                    {app.id}
                  </span>
                  <h3 className="font-bold text-white text-base leading-snug">{app.serviceName}</h3>
                  <p className="text-xs text-slate-400 font-mono">{app.department}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.classes}`}
                >
                  <BadgeIcon className="w-3.5 h-3.5" />
                  {app.status}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="flex flex-col">
                  <span className="text-slate-500 font-mono text-[11px]">APPLICANT</span>
                  <span className="text-slate-200 font-semibold">{app.applicantName}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 font-mono text-[11px]">AADHAAR / VID</span>
                  <span className="font-mono text-cyan-300">{app.aadhaarNumber}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 font-mono text-[11px]">TIMESTAMP</span>
                  <span className="text-slate-400">{app.appliedAt}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 font-mono text-[11px]">DISBURSEMENT / FEE</span>
                  <span className="text-emerald-400 font-bold font-mono">
                    {app.feePaid === 0 ? 'COMPLIMENTARY' : `₹ ${app.feePaid} SETTLED`}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
