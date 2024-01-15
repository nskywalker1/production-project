import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextAlign = "right" | "left" | "center";

export type TextVariant = "primary" | "error" | "accent";

export type TextSize = "s" | "m" | "l";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    bold?: boolean;
    size?: TextSize;
    "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: "h3",
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
        bold,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
        <div
            className={classNames(cls.Text, { [cls.bold]: bold }, [
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
