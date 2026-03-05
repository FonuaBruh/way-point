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
import HomePageButton from "../../../components/ui/buttons/HomePageButton/HomePageButton";

export default function CreateForm(props: FormData) {
  let currentFormProps: FormInputProps[] | null = null;

  function createEvent() {
    console.log("Ивент создан!");
  }

  function declineCreation() {
    console.log("Создание отменено.");
  }

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
      <div className="form-btns">
        <HomePageButton onClick={createEvent} text="Создать" />
        <HomePageButton onClick={declineCreation} text="Отмена" />
      </div>
    </form>
  );
}
