import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface loginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: loginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    console.log(error);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизації')} />
            {error && <Text text={t('Ви ввели невірний логін або пароль')} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                autofocus
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
                placeholder={t('Введіть username')}
            />
            <Input
                type="text"
                className={cls.input}
                value={password}
                onChange={onChangePassword}
                placeholder={t('Введіть пароль')}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
            >
                {t('Увійти')}
            </Button>
        </div>
    );
});
