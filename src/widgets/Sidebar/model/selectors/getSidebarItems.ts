import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import MainIconDeprecated from "@/shared/assets/icons/main-20-20.svg";
import AboutIconDeprecated from "@/shared/assets/icons/about-20-20.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIconDeprecated from "@/shared/assets/icons/article-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import MainIcon from "@/shared/assets/icons/home.svg";
import ProfileIcon from "@/shared/assets/icons/avatar.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";

import { SidebarItemType } from "../types/sidebar";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/consts/router";
import { toggleFeatures } from "@/shared/features";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: "isAppRedesigned",
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
            text: "Головна сторінка",
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: "isAppRedesigned",
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: "Про сайт",
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: "Профіль",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                text: "Статті",
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
