import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Modal } from "@/shared/ui/deprecated/Modal";
import { Input } from "@/shared/ui/deprecated/Input";
import { Button, ButtonTheme, ButtonSize } from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/deprecated/Drawer";

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
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t("Ваш відгук")}
            />
        </>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames("", {}, [className])}
        >
            <VStack gap="8" align="center">
                <Text title={starsCount ? t("Дякую за оцінку!") : title} />
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
                        <HStack gap="16" max justify="end">
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t("Закрити")}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                                data-testid="RatingCard.Send"
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t("Відправити")}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                        >
                            {t("Відправити")}
                        </Button>
                        <Button
                            fullWidth
                            onClick={acceptHandle}
                            theme={ButtonTheme.OUTLINE_RED}
                            size={ButtonSize.L}
                        >
                            {t("Відмінити")}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
