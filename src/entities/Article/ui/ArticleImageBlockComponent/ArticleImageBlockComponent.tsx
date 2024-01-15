import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text as TextDeprecated, TextAlign } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleImageBlockComponent.module.scss";
import { ToggleFeatures } from "@/shared/features";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Text
                                text={block.title}
                                className={cls.title}
                                align="center"
                            />
                        }
                        off={
                            <TextDeprecated
                                text={block.title}
                                className={cls.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
