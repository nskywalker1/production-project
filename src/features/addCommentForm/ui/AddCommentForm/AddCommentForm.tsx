import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/Stack";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

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
            <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
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
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t("Відправити")}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
