import "./FormInputTitle.css";

export default function FormInputTitle({ text }: { text: string }) {
  return <label className="form-input-title">{text}</label>;
}
