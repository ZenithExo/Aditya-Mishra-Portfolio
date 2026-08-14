"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ExternalLink, Zap } from "lucide-react"
import CyberSound from "@/components/cyber-sound"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  onOpenVercelModal?: () => void
}

export default function Navigation({
  activeSection,
  setActiveSection,
  onOpenVercelModal,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ["About", "Skills", "Projects", "Experience", "Education", "Contact"]

  const handleNavClick = (id: string) => {
    setActiveSection(id.toLowerCase())
    setIsOpen(false)
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#060713]/85 border-b border-[#00f0ff]/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Cyber Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded bg-[#00f0ff]/10 border border-[#00f0ff] flex items-center justify-center text-[#00f0ff] font-mono font-bold text-lg group-hover:bg-[#00f0ff] group-hover:text-[#060713] transition-all duration-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-sm tracking-widest text-white group-hover:text-[#00f0ff] transition-colors">
                ADITYA<span className="text-[#ff007f]">.DEV</span>
              </span>
              <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-200">
                アディティヤ // GAME_DEV
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Cyber Nav Menu */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          {navItems.map((item) => {
            const itemId = item.toLowerCase()
            const isActive = activeSection === itemId
            return (
              <button
                key={item}
                onClick={() => handleNavClick(itemId)}
                className={`relative py-1.5 px-2 transition-all duration-200 uppercase tracking-wider flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#00f0ff] font-bold"
                    : "text-gray-300 hover:text-[#00f0ff]"
                }`}
              >
                <span className="text-[#ff007f] text-[10px] opacity-75">▸</span>
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#ff007f] shadow-[0_0_8px_#00f0ff]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Right Tools & Deploy Launcher */}
        <div className="flex items-center gap-3">
          {/* Cyber Audio Ambient Toggle */}
          <CyberSound />

          {/* Vercel Link Button */}
          {onOpenVercelModal && (
            <button
              onClick={onOpenVercelModal}
              className="hud-box px-3 py-1.5 rounded text-xs font-mono font-semibold text-white border border-[#ff007f]/50 hover:border-[#ff007f] bg-[#ff007f]/10 hover:bg-[#ff007f] hover:text-white transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,0,127,0.3)]"
            >
              <Zap size={14} className="text-[#ff007f] group-hover:text-white animate-pulse" />
              <span className="hidden sm:inline">VERCEL LINK</span>
              <ExternalLink size={12} />
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#00f0ff] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Cyber Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070919] border-b border-[#00f0ff]/30 px-6 py-4 font-mono text-sm space-y-3"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-300 hover:text-[#00f0ff] transition-colors border-b border-gray-800/60"
              >
                <span className="text-[#ff007f] mr-2">SYS //</span>
                {item.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}