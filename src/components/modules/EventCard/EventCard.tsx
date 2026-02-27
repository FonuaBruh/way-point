import "./EventCard.css";
import type { CardProps } from "../../common/types";

export const EventCard: React.FC<CardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </div>
  );
};
