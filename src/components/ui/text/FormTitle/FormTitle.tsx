import "./FormTitle.css";

export default function FormTitle({ text }: { text: string }) {
  return <h2 className="form-title">{text}</h2>;
}
