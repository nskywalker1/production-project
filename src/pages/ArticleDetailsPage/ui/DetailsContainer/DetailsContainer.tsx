import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "@/entities/Article";
import { Card } from "@/shared/ui/redesigned/Card";

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    return (
        <Card border="round" max className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
});
