import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "../../model/types/comment";
import { ToggleFeatures } from "@/shared/features";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames("", {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={t("Коментарі відсутні")} />}
                    off={<TextDeprecated text={t("Коментарі відсутні")} />}
                />
            )}
        </VStack>
    );
};
