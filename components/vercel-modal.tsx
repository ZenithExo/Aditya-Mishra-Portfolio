"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Globe, Terminal, Check, ExternalLink, Zap, Rocket } from "lucide-react"

interface VercelModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VercelModal({ isOpen, onClose }: VercelModalProps) {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText("npx vercel --prod")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Pre-filled Vercel Deploy URL pointing to GitHub repo or Vercel dashboard import
  const vercelDeployUrl =
    "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSSSparda%2FDigital-portfolio"

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="hud-box max-w-2xl w-full p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden bg-[#0a0c1b] border border-[#00f0ff]/50"
          >
            {/* Header glow bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#9d4edd]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#ff007f] transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <X size={20} />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff]">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-wider text-white flex items-center gap-2">
                  VERCEL_DEPLOYMENT // LINK_GUIDE
                </h3>
                <p className="text-xs font-mono text-[#00f0ff]">
                  [STATUS: READY FOR LIVE DEPLOYMENT]
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-gray-300 font-sans text-sm">
              {/* Option 1: Direct 1-Click Deploy */}
              <div className="p-4 rounded-lg bg-[#090b18] border border-gray-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white font-mono flex items-center gap-2">
                    <Rocket size={16} className="text-[#ff007f]" />
                    Option 1: Deploy to Vercel (1-Click)
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#ff007f]/20 text-[#ff007f] font-mono">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Deploy directly to your Vercel account instantly with zero manual configuration.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={vercelDeployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn-pink px-5 py-2.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2"
                  >
                    <Globe size={16} />
                    Deploy to Vercel Now
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://vercel.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg border border-gray-700 text-gray-300 hover:border-gray-500 text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    Vercel Dashboard
                  </a>
                </div>
              </div>

              {/* Option 2: Command Line CLI Deployment */}
              <div className="p-4 rounded-lg bg-[#090b18] border border-gray-800 space-y-3">
                <h4 className="font-bold text-white font-mono flex items-center gap-2">
                  <Terminal size={16} className="text-[#00f0ff]" />
                  Option 2: Deploy via Vercel CLI
                </h4>
                <p className="text-xs text-gray-400">
                  Run this command inside your terminal in the project directory:
                </p>
                <div className="flex items-center justify-between bg-[#050610] p-3 rounded border border-gray-800 font-mono text-xs text-[#00f0ff]">
                  <code>npx vercel --prod</code>
                  <button
                    onClick={copyCommand}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-white text-[11px] flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-green-400" /> Copied!
                      </>
                    ) : (
                      "Copy"
                    )}
                  </button>
                </div>
              </div>

              {/* Pre-configured details */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
                <div className="p-3 bg-white/5 rounded border border-gray-800">
                  <span className="text-gray-500 block mb-1">FRAMEWORK</span>
                  <span className="text-[#00f0ff] font-bold">Next.js 16 (App Router)</span>
                </div>
                <div className="p-3 bg-white/5 rounded border border-gray-800">
                  <span className="text-gray-500 block mb-1">BUILD COMMAND</span>
                  <span className="text-[#ff007f] font-bold">npm run build</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>SYSTEM ID: VERCEL_SYS_OK</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                Close HUD
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
