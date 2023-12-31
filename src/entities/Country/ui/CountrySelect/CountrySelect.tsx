import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    value?: Country;
    className?: string;
    onChange?: (value: Country) => void
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
    const {
        value, onChange, className, readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            className={classNames('', {}, [className])}
            defaultValue={t('Укажіть країну')}
            label={t('Укажіть країну')}
            items={options}
            direction="top right"
        />
    );
});
