"use client"
import { motion, type MotionValue } from "framer-motion"
import type React from "react"

interface TimelineItemProps {
  time: string
  content: React.ReactNode
  lineGrowthProgress: MotionValue<number>
  lineFadeInProgress: MotionValue<number>
  showConnectingLine: boolean
}

export function TimelineItem({
  time,
  content,
  lineGrowthProgress,
  lineFadeInProgress,
  showConnectingLine,
}: TimelineItemProps) {
  return (
    <div className="flex pt-8 md:pt-12 relative w-11/12 justify-center">
      {/* Time Display Column */}
      <div className="w-1/12 flex justify-end pr-8">
        <div className="text-right">
          <time className="text-sm md:text-base font-medium text-gray-500 font-mono">{time}</time>
        </div>
      </div>

      {/* Timeline Point and Connecting Line */}
      <div className="relative flex flex-col items-center">
        {/* Timeline Point */}
        <div className="w-3 h-3 bg-[#dbb778] rounded-full border-2 border-[#121212] z-10" />

        {/* Animated Connecting Line */}
        {showConnectingLine && (
          <div className="absolute top-3 w-0.5 overflow-hidden" style={{ height: "calc(100% + 2rem)" }}>
            {/* Static Background Line */}
            <div className="absolute inset-0 bg-[#dbb778]/30" />

            {/* Animated Progress Line */}
            <motion.div
              style={{
                scaleY: lineGrowthProgress,
                opacity: lineFadeInProgress,
                transformOrigin: "top",
              }}
              className="absolute inset-x-0 top-0 w-0.5 h-full bg-[#dbb778] rounded-full"
            />
          </div>
        )}
      </div>

      {/* Event Content Column */}
      <div className="w-10/12 pl-8">
        <div className="transform transition-all duration-300 hover:scale-[1.02]">{content}</div>
      </div>
    </div>
  )
}