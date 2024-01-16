import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "@/shared/ui/redesigned/Card";
import { ArticleAdditionalInfo } from "@/widgets/ArticleAdditionalInfo";
import { getArticleDetailsData } from "@/entities/Article";
import cls from "./AdditionalInfoContainer.module.scss";
import { getRouteArticleEdit } from "@/shared/consts/router";

export const AdditionalInfoContainer = memo(() => {
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card padding="24" className={cls.card} border="partial">
            <ArticleAdditionalInfo
                author={article.user}
                onEdit={onEditArticle}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});
