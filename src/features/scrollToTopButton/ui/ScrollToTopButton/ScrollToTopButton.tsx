import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ScrollToTopButton.module.scss";
import { Icon } from "@/shared/ui/redesigned/Icon";
import CircleIcon from "@/shared/assets/icons/circle-up.svg";

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Icon
            Svg={CircleIcon}
            width={32}
            onClick={onClick}
            height={32}
            clickable
            className={classNames(cls.ScrollToTopButton, {}, [className])}
        />
    );
});
