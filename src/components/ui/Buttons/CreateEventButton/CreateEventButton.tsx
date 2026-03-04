import "./CreateEventButton.css";

export default function CreateEventButton({ text }: { text: string }) {
  return <button className="create-event-button">{text}</button>;
}
