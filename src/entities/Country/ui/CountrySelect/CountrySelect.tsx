import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { ToggleFeatures } from "@/shared/features";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popups";
import { ListBox } from "@/shared/ui/redesigned/Popups";

interface CountrySelectProps {
    value?: Country;
    className?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.France, content: Country.France },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Poland, content: Country.Poland },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const { value, onChange, className, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const countryProps = {
        onChange: onChangeHandler,
        value,
        readonly,
        className,
        defaultValue: t("Укажіть країну"),
        label: t("Укажіть країну"),
        items: options,
        direction: "top right" as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...countryProps} />}
            off={<ListBoxDeprecated {...countryProps} />}
        />
    );
});
