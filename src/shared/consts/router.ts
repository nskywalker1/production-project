export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    SETTINGS = "settings",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
    PROFILE = "profile",
    NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteSettings = () => "/settings";
export const getRouteAbout = () => "/about";
export const getRouteForbidden = () => "/forbidden";
export const getRouteAdmin = () => "/admin";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => "/articles";
export const getRouteArticleCreate = () => "/articles/create";
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteProfile(":id")]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleDetails(":id")]: AppRoutes.ARTICLE_DETAILS,
    [getRouteArticleEdit(":id")]: AppRoutes.ARTICLE_EDIT,
};
