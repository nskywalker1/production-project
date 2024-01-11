import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { TabItem, Tabs as TabsDeprecated } from "@/shared/ui/deprecated/Tabs";
import { ArticleType } from "@/entities/Article";
import { ToggleFeatures } from "@/shared/features";
import { Tabs } from "@/shared/ui/redesigned/Tabs";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("Всі статті"),
            },
            {
                value: ArticleType.IT,
                content: t("Айті"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("Економіка"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("Наука"),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    value={value}
                    onTabClick={onTabClick}
                    tabs={typeTabs}
                    className={classNames("", {}, [className])}
                />
            }
            off={
                <TabsDeprecated
                    value={value}
                    onTabClick={onTabClick}
                    tabs={typeTabs}
                    className={classNames("", {}, [className])}
                />
            }
        />
    );
});
