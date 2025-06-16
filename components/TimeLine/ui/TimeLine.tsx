"use client"
import type React from "react"
import { useRef, useState, useEffect, useMemo } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Memoize animation calculations
  const lineAnimations = useMemo(() => {
    return data.map((_, index) => {
      const segmentStart = index / Math.max(data.length - 1, 1)
      const segmentEnd = (index + 1) / Math.max(data.length - 1, 1)

      // Add buffer zones to prevent animation conflicts
      const bufferSize = 0.02
      const adjustedStart = Math.max(0, segmentStart - bufferSize)
      const adjustedEnd = Math.min(1, segmentEnd + bufferSize)

      return {
        segmentStart: adjustedStart,
        segmentEnd: adjustedEnd,
        fadeStart: adjustedStart,
        fadeEnd: Math.min(adjustedStart + 0.08, adjustedEnd),
      }
    })
  }, [data.length])

  // Custom scroll progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress based on container position
      const startOffset = windowHeight * 0.1
      const endOffset = windowHeight * 1.0

      const scrollStart = -rect.top + startOffset
      const scrollEnd = rect.height - windowHeight + endOffset
      const scrollRange = scrollEnd - scrollStart

      if (scrollRange <= 0) {
        setScrollProgress(0)
        return
      }

      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange))
      setScrollProgress(progress)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [])

  // Calculate line progress for each segment
  const calculateLineProgress = (animation: (typeof lineAnimations)[0]) => {
    const { segmentStart, segmentEnd } = animation

    if (scrollProgress < segmentStart) return 0
    if (scrollProgress > segmentEnd) return 1

    const segmentProgress = (scrollProgress - segmentStart) / (segmentEnd - segmentStart)
    return Math.max(0, Math.min(1, segmentProgress))
  }

  // Calculate opacity for each segment
  const calculateLineOpacity = (animation: (typeof lineAnimations)[0]) => {
    const { fadeStart, fadeEnd } = animation

    if (scrollProgress < fadeStart) return 0
    if (scrollProgress > fadeEnd) return 1

    const fadeProgress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart)
    return Math.max(0, Math.min(1, fadeProgress))
  }

  const timelineEntries = data.map((item, index) => {
    const animation = lineAnimations[index]
    const lineProgress = calculateLineProgress(animation)
    const lineOpacity = calculateLineOpacity(animation)

    return (
      <div key={index} className="flex pt-8 md:pt-12 relative w-11/12 mx-auto justify-center">
        {/* Time Display Column - Centered alignment */}
        <div className="w-1/12 flex justify-end pr-8">
          <div className="text-right">
            <time className="text-sm md:text-base font-medium text-gray-500 font-mono">{item.title}</time>
          </div>
        </div>

        {/* Timeline Point and Connecting Line */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Point */}
          <div className="w-3 h-3 bg-[#dbb778] rounded-full border-2 border-[#121212] z-10" />

          {/* Animated Connecting Line */}
          {index < data.length - 1 && (
            <div className="absolute top-3 w-0.5 overflow-hidden" style={{ height: "calc(100% + 2rem)" }}>
              {/* Static Background Line */}
              <div className="absolute inset-0 bg-[#dbb778]/30" />

              {/* Animated Progress Line */}
              <div
                className="absolute inset-x-0 top-0 w-0.5 h-full bg-[#dbb778] rounded-full transition-all duration-100 ease-linear"
                style={{
                  transform: `scaleY(${lineProgress})`,
                  opacity: lineOpacity,
                  transformOrigin: "top",
                }}
              />
            </div>
          )}
        </div>

        {/* Event Content Column - Centered alignment */}
        <div className="w-10/12 pl-8">
          <div className="transform transition-all duration-300 hover:scale-[1.02]">{item.content}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="w-full font-sans bg-[#121212] min-h-screen" ref={containerRef}>
      {/* Header Section - Centered */}
      <div className="w-full py-12 md:py-16 px-2 md:px-4">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#dbb778] mb-3 md:mb-4">
            Tech Conference 2024
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            最新テクノロジーと未来のイノベーションを探求する一日限りの特別イベント
          </p>
        </div>
        <div className="bg-[#171717] rounded-2xl p-4 md:p-6 shadow-lg border border-[#dbb778]/20 max-w-lg mx-auto">
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#dbb778] rounded-full"></div>
              <span>2024年12月15日（日）</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#dbb778] rounded-full"></div>
              <span>東京国際フォーラム</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section - Centered layout */}
      <div className="w-full">
        <div ref={ref} className="relative pb-16 md:pb-20">
          {timelineEntries}
        </div>
      </div>
    </div>
  )
}
