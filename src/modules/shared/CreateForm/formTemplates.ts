import { type FormInputProps } from "../../../types/form";

export const createEventFormProps: FormInputProps[] = [
  {
    name: "eventName",
    type: "text",
    placeholder: "День рождения",
    label: "Название ивента",
  },
  {
    name: "eventDate",
    type: "date",
    placeholder: "10.10.2024",
    label: "Дата ивента",
  },
  {
    name: "eventLocation",
    type: "text",
    placeholder: "Место проведения",
    label: "Место проведения",
  },
];

export const createShoppingListFormProps: FormInputProps[] = [
  {
    name: "listName",
    type: "text",
    placeholder: "Кальян",
    label: "Название списка",
  },
  {
    name: "listDescription",
    type: "text",
    placeholder: "Заехать за табаком в день выезда",
    label: "Доп. информация",
  },
];
