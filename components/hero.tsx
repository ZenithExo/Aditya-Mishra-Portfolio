"use client"

import { motion } from "framer-motion"
import { ArrowDown, Gamepad2, Terminal, Rocket, Compass, Layout } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden cyber-grid-bg">
      {/* Glow Ambient Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* System Status HUD Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <Gamepad2 size={14} className="text-[#00f0ff]" />
              <span>SYS.ROLE :: GAME DESIGNER & WORLD ARCHITECT</span>
            </motion.div>

            {/* Katakana Cyber Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <div className="text-xs font-mono tracking-[0.3em] text-[#ff007f] uppercase">
                アディティヤ・ミシュラ // GAME DESIGN PORTFOLIO 2026
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ffffff] tracking-tight leading-none font-sans">
                HI, I'M{" "}
                <span className="inline-block bg-gradient-to-r from-[#00f0ff] via-[#9d4edd] to-[#ff007f] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                  ADITYA
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Bio summary tailored to Game Designer */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed max-w-2xl"
            >
              Designing immersive gameplay mechanics, combat pacing, level layouts, and interactive player experiences powered by <span className="text-[#00f0ff] font-semibold">Unreal Engine 5</span> & <span className="text-[#ff007f] font-semibold">Unity</span>.
            </motion.p>

            {/* Cyber Game Designer Skill Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2 font-mono text-xs"
            >
              {[
                "Level Design",
                "Gameplay Mechanics",
                "Unreal Engine 5",
                "Unity Engine",
                "World Building",
                "3D & Blender",
                "Prototyping",
                "Combat Pacing",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-[#0d1026] border border-gray-800 text-gray-300 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all cursor-default"
                >
                  <span className="text-[#ff007f] mr-1">#</span>
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs sm:text-sm"
            >
              <button
                onClick={() => setActiveSection("projects")}
                className="neon-btn-cyan px-7 py-3.5 rounded-lg font-bold flex items-center gap-2 tracking-wider uppercase group cursor-pointer"
              >
                <Rocket size={16} className="group-hover:translate-x-1 transition-transform" />
                EXPLORE DESIGNS
              </button>

              <button
                onClick={() => setActiveSection("contact")}
                className="neon-btn-pink px-7 py-3.5 rounded-lg font-bold flex items-center gap-2 tracking-wider uppercase cursor-pointer"
              >
                <Terminal size={16} />
                CONTACT SYSTEM
              </button>
            </motion.div>
          </div>

          {/* Right Column - Holographic Avatar & Stats Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Energy Ring 1 - Cyan Rotating Outer Shield */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-[#00f0ff]/50 animate-[spin_20s_linear_infinite]" />

              {/* Energy Ring 2 - Magenta Counter-Rotating Inner Shield */}
              <div className="absolute -inset-3 rounded-full border border-dotted border-[#ff007f]/50 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Main Cyber HUD Frame */}
              <div className="hud-box relative w-72 h-72 sm:w-88 sm:h-88 rounded-2xl overflow-hidden p-2 bg-[#090b1c]/90 shadow-[0_0_35px_rgba(0,240,255,0.25)]">
                {/* Profile Image with Cyan/Pink Overlay */}
                <div className="relative w-full h-full rounded-xl overflow-hidden group">
                  <Image
                    src="/profile.jpg"
                    alt="Aditya Kumar Mishra - Cyber Game Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Neon Cyan & Magenta Ambient Shimmer Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060713] via-transparent to-[#00f0ff]/10 opacity-75 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Target Reticle Overlay */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-[#00f0ff] bg-black/60 px-1.5 py-0.5 rounded border border-[#00f0ff]/30">
                    TARGET: INSOMNIAC
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#ff007f] bg-black/60 px-1.5 py-0.5 rounded border border-[#ff007f]/30">
                    LOC: ODISHA // LPU
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Status Online */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-md bg-[#00f0ff] text-black font-mono font-extrabold text-xs shadow-[0_0_15px_#00f0ff] flex items-center gap-1.5"
              >
                <Compass size={14} />
                GAME_DESIGNER_ACTIVE
              </motion.div>

              {/* Floating Badge 2 - Experience Log */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-md bg-[#ff007f] text-white font-mono font-extrabold text-xs shadow-[0_0_15px_#ff007f] flex items-center gap-1.5"
              >
                <Layout size={14} />
                EX-GAMELOFT QA & DESIGN
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* HUD Data Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-center"
        >
          <div className="hud-box p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-[#00f0ff]">LEVEL DESIGN</div>
            <div className="text-[11px] text-gray-400">UNREAL & UNITY BLOCKOUTS</div>
          </div>
          <div className="hud-box p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-[#ff007f]">GAMELOFT</div>
            <div className="text-[11px] text-gray-400">LEVEL TESTING & DESIGN</div>
          </div>
          <div className="hud-box p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-[#9d4edd]">BCA GRADUATE</div>
            <div className="text-[11px] text-gray-400">CGPA 7.12 // LPU</div>
          </div>
          <div className="hud-box p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-[#ffe600]">2+ DESIGN TITLES</div>
            <div className="text-[11px] text-gray-400">TRON & NEON-CATCHER</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setActiveSection("about")}
            className="text-[#00f0ff] hover:text-[#ff007f] transition-colors p-2 cursor-pointer"
          >
            <ArrowDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}