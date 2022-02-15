import React from 'react';
import Style from './button.module.scss';

export enum Variants {
  contained = 'contained',
  outlined = 'outlined',
}

type ButtonProps = {
  variant: Variants;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick = () => {},
  children,
}) => {
  return (
    <button className={Style[variant]} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
