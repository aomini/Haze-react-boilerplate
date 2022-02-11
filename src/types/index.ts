/** Alphanumeric types with string or number */
export type AlphanumericType = string | number;

/** Input text field only types */
export type InputType = "text" | "number" | "password" | "checkbox";

/** Change Event for Input Elements */
export type InputKeyboardEvent = React.ChangeEvent<HTMLInputElement>;
