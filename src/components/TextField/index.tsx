import * as React from "react";
import clsx from "clsx";
import { AlphanumericType, InputKeyboardEvent, InputType } from "../../types";
// import Style from "./text-field.module.scss"

interface ITextFieldProps {
  name: string;
  value: AlphanumericType;
  id: string;
  onChange: (e: InputKeyboardEvent) => void;
  onBlur?: (e: InputKeyboardEvent) => void;
  onKeyUp?: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: InputType;
  // react ref
  refer?: string;
  icon?: React.ReactNode;
  autoFocus?: boolean;
  className?: string;
  noLabel?: boolean;
  label?: string;
  touched?: boolean;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  currency?: number;
  min?: number;
  max?: number;
}

const TextField = (props: ITextFieldProps) => {
  const {
    name,
    refer,
    value,
    icon,
    id,
    label,
    min,
    max,
    currency,
    type = "text",
    noLabel = false,
    touched = false,
    disabled = false,
    className = "",
    error = false,
    placeholder = "",
    autoFocus = false,
    onBlur,
    onKeyUp,
    onKeyDown,
    onChange,
  } = props;

  const hasError = error && touched;

  const setPlaceholder = () => {
    if (placeholder) return placeholder;
    if (label) return label;
    else {
      if (name) {
        if (name.includes("_id")) return name.split("_id")[0];
        return name;
      }
    }
  };

  return (
    <div
      className={clsx("form-group TextField animated fadeIn faster", {
        "has-error": hasError,
      })}
    >
      {!noLabel && type !== "checkbox" ? <label>{label}</label> : null}

      {icon}

      <div
        className={clsx("input-wrapper", {
          "input-wrapper-currency": currency,
        })}
      >
        {currency ? <span className="currency">{currency}</span> : null}
        <input
          type={`${type ? type : "text"}`}
          ref={refer}
          name={name}
          value={value}
          id={id || name}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onBlur={onBlur}
          min={min}
          max={max}
          step={type === "number" ? currency : ".01"}
          autoFocus={autoFocus}
          disabled={!!disabled}
          placeholder={setPlaceholder()}
          className={clsx(className, { disabled })}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default TextField;
