type FormType = "createEvent" | "createShoppingList" | "createParticipantsList";

export interface FormInputProps {
  type: string;
  placeholder?: string;
  name: string;
  label: string;
}

export interface FormData {
  formType: FormType;
  title: string;
}
