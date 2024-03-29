import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Text } from "@/shared/ui/deprecated/Text/Text";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const ArticlePageGreeting = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const onClose = () => setIsOpen(false);

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Text
                title={t("Ласкаво просимо на сторінку статей")}
                text={t("Тут ви можете читати статті на різні теми")}
            />
        </Modal>
    );
};
