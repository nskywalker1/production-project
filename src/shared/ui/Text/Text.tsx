import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}
export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?:string;
    text?:string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        theme = TextTheme.PRIMARY,
        text,
        align = TextAlign.LEFT,
        title,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
