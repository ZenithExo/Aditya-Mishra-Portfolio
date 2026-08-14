"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, ExternalLink, ShieldCheck, BookOpen } from "lucide-react"

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const educationData = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      school: "Lovely Professional University (LPU)",
      year: "2022 - 2025",
      details: "CGPA – 7.12",
      badge: "UNDERGRADUATE DEGREE",
      color: "#00f0ff",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      school: "Guru Nanak Public School",
      year: "2019 - 2021",
      details: "Grade score – 64%",
      badge: "SENIOR SECONDARY",
      color: "#ff007f",
    },
  ]

  const achievementsData = [
    {
      title: "Web Development Certification",
      badge: "Udemy Certified",
      description: "Certified professional in Web Development (HTML, CSS, JS, responsive layout architecture).",
      link: "https://badges.parchment.com/public/assertions/8lhwUVdqQwaQymnbUVtxZA?identity__email=hitenagar@gmail.com",
      accent: "#00f0ff",
    },
    {
      title: "What is Data Science",
      badge: "IBM Certified",
      description:
        "Certified in Data Science & Machine Learning fundamentals offered by IBM via Coursera.",
      link: "https://coursera.org/share/96481e984f7a0c6ddef11962704f11df",
      accent: "#9d4edd",
    },
  ]

  return (
    <section id="education" ref={ref} className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-widest mb-2">
            <GraduationCap size={14} />
            <span>SYS.ACADEMICS // ACADEMICS_AND_CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION & <span className="neon-text-pink">ACHIEVEMENTS</span>
            <span className="text-[#00f0ff] text-2xl ml-3 font-mono">/ 学歴</span>
          </h2>
        </motion.div>

        {/* Certifications & Achievements Matrix */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-mono text-[#00f0ff] flex items-center gap-2">
            <Award size={20} /> CERTIFIED_CREDENTIALS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievementsData.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="hud-box p-6 rounded-xl block space-y-4 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/60 border"
                    style={{ borderColor: item.accent, color: item.accent }}
                  >
                    {item.badge}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#00f0ff] transition-colors" />
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                  {item.title} <ShieldCheck size={18} className="text-[#00f0ff]" />
                </h4>

                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="pt-2 text-[11px] font-mono text-[#ff007f] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  VERIFY CREDENTIAL LINK ➔
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Academic Degrees Timeline */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-mono text-[#ff007f] flex items-center gap-2">
            <BookOpen size={20} /> ACADEMIC_QUALIFICATIONS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="hud-box p-6 rounded-xl space-y-3 bg-[#090b1c]"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span
                    className="px-2.5 py-0.5 rounded bg-black/60 border font-bold"
                    style={{ borderColor: edu.color, color: edu.color }}
                  >
                    {edu.badge}
                  </span>
                  <span className="text-gray-400">{edu.year}</span>
                </div>

                <h4 className="text-lg font-bold text-white font-sans">{edu.degree}</h4>
                <p className="text-sm text-gray-300 font-sans">{edu.school}</p>

                <div className="pt-2 font-mono text-xs font-bold text-[#00f0ff]">
                  SCORE: {edu.details}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}