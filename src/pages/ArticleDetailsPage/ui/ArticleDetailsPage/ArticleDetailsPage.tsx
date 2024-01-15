import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComments } from "../../ui/ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { articleDetailsPageReducer } from "../../model/slice/index";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleRating } from "@/features/articleRating";
import { getFeatureFlag, ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/deprecated/Card";
import { StickyContentLayout } from "@/shared/layouts/StickyContentLayout";
import { DetailsContainer } from "../../../../pages/ArticleDetailsPage/ui/DetailsContainer/DetailsContainer";
import { AdditionalInfoContainer } from "../../../../pages/ArticleDetailsPage/ui/AdditionalInfoContainer/AdditionalInfoContainer";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag("isArticleRatingEnabled");

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames(
                                    cls.ArticleDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRating id={id} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap="16" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ToggleFeatures
                                feature="isArticleRatingEnabled"
                                on={<ArticleRating id={id} />}
                                off={
                                    <Card>
                                        {t(
                                            "Скоро буде можливість поставити оцінку",
                                        )}
                                    </Card>
                                }
                            />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
