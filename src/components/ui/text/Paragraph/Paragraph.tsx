import "./Paragraph.css";

export default function Paragraph({ text }: { text: string }) {
  return <h2 className="paragraph">{text}</h2>;
}
