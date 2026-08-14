"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Cpu, Code, Layers, Database, Palette, Users, Sparkles } from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [activeTab, setActiveTab] = useState("all")

  const skillCategories = [
    {
      id: "engines",
      title: "Game Engines & Core",
      icon: Cpu,
      color: "#00f0ff",
      skills: ["Unity", "Unreal Engine 5", "CryEngine", "GameMaker Studio", "Godot"],
    },
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code,
      color: "#ff007f",
      skills: ["C#", "C++", "JavaScript", "TypeScript", "Python"],
    },
    {
      id: "art",
      title: "3D & Art Tools",
      icon: Palette,
      color: "#9d4edd",
      skills: ["Blender", "Photoshop", "Illustrator", "Maya", "Substance Painter"],
    },
    {
      id: "gamedesign",
      title: "Game Systems & Design",
      icon: Sparkles,
      color: "#ffe600",
      skills: [
        "Gameplay Programming",
        "Physics Simulation",
        "Level Design",
        "Performance Optimization",
        "Scripting",
      ],
    },
    {
      id: "web",
      title: "Frontend & Web Tech",
      icon: Layers,
      color: "#00ff66",
      skills: ["React.js", "Next.js", "Three.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      icon: Database,
      color: "#00f0ff",
      skills: ["Node.js", "Firebase", "REST API", "Express", "SQLite", "MongoDB", "MySQL"],
    },
    {
      id: "soft",
      title: "Collaboration & Soft Skills",
      icon: Users,
      color: "#ff007f",
      skills: ["Git & GitHub", "Jira & Trello", "Problem Solving", "Team Collaboration", "Creativity"],
    },
  ]

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab)

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff007f] uppercase tracking-widest mb-2">
            <Cpu size={14} />
            <span>SYS.MATRIX // TECHNICAL_CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TECH <span className="neon-text-cyan">MATRIX</span>
            <span className="text-[#ff007f] text-2xl ml-3 font-mono">/ スキルマトリックス</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10 font-mono text-xs"
        >
          {[
            { id: "all", label: "ALL MATRIX" },
            { id: "engines", label: "GAME ENGINES" },
            { id: "languages", label: "LANGUAGES" },
            { id: "art", label: "3D ART" },
            { id: "gamedesign", label: "GAME SYSTEMS" },
            { id: "web", label: "WEB TECH" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#00f0ff] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "hud-box text-gray-300 hover:text-[#00f0ff]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="hud-box p-6 rounded-xl space-y-4 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Category Title Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
                  <div
                    className="p-2 rounded bg-white/5 border"
                    style={{ borderColor: category.color, color: category.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-white font-mono text-sm tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chip Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-md bg-[#07091a] border border-gray-800 text-xs font-mono text-gray-200 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors cursor-default"
                    >
                      <span className="text-[#ff007f] mr-1">⚡</span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}