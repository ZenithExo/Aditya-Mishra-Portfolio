"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Radio } from "lucide-react"

export default function CyberSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const osc1Ref = useRef<OscillatorNode | null>(null)
  const osc2Ref = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)

  const toggleSound = () => {
    if (isPlaying) {
      // Stop synth
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2)
        setTimeout(() => {
          osc1Ref.current?.stop()
          osc2Ref.current?.stop()
          osc1Ref.current?.disconnect()
          osc2Ref.current?.disconnect()
          audioCtxRef.current?.close()
          audioCtxRef.current = null
        }, 300)
      }
      setIsPlaying(false)
    } else {
      // Start futuristic ambient cyberpunk synth drone
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
        const ctx = new AudioContextClass()
        audioCtxRef.current = ctx

        const gainNode = ctx.createGain()
        gainNode.gain.setValueAtTime(0.001, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5)
        gainNodeRef.current = gainNode

        // Sub bass oscillator (55Hz - A1)
        const osc1 = ctx.createOscillator()
        osc1.type = "sawtooth"
        osc1.frequency.setValueAtTime(55, ctx.currentTime)

        // Filter for dark ambient warm synth tone
        const filter = ctx.createBiquadFilter()
        filter.type = "lowpass"
        filter.frequency.setValueAtTime(420, ctx.currentTime)

        // Harmonic lead oscillator (110Hz - A2)
        const osc2 = ctx.createOscillator()
        osc2.type = "sine"
        osc2.frequency.setValueAtTime(110, ctx.currentTime)

        osc1.connect(filter)
        osc2.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(ctx.destination)

        osc1.start()
        osc2.start()

        osc1Ref.current = osc1
        osc2Ref.current = osc2

        setIsPlaying(true)
      } catch (err) {
        console.error("Audio synth error:", err)
      }
    }
  }

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {})
      }
    }
  }, [])

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Cyber Synth Ambient" : "Enable Cyber Synth Ambient"}
      className="hud-box px-3 py-1.5 rounded flex items-center gap-2 text-xs font-mono tracking-wider transition-all duration-300 group"
      style={{
        background: isPlaying ? "rgba(0, 240, 255, 0.15)" : "rgba(13, 16, 38, 0.8)",
        borderColor: isPlaying ? "#00f0ff" : "rgba(0, 240, 255, 0.3)",
      }}
    >
      {isPlaying ? (
        <>
          <Volume2 size={15} className="text-[#00f0ff] animate-pulse" />
          <span className="text-[#00f0ff] hidden sm:inline">CYBER_AUDIO: ON</span>
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#00f0ff] animate-bounce h-full"></span>
            <span className="w-0.5 bg-[#ff007f] animate-bounce h-2/3 delay-75"></span>
            <span className="w-0.5 bg-[#00f0ff] animate-bounce h-4/5 delay-150"></span>
          </div>
        </>
      ) : (
        <>
          <VolumeX size={15} className="text-gray-400 group-hover:text-[#00f0ff]" />
          <span className="text-gray-400 group-hover:text-[#00f0ff] hidden sm:inline">
            AUDIO: OFF
          </span>
          <Radio size={12} className="text-gray-500 group-hover:text-[#ff007f]" />
        </>
      )}
    </button>
  )
}
