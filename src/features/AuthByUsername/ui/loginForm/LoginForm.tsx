import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Input } from "@/shared/ui/redesigned/Input";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginByUsername } from "../../model/services/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { ToggleFeatures } from "@/shared/features";
import { Button } from "@/shared/ui/redesigned/Button";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const forceUpdate = useForceUpdate();
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, username, password, onSuccess, forceUpdate]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="16"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t("Форма авторизації")} />
                        {error && (
                            <Text
                                text={t("Ви ввели невірний логін або пароль")}
                                variant="error"
                            />
                        )}
                        <Input
                            type="text"
                            autofocus
                            className={cls.input}
                            onChange={onChangeUsername}
                            value={username}
                            placeholder={t("Введіть username")}
                        />
                        <Input
                            type="text"
                            className={cls.input}
                            value={password}
                            onChange={onChangePassword}
                            placeholder={t("Введіть пароль")}
                        />
                        <Button
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            variant="outline"
                            disabled={isLoading}
                        >
                            {t("Увійти")}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t("Форма авторизації")} />
                        {error && (
                            <TextDeprecated
                                text={t("Ви ввели невірний логін або пароль")}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            type="text"
                            autofocus
                            className={cls.input}
                            onChange={onChangeUsername}
                            value={username}
                            placeholder={t("Введіть username")}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            value={password}
                            onChange={onChangePassword}
                            placeholder={t("Введіть пароль")}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            theme={ButtonTheme.OUTLINE}
                            disabled={isLoading}
                        >
                            {t("Увійти")}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
