import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { useArticleFilters } from "../../../../pages/ArticlesPage/lib/hooks/useArticleFilters";

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const { view, onChangeView } = useArticleFilters();

        return (
            <div className={className}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
        );
    },
);
