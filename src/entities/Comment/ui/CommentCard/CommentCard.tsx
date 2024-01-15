import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import cls from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { getRouteProfile } from "@/shared/consts/router";
import { ToggleFeatures, toggleFeatures } from "@/shared/features";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Card } from "@/shared/ui/redesigned/Card";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: "isAppRedesigned",
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesigned,
    });

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" border="round" max>
                    <VStack
                        data-testid="CommentCard.Content"
                        max
                        gap="8"
                        className={classNames("", {}, [className])}
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap="8">
                                {comment.user.avatar ? (
                                    <Avatar
                                        size={30}
                                        src={comment.user.avatar}
                                    />
                                ) : null}
                                <Text text={comment.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text className={cls.text} text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    data-testid="CommentCard.Content"
                    max
                    gap="8"
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar ? (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                        ) : null}
                        <TextDeprecated
                            className={cls.username}
                            title={comment.user.username}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment.text} />
                </VStack>
            }
        />
    );
};
