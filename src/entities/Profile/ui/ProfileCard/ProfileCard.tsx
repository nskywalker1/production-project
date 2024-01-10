import { useTranslation } from "react-i18next";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text";
import { Input } from "@/shared/ui/deprecated/Input";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
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

export const ProfileCard = (props: ProfileCardProps) => {
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
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Сталася помилка під час завантаження профілю")}
                    text={t("Спробуйте оновити сторінку")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ProfileCard, {}, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                data-testid="ProfileCard.firstname"
                value={data?.first}
                placeholder={t("Ваше імя")}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                data-testid="ProfileCard.lastname"
                value={data?.lastname}
                placeholder={t("Ваше прізвище")}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t("Ваш вік")}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t("Ваше місто")}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t("Ваш нікнейм")}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                className={cls.input}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                className={cls.input}
                onChange={onChangeCountry}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t("Ваша аватарка")}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
        </VStack>
    );
};
