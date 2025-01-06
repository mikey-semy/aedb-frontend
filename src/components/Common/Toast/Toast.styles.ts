import styled from 'styled-components';
import { TOAST_COLORS } from './Toast.constants';
import { ToastType } from './Toast.types';

export const ToastContainer = styled.div<{$type: ToastType}>`
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 16px;
    background: ${({$type}) => TOAST_COLORS[$type].background};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    margin-bottom: 8px;
    max-width: 360px;
    animation: slideIn 0.2s ease-out;
`;

export const ToastWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const IconWrapper = styled.div<{$type: ToastType}>`
    height: 100%;
    align-items: center;
    color: ${({$type}) => TOAST_COLORS[$type].icon};
    margin-right: 12px;
    flex-shrink: 0;
`;

export const Content = styled.div`
    flex-grow: 1;
`;

export const Title = styled.div`
    font-family: var(--font-default);
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 4px;
`;

export const Message = styled.div`
    font-family: var(--font-default);
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    padding: 4px;
    margin-left: 8px;
    flex-shrink: 0;

    &:hover {
        opacity: 1;
    }
`;