import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);

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
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
