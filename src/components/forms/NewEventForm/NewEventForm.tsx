import "./NewEventForm.css";

export default function NewEventForm() {
  return (
    <form className="new-event-form">
      <label htmlFor="title">Название события</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="description">Описание события</label>
      <textarea id="description" name="description" required></textarea>

      <button type="submit" className="create-event">
        Сохранить
      </button>
    </form>
  );
}
