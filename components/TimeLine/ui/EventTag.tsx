interface EventTagProps {
  label: string
  colorVariant: "primary" | "emerald" | "purple" | "orange" | "blue" | "cyan" | "pink" | "red"
}

const TAG_COLOR_VARIANTS = {
  primary: "bg-[#dbb778]/20 text-[#dbb778] border-[#dbb778]/30",
  emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  red: "bg-red-500/20 text-red-400 border-red-500/30",
} as const

export function EventTag({ label, colorVariant }: EventTagProps) {
  const colorClasses = TAG_COLOR_VARIANTS[colorVariant]

  return <span className={`px-3 py-1.5 text-sm font-medium rounded-full border ${colorClasses}`}>{label}</span>
}