import { MainPage } from '@/pages/MainPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AboutPage } from '@/pages/AboutPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/shared/consts/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
