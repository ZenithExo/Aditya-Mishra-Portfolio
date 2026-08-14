"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Gamepad2, Sparkles, X, Play, Code2 } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [activePreview, setActivePreview] = useState<string | null>(null)

  const projects = [
    {
      id: "tron",
      title: "Tron - Light Cycle Battle Arena",
      subtitle: "TRON SCI-FI ARENA BATTLE",
      description:
        "High-octane 3D Sci-Fi Light Cycle Arena Battle inspired by the iconic TRON aesthetic. Built with custom C# physics mechanics, glowing neon light trails, and low-poly futuristic 3D assets.",
      technologies: ["C#", "Unity Engine", "Blender", "3D Physics", "Shader Graph"],
      link: "https://digital-arena-clash.lovable.app",
      gradient: "from-[#00f0ff]/20 via-[#090b1c] to-[#9d4edd]/20",
      accentColor: "#00f0ff",
      highlight: "Sci-Fi Light Trails & Real-Time Arena Mechanics",
    },
    {
      id: "neon-catcher",
      title: "Neon-Catcher",
      subtitle: "RETRO CYBERPUNK ARCADE",
      description:
        "A fast-paced retro-synthwave inspired arcade game featuring neon grid visual effects, custom Illustrator vector artwork, Blender 3D collectibles, and responsive score combos.",
      technologies: ["Unity Engine", "Blender", "Adobe Illustrator", "UI Animation"],
      link: "https://portfolio-play-spark.lovable.app",
      gradient: "from-[#ff007f]/20 via-[#090b1c] to-[#ffe600]/20",
      accentColor: "#ff007f",
      highlight: "Retro Neon Grid Visuals & Combo Scoring",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-widest mb-2">
            <Gamepad2 size={14} />
            <span>SYS.SHOWCASE // FEATURED_GAMES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FEATURED <span className="neon-text-pink">PROJECTS</span>
            <span className="text-[#00f0ff] text-2xl ml-3 font-mono">/ 作品集</span>
          </h2>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`hud-box p-6 sm:p-8 rounded-xl bg-gradient-to-br ${project.gradient} flex flex-col justify-between space-y-6 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 group`}
            >
              <div className="space-y-4">
                {/* Header Tag & Title */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/60 border"
                    style={{ borderColor: project.accentColor, color: project.accentColor }}
                  >
                    {project.subtitle}
                  </span>
                  <Sparkles size={16} className="text-[#ffe600] animate-pulse" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Highlight Badge */}
                <div className="p-3 bg-black/50 rounded-lg border border-gray-800 font-mono text-xs text-gray-300 flex items-center gap-2">
                  <span className="text-[#ff007f]">▸</span>
                  <span>{project.highlight}</span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#060713] border border-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-800/80 flex flex-wrap items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn-cyan px-5 py-2.5 rounded-lg font-mono text-xs font-bold flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  PLAY / LAUNCH LIVE
                </a>

                <button
                  onClick={() => setActivePreview(project.link)}
                  className="px-4 py-2.5 rounded-lg border border-gray-700 hover:border-[#ff007f] text-gray-300 hover:text-[#ff007f] font-mono text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <Play size={14} />
                  IN-APP PREVIEW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Preview Modal Overlay */}
      <AnimatePresence>
        {activePreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="hud-box max-w-5xl w-full h-[85vh] rounded-xl overflow-hidden flex flex-col bg-[#070919] border border-[#00f0ff]/50 relative"
            >
              {/* Modal Header */}
              <div className="p-3 bg-[#0a0c1b] border-b border-gray-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-[#00f0ff]">
                  <Code2 size={16} />
                  <span>PREVIEW_HUD :: {activePreview}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={activePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#ff007f] hover:underline flex items-center gap-1"
                  >
                    Open New Window <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => setActivePreview(null)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Live Webview Iframe */}
              <div className="flex-1 w-full h-full bg-black relative">
                <iframe
                  src={activePreview}
                  className="w-full h-full border-none"
                  title="Project Live Preview"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}