import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOption } from "@/shared/ui/deprecated/Select";
import { SortOrder } from "@/shared/types/sort";
import cls from "./ArticleSortSelector.module.scss";
import { ArticleSortField } from "@/entities/Article";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, sort, order } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("зростанню"),
            },
            {
                value: "desc",
                content: t("спаданню"),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("даті створення"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("заголовку"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("переглядам"),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t("Сортувати по")}
            />
            <Select
                className={cls.order}
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t("по")}
            />
        </div>
    );
};
