import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/redesigned/Stack";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";
import { ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/redesigned/Card/Card";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card max padding="24" border="partial">
                        <HStack
                            data-testid="AddCommentForm"
                            justify="between"
                            max
                            gap="16"
                            className={classNames(
                                cls.AddCommentFormRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <Input
                                className={cls.input}
                                onChange={onCommentTextChange}
                                data-testid="AddCommentForm.Input"
                                placeholder={t("Введіть текст коментаря")}
                                value={text}
                            />
                            <Button
                                data-testid="AddCommentForm.Button"
                                variant="outline"
                                onClick={onSendHandler}
                            >
                                {t("Відправити")}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        data-testid="AddCommentForm"
                        justify="between"
                        max
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            className={cls.input}
                            onChange={onCommentTextChange}
                            data-testid="AddCommentForm.Input"
                            placeholder={t("Введіть текст коментаря")}
                            value={text}
                        />
                        <ButtonDeprecated
                            data-testid="AddCommentForm.Button"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                        >
                            {t("Відправити")}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
