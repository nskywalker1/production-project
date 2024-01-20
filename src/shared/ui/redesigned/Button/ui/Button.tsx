import React, {
    type ButtonHTMLAttributes,
    type FC,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "filled";
export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "M" | "L" | "XL";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    fullWidth?: boolean;
    size?: ButtonSize;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    disabled?: boolean;
    color?: ButtonColor;
}

export const Button: FC<ButtonProps> = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            disabled,
            fullWidth,
            color = "normal",
            variant = "outline",
            size = "M",
            addonLeft,
            addonRight,
            square,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddon]: Boolean(addonRight) || Boolean(addonLeft),
        };

        return (
            <button
                type="button"
                disabled={disabled}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                    cls[color],
                ])}
                {...otherProps}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
