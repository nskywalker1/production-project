import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextAlign = "right" | "left" | "center";

export type TextVariant = "primary" | "error" | "accent";

export type TextSize = "m" | "l";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2";

const mapSizeToClass: Record<TextSize, string> = {
    m: "size_m",
    l: "size_l",
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    m: "h2",
    l: "h1",
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        variant = "primary",
        text,
        "data-testid": dataTestId = "text",
        size = "m",
        align = "left",
        title,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
        <div
            className={classNames(cls.Text, {}, [
                className,
                cls[variant],
                cls[align],
                cls[size],
                sizeClass,
            ])}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={`${dataTestId}.paragraph`} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
