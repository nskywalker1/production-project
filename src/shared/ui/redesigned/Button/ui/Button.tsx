import { type ButtonHTMLAttributes, type FC, memo } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline";

export type ButtonSize = "M" | "L" | "XL";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    fullWidth?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        disabled,
        fullWidth,
        variant = "outline",
        size = "M",
        square,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
