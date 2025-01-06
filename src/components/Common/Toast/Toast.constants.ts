import {
    MdCheckCircle as CheckCircleIcon,
    MdError as ErrorIcon,
    MdWarning as WarningIcon,
    MdInfo as InfoIcon
} from 'react-icons/md';

export const TOAST_COLORS = {
    success: {
        background: '#4CAF50',
        icon: '#E8F5E9'
    },
    error: {
        background: '#F44336',
        icon: '#FFEBEE'
    },
    warning: {
        background: '#FF9800',
        icon: '#FFF3E0'
    },
    info: {
        background: '#2196F3',
        icon: '#E3F2FD'
    }
};

export const TOAST_ICONS = {
    success: CheckCircleIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon
};