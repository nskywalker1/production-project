import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { User } from "@/entities/User";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Text } from "@/shared/ui/redesigned/Text";
import { Button } from "@/shared/ui/redesigned/Button";

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, author, onEdit, views, createdAt } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();

        return (
            <VStack gap="32" className={classNames("", {}, [className])}>
                <HStack gap="8">
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack>
                <Button onClick={onEdit}>{t("Редагувати")}</Button>
                <Text text={t("{{count}} Переглядів", { count: views })} />
            </VStack>
        );
    },
);
