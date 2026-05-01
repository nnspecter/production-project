import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export type ThemeButton = 'outlined' | 'contained' | 'clear';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: MyButtonProps) => {
    const {
        className, children, theme = 'contained', ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export { classNames };
