/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useScroll, useTransform } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { EventHeader } from './EventHeader';
import { TimelineItem } from './TimeLineItem';

interface ScheduleEntry {
  time: string
  content: React.ReactNode
}

interface AnimatedTimelineProps {
  scheduleData: ScheduleEntry[]
}

export function AnimatedTimeline({ scheduleData }: AnimatedTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const scrollYProgress = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  }).scrollYProgress

  const lineAnimations = useRef(
    scheduleData.map((_, itemIndex) => {
      const segmentStartProgress = itemIndex / (scheduleData.length - 1)
      const segmentEndProgress = (itemIndex + 1) / (scheduleData.length - 1)

      return {
        segmentStartProgress,
        segmentEndProgress,
      }
    }),
  ).current

  const renderTimelineItems = () => {
    return scheduleData.map((scheduleItem, itemIndex) => {
      const isLastItem = itemIndex === scheduleData.length - 1
      const animations = lineAnimations[itemIndex]

      const lineGrowthProgress = useTransform(
        scrollYProgress,
        [animations.segmentStartProgress, animations.segmentEndProgress],
        [0, 1],
      )
      const lineFadeInProgress = useTransform(
        scrollYProgress,
        [animations.segmentStartProgress, animations.segmentStartProgress + 0.1],
        [0, 1],
      )

      return (
        <TimelineItem
          key={`timeline-item-${itemIndex}`}
          time={scheduleItem.time}
          content={scheduleItem.content}
          lineGrowthProgress={lineGrowthProgress}
          lineFadeInProgress={lineFadeInProgress}
          showConnectingLine={!isLastItem}
        />
      )
    })
  }

  useEffect(() => {
    if (timelineRef.current) {
      const containerRect = timelineRef.current.getBoundingClientRect()
      setContainerHeight(containerRect.height)
    }
  }, [])

  return (
    <div className="w-full font-sans bg-[#121212] min-h-screen" ref={containerRef}>
      <EventHeader />

      <div ref={timelineRef} className="relative w-11/12 mx-auto pb-20">
        {renderTimelineItems()}
      </div>
    </div>
  )
}