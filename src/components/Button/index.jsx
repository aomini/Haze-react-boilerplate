import React from "react";
import Style from "./button.module.scss";

export const Variants = {
  contained: "contained",
  outlined: "outlined",
};

const Button = ({ variant, onClick = () => {}, children }) => {
  return (
    <button className={Style[variant]} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
