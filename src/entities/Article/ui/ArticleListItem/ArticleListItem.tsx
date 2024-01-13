import { HTMLAttributeAnchorTarget } from "react";
import { ArticleView } from "../../model/consts/consts";
import { Article } from "../../model/types/article";
import { ToggleFeatures } from "@/shared/features";
import { ArticleListItemDeprecated } from "../../../../entities/Article/ui/ArticleListItem/ArticleListItemDeprecated/ArticleListItemDeprecated";
import { ArticleListItemRedesigned } from "../../../../entities/Article/ui/ArticleListItem/ArticleListItemRedesigned/ArticleListItemRedesigned";

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleListItemRedesigned {...props} />}
        off={<ArticleListItemDeprecated {...props} />}
    />
);
