import { memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "@/widgets/Page";
import { ArticleInfiniteList } from "../../ui/ArticleInfiniteList/ArticleInfiniteList";
import { ArticlesPageFilters } from "../../ui/ArticlesPageFilters/ArticlesPageFilters";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";
import { ArticlePageGreeting } from "@/features/articlePageGreeting";
import { ToggleFeatures } from "@/shared/features";
import { StickyContentLayout } from "@/shared/layouts/StickyContentLayout";
import { ViewSelectorContainer } from "../../../../pages/ArticlesPage/ui/ViewSelectorContainer/ViewSelectorContainer";
import { FilterContainer } from "../../../../pages/ArticlesPage/ui/FilterContainer/FilterContainer";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FilterContainer />}
                    content={
                        <Page
                            data-testid="ArticlesPage"
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticlePageGreeting />
                            <ArticleInfiniteList className={cls.list} />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid="ArticlesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ArticlesPage, {}, [className])}
                >
                    <ArticlePageGreeting />
                    <ArticlesPageFilters />
                    <ArticleInfiniteList className={cls.list} />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
