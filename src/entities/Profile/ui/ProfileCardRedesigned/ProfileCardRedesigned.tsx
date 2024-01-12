import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Input } from "@/shared/ui/redesigned/Input";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { Text } from "@/shared/ui/redesigned/Text";
import { Profile } from "../../../../entities/Profile";
import { Card } from "@/shared/ui/redesigned/Card";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

interface ProfileCardRedesignedProps {
    className?: string;
    data?: Profile;
    error?: string;
    readonly?: boolean;
    isLoading?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;

    onChangeUsername?: (value?: string) => void;

    onChangeAvatar?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCardRedesigned = memo(
    (props: ProfileCardRedesignedProps) => {
        const {
            className,
            error,
            data,
            readonly,
            onChangeLastname,
            onChangeUsername,
            onChangeAvatar,
            onChangeCurrency,
            onChangeCountry,
            onChangeFirstname,
            onChangeAge,
            onChangeCity,
            isLoading,
        } = props;
        const { t } = useTranslation("profile");

        if (isLoading) {
            return (
                <Card padding="24" max>
                    <VStack gap="32">
                        <HStack max justify="center">
                            <Skeleton border="100%" width={128} height={128} />
                        </HStack>
                        <HStack gap="32" max>
                            <VStack gap="16" max>
                                <Skeleton width="100%" height={38} />
                                <Skeleton width="100%" height={38} />
                                <Skeleton width="100%" height={38} />
                                <Skeleton width="100%" height={38} />
                            </VStack>

                            <VStack gap="16" max>
                                <Skeleton width="100%" height={38} />
                                <Skeleton width="100%" height={38} />
                                <Skeleton width="100%" height={38} />
                                <Skeleton width="100%" height={38} />
                            </VStack>
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        if (error) {
            return (
                <HStack
                    justify="center"
                    max
                    className={classNames("", {}, [className])}
                >
                    <Text
                        variant="error"
                        title={t(
                            "Сталася помилка під час завантаження профілю",
                        )}
                        text={t("Спробуйте оновити сторінку")}
                        align="center"
                    />
                </HStack>
            );
        }

        return (
            <Card padding="24" max className={classNames("", {}, [className])}>
                <VStack gap="32">
                    {data?.avatar && (
                        <HStack justify="center" max>
                            <Avatar src={data?.avatar} />
                        </HStack>
                    )}
                    <HStack gap="24" max>
                        <VStack gap="16" max>
                            <Input
                                data-testid="ProfileCard.firstname"
                                value={data?.first}
                                label={t("Ваше імя")}
                                onChange={onChangeFirstname}
                                readonly={readonly}
                            />
                            <Input
                                data-testid="ProfileCard.lastname"
                                value={data?.lastname}
                                label={t("Ваше прізвище")}
                                onChange={onChangeLastname}
                                readonly={readonly}
                            />
                            <Input
                                value={data?.age}
                                label={t("Ваш вік")}
                                onChange={onChangeAge}
                                readonly={readonly}
                            />
                            <Input
                                value={data?.city}
                                label={t("Ваше місто")}
                                onChange={onChangeCity}
                                readonly={readonly}
                            />
                        </VStack>
                        <VStack gap="16" max>
                            <Input
                                value={data?.username}
                                label={t("Ваш нікнейм")}
                                onChange={onChangeUsername}
                                readonly={readonly}
                            />
                            <Input
                                value={data?.avatar}
                                label={t("Ваша аватарка")}
                                onChange={onChangeAvatar}
                                readonly={readonly}
                            />
                            <CurrencySelect
                                value={data?.currency}
                                onChange={onChangeCurrency}
                                readonly={readonly}
                            />
                            <CountrySelect
                                value={data?.country}
                                onChange={onChangeCountry}
                                readonly={readonly}
                            />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    },
);
