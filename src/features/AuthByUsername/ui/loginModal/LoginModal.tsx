import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal";
import { Loader } from "@/shared/ui/Loader";
import { LoginFormAsync } from "../loginForm/LoginForm.async";

interface loginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: loginModalProps) => (
    <Modal
        className={classNames("", {}, [className])}
        isOpen={isOpen}
        lazy
        onClose={onClose}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
