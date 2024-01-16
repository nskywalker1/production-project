import { useTranslation } from "react-i18next";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/redesigned/Popups";
import { getFeatureFlag, updateFeatureFlag } from "@/shared/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/redesigned/Text";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const authData = useSelector(getUserAuthData);
    const isAppRedesigned = getFeatureFlag("isAppRedesigned");
    const forceUpdate = useForceUpdate();

    const items = [
        {
            content: t("Новий"),
            value: "new",
        },
        {
            content: t("Старий"),
            value: "old",
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedesigned: value === "new",
                    },
                }),
            ).unwrap();
            setIsLoading(false);
            forceUpdate();
        }
    };

    return (
        <HStack>
            <Text text={t("Оберіть варіант дизайну")} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    items={items}
                    onChange={onChange}
                    value={isAppRedesigned ? "new" : "old"}
                    className={classNames("UiDesignSwitcher", {}, [className])}
                />
            )}
        </HStack>
    );
});
