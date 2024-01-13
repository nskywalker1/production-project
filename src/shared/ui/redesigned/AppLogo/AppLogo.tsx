import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLogo.module.scss";
import { HStack } from "../Stack/HStack/HStack";
import AppSvg from "@/shared/assets/icons/app-image.svg";

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;
    const { t } = useTranslation();

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <AppSvg
                width={size}
                height={size}
                color="black"
                className={cls.appLogo}
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
