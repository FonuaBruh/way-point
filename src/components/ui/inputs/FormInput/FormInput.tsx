import "./FormInput.css";
import { type FormInputProps } from "../../../../types/form";

export default function FormInput(props: FormInputProps) {
  return (
    <input
      className="form-input"
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}
