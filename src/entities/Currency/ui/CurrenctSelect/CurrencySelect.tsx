import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";
import { ToggleFeatures } from "@/shared/features";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popups";
import { ListBox } from "@/shared/ui/redesigned/Popups";

interface CurrencySelectProps {
    value?: Currency;
    className?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UAH, content: Currency.UAH },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const { value, onChange, className, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const currencyProps = {
        className,
        onChange: onChangeHandler,
        value,
        items: options,
        direction: "top right" as const,
        readonly,
        defaultValue: t("Укажіть валюту"),
        label: t("Укажіть валюту"),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...currencyProps} />}
            off={<ListBoxDeprecated {...currencyProps} />}
        />
    );
});
