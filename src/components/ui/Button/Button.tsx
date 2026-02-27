import "./Button.css";

interface IButtonProps {
  className: string;
  text: string;
}

export default function Button(props: IButtonProps) {
  return <button className={props.className}>{props.text}</button>;
}
