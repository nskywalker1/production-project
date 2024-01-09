import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ArticleList } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text } from "@/shared/ui/deprecated/Text";
import { getArticles } from "../../model/slice/articlesPageSlice";
import {
    getArticlesPageError,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const inited = useSelector(getArticlesPageInited);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text title={t("Помилка при загрузці статтей")} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
            className={className}
        />
    );
});
