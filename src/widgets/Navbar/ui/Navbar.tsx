import React, { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User";
import cls from "./Navbar.module.scss";
import { ToggleFeatures } from "@/shared/features";
import { Text, TextTheme } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { getRouteArticleCreate } from "@/shared/consts/router";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { NavbarRedesigned } from "../ui/NavbarRedesigned/NavbarRedesigned";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const navbarOff = (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                className={cls.appName}
                theme={TextTheme.INVERTED}
                title={t("MY APP")}
            />
            <AppLink
                className={cls.createBtn}
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.SECONDARY}
            >
                {t("Створити статтю")}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<NavbarRedesigned />}
                off={navbarOff}
            />
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t("Увійти")}
            </Button>
            {isAuthModal && (
                <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
            )}
        </header>
    );
});
