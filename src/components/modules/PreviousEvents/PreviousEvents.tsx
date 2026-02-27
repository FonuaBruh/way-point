import type { EventData } from "../../common/types";
import { EventCard } from "../EventCard/EventCard";

interface PreviousEventsProps {
  events: EventData[];
}

export const PreviousEvents: React.FC<PreviousEventsProps> = ({ events }) => {
  return (
    <section className="previous-events">
      <h2>Previous Events</h2>

      <div className="events-container">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};
