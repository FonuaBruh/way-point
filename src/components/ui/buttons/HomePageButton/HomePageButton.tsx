import "./HomePageButton.css";

export default function HomePageButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button className="home-page-button" onClick={onClick}>
      {text}
    </button>
  );
}
