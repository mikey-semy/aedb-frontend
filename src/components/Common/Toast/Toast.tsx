import { useEffect } from 'react';
import { ToastTypes } from './Toast.types';
import {
    ToastContainer,
    IconWrapper,
    Content,
    Title,
    Message,
    CloseButton
} from './Toast.styles';
import { TOAST_ICONS } from './Toast.constants';
import { MdClose } from 'react-icons/md';

const Toast: React.FC<ToastTypes & {onClose: () => void}> = ({
    type,
    title,
    message,
    duration = 5000, // 5 секунд по умолчанию
    onClose
}) => {

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const Icon = TOAST_ICONS[type];

    return (
        <ToastContainer $type={type}>
            <CloseButton onClick={onClose}>
                <MdClose size={20} />
            </CloseButton>
            <IconWrapper $type={type}>
                <Icon size={20} />
            </IconWrapper>
            <Content>
                {title && <Title>{title}</Title>}
                <Message>{message}</Message>
            </Content>
        </ToastContainer>
    );
};

export default Toast;