import { AnimatedTimeline } from './AnimatedTimeline';
import { TECH_CONFERENCE_SCHEDULE } from './data/EventScheduleData';

export default function EventScheduleTimeline() {
  return (
    <div className="relative w-full">
      <AnimatedTimeline scheduleData={TECH_CONFERENCE_SCHEDULE} />
    </div>
  )
}