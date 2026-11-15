import React from 'react'
import { motion } from 'motion/react'
import { MessageSquare, Image as ImageIcon, Mic, Cpu } from 'lucide-react'

export const ResearchHero: React.FC = () => {
  return (
    <section id="top" className="relative pt-24 pb-16 px-6 md:px-8 max-w-[1400px] mx-auto w-full overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5ea 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5ea 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Floating Interactive Visual Mosaic */}
      <div className="relative min-h-[480px] md:min-h-[540px] flex items-center justify-center">
        {/* Mosaic Item 1: Top-Center Photo (Computer workstation) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute -top-4 md:top-2 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-lg border border-[#e5e5ea] z-10 hidden sm:block"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
            alt="Engineer researching systems"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Mosaic Item 2: Far-Left Glowing Pixel Matrix Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute left-2 md:left-8 top-12 w-28 sm:w-36 h-28 sm:h-36 rounded-2xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] p-3 shadow-xl border border-indigo-400/20 flex flex-col justify-between hidden md:flex"
        >
          <div className="grid grid-cols-4 gap-1.5 opacity-80">
            <span className="w-2.5 h-2.5 rounded bg-indigo-300" />
            <span className="w-2.5 h-2.5 rounded bg-indigo-200" />
            <span className="w-2.5 h-2.5 rounded bg-white/40" />
            <span className="w-2.5 h-2.5 rounded bg-indigo-300" />
            <span className="w-2.5 h-2.5 rounded bg-white/20" />
            <span className="w-2.5 h-2.5 rounded bg-transparent" />
            <span className="w-2.5 h-2.5 rounded bg-transparent" />
            <span className="w-2.5 h-2.5 rounded bg-indigo-400" />
            <span className="w-2.5 h-2.5 rounded bg-indigo-200" />
            <span className="w-2.5 h-2.5 rounded bg-transparent" />
            <span className="w-2.5 h-2.5 rounded bg-transparent" />
            <span className="w-2.5 h-2.5 rounded bg-white/30" />
            <span className="w-2.5 h-2.5 rounded bg-white/40" />
            <span className="w-2.5 h-2.5 rounded bg-indigo-300" />
            <span className="w-2.5 h-2.5 rounded bg-indigo-200" />
            <span className="w-2.5 h-2.5 rounded bg-white/20" />
          </div>
          <div className="text-[10px] font-mono text-indigo-200 tracking-wider">GPU AIRLINK</div>
        </motion.div>

        {/* Mosaic Item 3: Center-Left Wireframe Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute left-6 md:left-24 bottom-12 w-28 sm:w-36 h-28 sm:h-36 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-lg border border-[#e5e5ea] flex flex-col items-center justify-center hidden sm:flex"
        >
          <div className="relative w-16 h-12 flex items-center justify-center">
            <div className="absolute inset-0 border border-indigo-400/60 rounded-md transform -skew-y-6" />
            <div className="absolute inset-0 border border-indigo-500/80 rounded-md transform translate-x-2 -translate-y-1 -skew-y-6" />
            <div className="absolute inset-0 border border-purple-600 rounded-md transform translate-x-4 -translate-y-2 -skew-y-6 bg-purple-500/10" />
          </div>
          <span className="mt-3 text-[10px] font-mono text-[#6e6e73]">TENSOR PIPELINE</span>
        </motion.div>

        {/* Mosaic Item 4: Top Code Snippet Card */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="absolute right-4 md:right-32 top-4 w-60 sm:w-72 p-3.5 rounded-xl bg-white/90 backdrop-blur-md shadow-md border border-[#e5e5ea] font-mono text-[11px] text-[#48484a] hidden lg:block"
        >
          <div className="text-[#8e8e93] mb-1"># Python SDK · WiCi One</div>
          <div><span className="text-[#af52de]">import</span> torch</div>
          <div><span className="text-[#af52de]">from</span> wici <span className="text-[#af52de]">import</span> WiCi</div>
          <div className="mt-1 text-[#007aff]">gpu = wici.connect()</div>
          <div className="text-[#34c759]">model.to(gpu.device)</div>
        </motion.div>

        {/* Mosaic Item 5: Far-Right Gradient Card (Interaction Pipeline) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="absolute right-2 md:right-8 top-16 w-32 sm:w-40 h-40 sm:h-48 rounded-2xl bg-gradient-to-b from-[#ea580c] via-[#c2410c] to-[#7c2d12] p-3 text-white shadow-xl flex flex-col justify-between hidden md:flex"
        >
          <div className="flex justify-between items-center gap-1">
            <div className="p-1.5 rounded bg-white/15"><MessageSquare className="w-3.5 h-3.5" /></div>
            <div className="p-1.5 rounded bg-white/15"><ImageIcon className="w-3.5 h-3.5" /></div>
            <div className="p-1.5 rounded bg-white/15"><Mic className="w-3.5 h-3.5" /></div>
          </div>
          <div className="h-12 w-full flex items-center justify-center">
            <div className="w-0.5 h-8 bg-white/30 relative">
              <span className="absolute bottom-0 -left-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            </div>
          </div>
          <div className="p-2 rounded-lg bg-white/10 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-orange-200" />
            <span className="text-[10px] font-mono leading-none">LOCAL ENGINE</span>
          </div>
        </motion.div>

        {/* Mosaic Item 6: Right Photo (Developer working) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute right-8 md:right-28 bottom-8 w-32 sm:w-44 h-36 sm:h-48 rounded-2xl overflow-hidden shadow-xl border border-[#e5e5ea] z-10 hidden sm:block"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
            alt="Researcher in lab"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Mosaic Item 7: Center Bottom Fluid Wave Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-16 sm:h-20 rounded-full bg-gradient-to-r from-[#18181b] via-[#4338ca] to-[#18181b] p-1 shadow-2xl flex items-center justify-center border border-indigo-500/30 hidden sm:flex"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent flex items-center justify-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-indigo-200">
              InferSSD STREAM
            </span>
          </div>
        </motion.div>

        {/* Center Main Headline */}
        <div className="relative z-20 text-center max-w-3xl px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(36px,5.5vw,76px)] font-bold text-[#1d1d1f] tracking-tight leading-[1.06]"
          >
            Systems for <br className="hidden sm:inline" />
            local frontier AI.
          </motion.h1>
        </div>
      </div>

      {/* Hero Subtitle Statement */}
      <div className="mt-8 text-center max-w-2xl mx-auto">
        <p className="text-[clamp(16px,1.8vw,20px)] text-[#6e6e73] font-normal leading-relaxed">
          WiCi builds systems that bring AI compute closer to people, from sharing a nearby GPU to running large models on consumer hardware and supporting real-time interaction.
        </p>
      </div>
    </section>
  )
}
