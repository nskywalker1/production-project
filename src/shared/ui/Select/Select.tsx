import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;

    readonly?: boolean;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = memo(({
    className, label, options, readonly, value, onChange,
}: SelectProps) => {
    const mods: Mods = {

    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option value={opt.value} key={opt.value}>
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label
                && (
                    <span className={cls.label}>
                        {`${label}>`}
                    </span>
                )}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
});
