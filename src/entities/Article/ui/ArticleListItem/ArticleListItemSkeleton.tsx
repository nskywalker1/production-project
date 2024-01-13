import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardRedesigned } from "@/shared/ui/deprecated/Card";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { ArticleView } from "../../model/consts/consts";
import cls from "./ArticleListItem.module.scss";
import { toggleFeatures } from "@/shared/features";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { Card } from "@/shared/ui/redesigned/Card";

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => {
    const { className, view } = props;

    toggleFeatures({
        name: "isAppRedesigned",
        off: () => SkeletonDeprecated,
        on: () => Skeleton,
    });

    toggleFeatures({
        name: "isAppRedesigned",
        off: () => CardRedesigned,
        on: () => Card,
    });

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(
                    toggleFeatures({
                        name: "isAppRedesigned",
                        off: () => cls.ArticleListItem,
                        on: () => cls.ArticleListItemRedesigned,
                    }),
                    {},
                    [className, cls[view]],
                )}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton className={cls.img} height={200} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
};
