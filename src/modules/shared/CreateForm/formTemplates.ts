import { type FormInputProps } from "../../../types/form";

export const createEventFormProps: FormInputProps[] = [
  {
    name: "eventName",
    type: "text",
    placeholder: "Корпоратив в пентхаусе",
    label: "Придумай название",
  },
  {
    name: "eventDate",
    type: "date",
    placeholder: "10.10.2024",
    label: "Укажи дату проведения",
  },
  {
    name: "eventLocation",
    type: "text",
    placeholder: "Название места, города и тд.",
    label: "Где будет проходить ивент?",
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
