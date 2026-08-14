"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldAlert } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const experiences = [
    {
      title: "Game Tester & QA Intern",
      company: "Gameloft",
      period: "Dec 2022 - Sept 2025",
      location: "Hybrid / Remote",
      badge: "VERIFIED INTERNSHIP",
      description:
        "Engineered quality assurance testing, bug discovery, and performance optimization for AAA pre-release game builds at Gameloft.",
      responsibilities: [
        "Tested Unity & C++ game engines for physics glitches, frame drops, and asset collision bugs.",
        "Built basic 3D block-outs and character test environments in Unity engine.",
        "Managed project task workflow, sprint issues, and version control using Trello and dev logs.",
        "Collaborated with core developers to ensure build stability prior to major title deployment.",
      ],
      technologies: ["Gameloft QA Pipeline", "Unity Engine", "C++", "Trello", "Bug Tracking"],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff007f] uppercase tracking-widest mb-2">
            <Briefcase size={14} />
            <span>SYS.TIMELINE // WORK_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WORK <span className="neon-text-cyan">EXPERIENCE</span>
            <span className="text-[#ff007f] text-2xl ml-3 font-mono">/ 職歴</span>
          </h2>
        </motion.div>

        {/* Timeline Log Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#00f0ff]/30 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#060713] border-2 border-[#00f0ff] shadow-[0_0_12px_#00f0ff] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#ff007f] animate-ping" />
              </div>

              {/* Card Container */}
              <div className="hud-box p-6 sm:p-8 rounded-xl space-y-6 bg-[#090b1c]/90">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-800">
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded bg-[#ff007f]/20 border border-[#ff007f]/50 text-[#ff007f] font-mono text-[11px] mb-2 font-bold">
                      {exp.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sans flex items-center gap-2">
                      {exp.title} <span className="text-[#00f0ff] text-base">@ {exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 text-[#00f0ff]">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 font-sans text-xs sm:text-sm">
                  <h4 className="font-mono text-xs text-[#00f0ff] font-bold uppercase tracking-wider">
                    RESPONSIBILITIES & METRICS:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-300">
                        <CheckCircle2 size={16} className="text-[#ff007f] mt-0.5 shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-[#060713] border border-gray-800 text-gray-300"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}