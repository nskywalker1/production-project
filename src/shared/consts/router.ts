export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // :id
    // Last
    [AppRoutes.NOT_FOUND]: '*',
};
