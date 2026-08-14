"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Terminal, ExternalLink, Zap } from "lucide-react"

interface ContactProps {
  onOpenVercelModal?: () => void
}

export default function Contact({ onOpenVercelModal }: ContactProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
    setFormData({ name: "", email: "", message: "" })
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "EMAIL_COMM_LINK",
      value: "adityamishra7652@gmail.com",
      action: "mailto:adityamishra7652@gmail.com",
      accent: "#00f0ff",
    },
    {
      icon: Phone,
      label: "PHONE_COMM_LINK",
      value: "+91 7655806583",
      action: "tel:7655806583",
      accent: "#ff007f",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/blaze-exodus",
      accent: "#00f0ff",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      link: "https://github.com/SSSparda",
      accent: "#ff007f",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
            <Terminal size={14} />
            <span>SYS.TRANSMISSION // INITIALIZE_COMMUNICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GET IN <span className="neon-text-pink">TOUCH</span>
            <span className="text-[#00f0ff] text-2xl ml-3 font-mono">/ コンタクト</span>
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl mx-auto">
            Open for game development roles, AAA studio opportunities, level design projects, and collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Links & Copy Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <div
                    key={method.label}
                    className="hud-box p-6 rounded-xl space-y-3 bg-[#090b1c]"
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-gray-400">
                      <span className="flex items-center gap-2" style={{ color: method.accent }}>
                        <Icon size={16} />
                        {method.label}
                      </span>
                      <button
                        onClick={() => copyToClipboard(method.value, method.label)}
                        className="hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedText === method.label ? (
                          <span className="text-green-400 font-bold flex items-center gap-1">
                            <Check size={12} /> COPIED
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy size={12} /> Copy
                          </span>
                        )}
                      </button>
                    </div>

                    <a
                      href={method.action}
                      className="text-lg font-bold text-white font-mono block hover:text-[#00f0ff] transition-colors truncate"
                    >
                      {method.value}
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="hud-box p-6 rounded-xl space-y-4 bg-[#090b1c]">
              <div className="text-xs font-mono text-gray-400 uppercase">SOCIAL_MATRIX</div>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-black/40 border border-gray-800 hover:border-[#00f0ff] text-gray-200 hover:text-[#00f0ff] font-mono text-xs flex items-center justify-between transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <Icon size={16} />
                        {social.label.split(" ")[0]}
                      </span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="hud-box p-6 sm:p-8 rounded-xl bg-[#090b1c] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 font-mono text-xs text-[#00f0ff]">
                <span className="flex items-center gap-2">
                  <Terminal size={14} /> TRANSMIT_DIRECT_MESSAGE
                </span>
                <span>STATUS: ENCRYPTED</span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff] text-center space-y-2">
                  <div className="text-[#00f0ff] font-mono font-bold text-lg">
                    [TRANSMISSION SUCCESSFUL]
                  </div>
                  <p className="text-xs font-sans text-gray-300">
                    Message logged into system queue. Aditya will respond to your transmission shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-gray-400 mb-1">SENDER_NAME:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-black/60 border border-gray-800 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">RETURN_COMM_ADDRESS (EMAIL):</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@insomniacgames.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-black/60 border border-gray-800 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">TRANSMISSION_PAYLOAD (MESSAGE):</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Type your transmission message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-black/60 border border-gray-800 text-white focus:border-[#00f0ff] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="neon-btn-pink w-full py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                  >
                    <Send size={16} />
                    TRANSMIT MESSAGE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Banner with Vercel Deployment Action */}
        <div className="hud-box p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#00f0ff]/10 via-[#060713] to-[#ff007f]/10 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-mono font-bold text-lg flex items-center gap-2">
              <Zap className="text-[#ffe600]" size={20} /> VERCEL DEPLOYMENT LINK & DASHBOARD
            </div>
            <p className="text-xs text-gray-400 font-sans mt-1">
              Want to host or update this cyberpunk portfolio live on Vercel? Open the Vercel Link modal for 1-click deployment.
            </p>
          </div>

          {onOpenVercelModal && (
            <button
              onClick={onOpenVercelModal}
              className="neon-btn-cyan px-6 py-3 rounded-lg font-mono text-xs font-bold shrink-0 flex items-center gap-2"
            >
              LAUNCH VERCEL DEPLOYMENT
              <ExternalLink size={14} />
            </button>
          )}
        </div>

        {/* System Copyright Footer */}
        <div className="pt-8 border-t border-gray-800 text-center font-mono text-xs text-gray-500 space-y-1">
          <p>© 2026 ADITYA KUMAR MISHRA. ALL RIGHTS RESERVED.</p>
          <p className="text-[10px] text-gray-600">
            SYSTEM ARCHITECTURE: NEXT.JS 16 // TAILWIND CSS // FRAMER MOTION // VERCEL DEPLOY
          </p>
        </div>
      </div>
    </section>
  )
}