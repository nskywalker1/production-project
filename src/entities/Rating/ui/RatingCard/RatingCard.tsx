import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Modal } from "@/shared/ui/redesigned/Modal";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
    ButtonSize,
} from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { ToggleFeatures } from "@/shared/features";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Input } from "@/shared/ui/redesigned/Input";
import { Text } from "@/shared/ui/redesigned/Text";
import { Button } from "@/shared/ui/redesigned/Button";
import { Card } from "@/shared/ui/redesigned/Card";

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        rate = 0,
        onCancel,
        onAccept,
        feedbackTitle,
        title,
        hasFeedback,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate || 0);
    const [feedback, setFeedback] = useState("");

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t("Ваш відгук")}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t("Ваш відгук")}
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <VStack gap="8" align="center">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={starsCount ? t("Дякую за оцінку!") : title}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={starsCount ? t("Дякую за оцінку!") : title}
                        />
                    }
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack gap="16" max justify="end">
                                    <Button
                                        onClick={acceptHandle}
                                        data-testid="RatingCard.Send"
                                        size="L"
                                    >
                                        {t("Відправити")}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack gap="16" max justify="end">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandle}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t("Закрити")}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={acceptHandle}
                                        data-testid="RatingCard.Send"
                                        theme={ButtonTheme.OUTLINE}
                                    >
                                        {t("Відправити")}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <ButtonDeprecated
                            fullWidth
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                        >
                            {t("Відправити")}
                        </ButtonDeprecated>
                        <ButtonDeprecated
                            fullWidth
                            onClick={acceptHandle}
                            theme={ButtonTheme.OUTLINE_RED}
                            size={ButtonSize.L}
                        >
                            {t("Відмінити")}
                        </ButtonDeprecated>
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    data-testid="RatingCard"
                    max
                    padding="24"
                    border="partial"
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    max
                    className={classNames("", {}, [className])}
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
