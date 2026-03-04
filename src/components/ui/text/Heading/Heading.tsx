import "./Heading.css";

export default function Heading({ text }: { text: string }) {
  return <h2 className="heading">{text}</h2>;
}
