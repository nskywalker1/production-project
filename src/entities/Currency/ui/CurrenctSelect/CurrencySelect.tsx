import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { memo, useCallback } from 'react';

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
    const {
        value, onChange, className, readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажіть валюту')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />
    );
});
