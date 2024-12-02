import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '@/components/Common/Button/Button.styles';

export const ContentHeaderButtonContainer = styled(ButtonContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-header-bg-color, #7839CD);
    border-radius: var(--border-radius-default, 5px);
    height: 48px;
    width: 218px;
    padding: 18px 12px;
    text-align: center;
    transition: all var(--transition-default);
    cursor: pointer;
    user-select: none;

    &:hover {
        background: var(--button-header-hover-background);
        color: var(--button-header-hover-color);
        opacity: 0.7;
    }
    &:active {
        background: var(--button-header-active-background);
        color: var(--button-header-active-color);
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    @media (max-width: 1024px) {
        width: 140px;
        height: 40px;
        padding: 12px 8px;
    }
`;

export const ContentHeaderButtonTitle = styled(ButtonTitle)`
    color: var(--button-header-color, #FFFFFF);
    font-family: var(--content-header-button-font, 'Inter');
    font-size: var(--button-header-font-size, 14px);
    text-transform: uppercase;

    @media (max-width: 1024px) {
        font-size: 12px;
    }
`;

export const ContentHeaderButtonIcon = styled(ButtonIcon)`
    color: var(--button-header-color, #FFFFFF);
    font-size: var(--button-header-font-size, 18px);
    min-width: var(--button-header-font-size, 14px);
    min-height: var(--button-header-font-size, 14px);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    @media (max-width: 1024px) {
        font-size: 12px;
    }
`;