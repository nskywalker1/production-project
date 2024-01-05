import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { AppImage } from "../AppImage/AppImage";
import UserIcon from "../../assets/icons/avatar.svg";
import { Icon } from "../Icon/Icon";
import { Skeleton } from "../Skeleton/Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    alt,
    src,
    size,
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            alt={alt}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
