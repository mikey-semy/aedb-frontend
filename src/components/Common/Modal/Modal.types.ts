import React from 'react';

import { IconType } from 'react-icons';

export interface ModalRef {
  open: () => void;
  close: () => void;
}
export interface ModalTypes {
    $isOpen?: boolean;
    title?: string;
    openButtonTitle?: string;
    openButtonIcon?: IconType;
    openButtonStyle?: React.ComponentType;
    openButtonIconStyle?: React.ComponentType;
    openButtonTitleStyle?: React.ComponentType;
    children: React.ReactNode;
    appendTo?: HTMLElement | null;
    onSubmit?: (data: any) => void;
    onCancel?: () => void;
    renderOpenButton?: boolean;

    ref?: React.RefObject<ModalRef>;
}
