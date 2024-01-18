import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { getUserInited, initAuthData } from "@/entities/User";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ToggleFeatures } from "@/shared/features";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { PageLoader } from "@/shared/ui/deprecated/PageLoader";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";
import { useAppToolbar } from "./lib/useAppToolbar";

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <div id="app" className={classNames("app_redesigned", {}, [theme])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<AppLoaderLayout />}
                    off={<PageLoader />}
                />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    id="app"
                    className={classNames("app_redesigned", {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames("app", {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
}

export default App;
