import "./Main.css";
import { PreviousEvents } from "../../modules/PreviousEvents/PreviousEvents";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../modals/Modal/Modal";
import NewEventForm from "../../forms/NewEventForm/NewEventForm";

const events = [
  {
    title: "Tech Conference 2024",
    description:
      "Annual tech conference featuring industry leaders and innovators.",
  },
  {
    title: "Community Meetup",
    description: "Monthly meetup for local developers and tech enthusiasts.",
  },
  {
    title: "Hackathon",
    description:
      "24-hour coding competition with prizes and networking opportunities.",
  },
];

export default function Main() {
  const { isOpen, open, close } = useModal();
  return (
    <div className="main">
      <button className="create-event" onClick={open}>
        Create event
      </button>

      <Modal isOpen={isOpen} onClose={close} title="Добавить событие">
        <NewEventForm />
      </Modal>

      <PreviousEvents events={events} />
    </div>
  );
}
