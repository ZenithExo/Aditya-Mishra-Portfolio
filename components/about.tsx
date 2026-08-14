"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Terminal, Target, Cpu, ShieldCheck } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>SYS.FILE // ABOUT_GAME_DESIGNER.LOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ABOUT <span className="neon-text-pink">ME</span>
            <span className="text-[#00f0ff] text-2xl ml-3 font-mono">/ デザイナーについて</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Block - Background & Specialization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="hud-box p-6 sm:p-8 rounded-xl space-y-4 text-gray-300 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 font-mono text-xs text-[#00f0ff]">
                <span className="flex items-center gap-2">
                  <Cpu size={14} /> SYSTEM_BIOGRAPHY
                </span>
                <span>STATUS: ACTIVE DESIGNER</span>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                I am a passionate game designer from Odisha, India, with a strong computer science background and a relentless drive for level architecture, mechanics design, and player engagement.
              </p>

              <p className="text-base leading-relaxed text-gray-300">
                Specializing in designing interactive mechanics, whitebox level prototyping, physics-driven puzzles, and combat pacing in <strong className="text-[#00f0ff]">Unreal Engine 5</strong> and <strong className="text-[#ff007f]">Unity</strong>. I bring game worlds to life through intuitive gameplay flow, spatial storytelling, and playtest balancing.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
                <div className="p-3 bg-black/40 rounded border border-gray-800">
                  <span className="text-gray-500 block">PRIMARY_FOCUS</span>
                  <span className="text-[#00f0ff] font-bold">Level & Gameplay Design</span>
                </div>
                <div className="p-3 bg-black/40 rounded border border-gray-800">
                  <span className="text-gray-500 block">3D PIPELINE</span>
                  <span className="text-[#ff007f] font-bold">Blender & Unreal Engine</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Target Career Objective Insomniac Games */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="hud-box p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#ff007f]/10 via-[#090b1c] to-[#00f0ff]/10 border border-[#ff007f]/50 shadow-[0_0_25px_rgba(255,0,127,0.25)] h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff007f]/20 border border-[#ff007f] text-[#ff007f] font-mono text-xs">
                  <Target size={14} />
                  <span>CAREER_OBJECTIVE // PRIME TARGET</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-sans flex items-center gap-2">
                  INSOMNIAC GAMES <ShieldCheck size={20} className="text-[#00f0ff]" />
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  A highly motivated game designer seeking an opportunity at <strong className="text-white">Insomniac Games</strong> to apply technical expertise in level design, combat pacing, world building, and player psychology. Eager to contribute to designing world-class AAA titles that inspire and thrill players worldwide.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-black/50 border border-[#00f0ff]/30 font-mono text-xs text-[#00f0ff] space-y-2">
                <div className="flex justify-between">
                  <span>TARGET_STUDIO:</span>
                  <span className="font-bold text-white">Insomniac Games</span>
                </div>
                <div className="flex justify-between">
                  <span>TARGET_ROLE:</span>
                  <span className="text-[#ff007f] font-bold">Game Designer / Level Designer</span>
                </div>
                <div className="flex justify-between">
                  <span>READY_STATUS:</span>
                  <span className="text-green-400 font-bold">100% READY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}