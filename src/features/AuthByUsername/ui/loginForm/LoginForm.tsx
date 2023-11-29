import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface loginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: loginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                autofocus
                className={cls.input}
                placeholder={t('Введіть username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введіть пароль')}
            />
            <Button className={cls.loginBtn}>
                {t('Увійти')}
            </Button>
        </div>
    );
};
