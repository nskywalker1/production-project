import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { Input } from "@/shared/ui/deprecated/Input";

import cls from "./ArticlesPageFilters.module.scss";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { useArticleFilters } from "../../../../pages/ArticlesPage/lib/hooks/useArticleFilters";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeSearch,
        onChangeSort,
        sort,
        search,
        onChangeType,
        type,
        onChangeOrder,
        order,
        view,
        onChangeView,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t("Пошук")}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
