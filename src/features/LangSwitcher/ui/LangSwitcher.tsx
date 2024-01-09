import { useTranslation } from "react-i18next";
import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { ToggleFeatures } from "@/shared/features";
import { Button } from "@/shared/ui/redesigned/Button";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear" onClick={toggle}>
                    {t(short ? "Короткова мова" : "Мова")}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames("", {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    {t(short ? "Короткова мова" : "Мова")}
                </ButtonDeprecated>
            }
        />
    );
});
