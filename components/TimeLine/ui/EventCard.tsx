import { EventTag } from './EventTag';

interface EventCardTag {
  label: string
  color: "primary" | "emerald" | "purple" | "orange" | "blue" | "cyan" | "pink" | "red"
}

interface EventCardProps {
  title: string
  description: string
  tags: EventCardTag[]
}

export function EventCard({ title, description, tags }: EventCardProps) {
  return (
    <article className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
      {/* Event Title */}
      <header className="mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </header>

      {/* Event Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      {/* Event Tags */}
      {tags && tags.length > 0 && (
        <footer className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <EventTag key={`${tag.label}-${tagIndex}`} label={tag.label} colorVariant={tag.color} />
          ))}
        </footer>
      )}
    </article>
  )
}