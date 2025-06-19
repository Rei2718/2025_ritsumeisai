"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  time: string;
  title: string;
  description: string;
  labels: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#121212] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-[#fafafa] max-w-4xl font-bold">
          Event Schedule
        </h2>
        <p className="text-[#fafafa]/70 text-sm md:text-base max-w-sm">
          Join us for an exciting day of presentations, workshops, and networking opportunities.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#121212] flex items-center justify-center border-2 border-[#282828]">
                <div className="h-4 w-4 rounded-full bg-[#dbb778] border border-[#dbb778] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-[#dbb778] min-w-[120px]">
                {item.time}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-2 text-left font-bold text-[#dbb778]">
                {item.time}
              </h3>
              
              <div className="bg-[#171717] rounded-lg p-6 border border-[#282828] shadow-lg">
                <h4 className="text-xl md:text-2xl font-bold text-[#fafafa] mb-3">
                  {item.title}
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.labels.map((label, labelIndex) => (
                    <span
                      key={labelIndex}
                      className="px-3 py-1 bg-[#dbb778]/10 text-[#dbb778] text-sm rounded-full border border-[#dbb778]/20 font-medium"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                
                <p className="text-[#fafafa]/80 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-[#282828] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#dbb778] via-[#dbb778]/80 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};