import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { AppImage } from "../../redesigned/AppImage/AppImage";
import UserIcon from "@/shared/assets/icons/avatar.svg";
import { Icon } from "../Icon/Icon";
import { Skeleton } from "../Skeleton/Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, alt, src, size }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

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
