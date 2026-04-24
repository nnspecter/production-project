import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./Button.module.scss"
import { ButtonHTMLAttributes } from 'react';

export type ThemeButton = "outlined" | "contained" | "clear";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}


export const Button = (props: MyButtonProps) => {
    const {className, children, theme = "contained", ...otherProps} = props
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
}