import { screen } from "@testing-library/react";
import { ComponentRender } from "@/shared/lib/tests/componentRender/ComponentRender";
import { AppRouter } from "./AppRouter";
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from "@/shared/consts/router";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", () => {
    test("The page should render", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });

    test("Page not found", async () => {
        ComponentRender(<AppRouter />, {
            route: "/asfasfasfasf",
        });

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });

    test("Redirect unauthorized user to home page", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile("1"),
        });

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });

    test("Access to a closed page for an authorized user", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });

    test("Access denied (no role)", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ForbiddenPage");
        expect(page).toBeInTheDocument();
    });

    test("Access allowed (role present)", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId("AdminPage");
        expect(page).toBeInTheDocument();
    });
});
