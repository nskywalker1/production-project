import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../loginForm/LoginForm';

interface loginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: loginModalProps) => (
    <Modal
        className={classNames(cls.loginModal, {}, [className])}
        isOpen={isOpen}
        lazy
        onClose={onClose}
    >
        <LoginForm />
    </Modal>
);
