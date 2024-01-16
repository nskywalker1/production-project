import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Button } from "@/shared/ui/redesigned/Button";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/redesigned/Card";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { t } = useTranslation("profile");
        const { className } = props;
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();
        const profileData = useSelector(getProfileData);
        const authData = useSelector(getUserAuthData);
        const canEdit = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card border="partial" padding="24" max>
                        <HStack
                            max
                            justify="between"
                            className={classNames("", {}, [className])}
                        >
                            <Text title={t("Профіль")} />
                            {canEdit && (
                                <>
                                    {readonly ? (
                                        <Button
                                            data-testid="EditableProfileCardHeader.EditButton"
                                            variant="outline"
                                            onClick={onEdit}
                                        >
                                            {t("Редагувати")}
                                        </Button>
                                    ) : (
                                        <HStack gap="8">
                                            <Button
                                                color="error"
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                                variant="outline"
                                                onClick={onCancelEdit}
                                            >
                                                {t("Скасувати")}
                                            </Button>
                                            <Button
                                                color="success"
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                                variant="outline"
                                                onClick={onSave}
                                            >
                                                {t("Зберегти")}
                                            </Button>
                                        </HStack>
                                    )}
                                </>
                            )}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        max
                        justify="between"
                        className={classNames("", {}, [className])}
                    >
                        <TextDeprecated title={t("Профіль")} />
                        {canEdit && (
                            <>
                                {readonly ? (
                                    <ButtonDeprecated
                                        data-testid="EditableProfileCardHeader.EditButton"
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                    >
                                        {t("Редагувати")}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap="8">
                                        <ButtonDeprecated
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                        >
                                            {t("Скасувати")}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                        >
                                            {t("Зберегти")}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                }
            />
        );
    },
);
