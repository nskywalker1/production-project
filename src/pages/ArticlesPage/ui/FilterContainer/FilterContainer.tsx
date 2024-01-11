import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { useArticleFilters } from "../../../../pages/ArticlesPage/lib/hooks/useArticleFilters";

interface FilterContainerProps {
    className?: string;
}

export const FilterContainer = memo((props: FilterContainerProps) => {
    const { className } = props;
    const {
        onChangeSearch,
        onChangeSort,
        sort,
        search,
        onChangeType,
        type,
        onChangeOrder,
        order,
    } = useArticleFilters();
    const { t } = useTranslation();

    return (
        <ArticlesFilters
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            sort={sort}
            type={type}
            search={search}
            className={className}
        />
    );
});
