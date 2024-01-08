import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NavbarRedesigned.module.scss";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";

interface NavbarRedesignedProps {
    className?: string;
}

export const NavbarRedesigned = memo((props: NavbarRedesignedProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
});
