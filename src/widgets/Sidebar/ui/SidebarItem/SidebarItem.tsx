import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from "@/shared/ui/deprecated/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";
import cls from "./SidebarItem.module.scss";
import { ToggleFeatures } from "@/shared/features";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { Icon } from "@/shared/ui/redesigned/Icon";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    const sidebarItemOff = (
        <AppLinkDeprecated
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, {
                [cls.collapsed]: collapsed,
            })}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
    );

    const sidebarItemRedesigned = (
        <AppLink
            className={classNames(cls.itemRedesigned, {
                [cls.collapsedRedesigned]: collapsed,
            })}
            to={item.path}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={sidebarItemRedesigned}
            off={sidebarItemOff}
        />
    );
};
