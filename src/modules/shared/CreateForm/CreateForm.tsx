import "./CreateForm.css";
import FormTitle from "../../../components/ui/text/FormTitle/FormTitle";
import FormInputTitle from "../../../components/ui/text/FormInputTitle/FormInputTitle";
import FormInput from "../../../components/ui/inputs/FormInput/FormInput";
import { type FormInputProps } from "../../../types/form";
import { type FormData } from "../../../types/form";
import {
  createEventFormProps,
  createShoppingListFormProps,
} from "./formTemplates";

export default function CreateForm(props: FormData) {
  let currentFormProps: FormInputProps[] | null = null;

  if (props.formType === "createEvent") {
    currentFormProps = createEventFormProps;
  } else if (props.formType === "createShoppingList") {
    currentFormProps = createShoppingListFormProps;
  }

  return (
    <form className="form">
      <FormTitle text={props.title} />
      {currentFormProps &&
        currentFormProps.map((inputProps) => (
          <div key={inputProps.name} className="form-input-group">
            <FormInputTitle text={inputProps.label} />
            <FormInput {...inputProps} />
          </div>
        ))}
      <input type="submit" value="Создать" className="submit-button" />
    </form>
  );
}
