import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../../Common/Button/Button.styles';

export const ContentHeaderButtonContainer = styled(ButtonContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-add-bg-color, #7839CD);
    border-radius: var(--border-radius-default, 5px);
    height: 48px;
    width: 218px;
    padding: 18px 12px;
    text-align: center;
    transition: all var(--transition-default);
    cursor: pointer;
    user-select: none;

    @media (max-width: 1024px) {
        width: 140px;
        height: 40px;
        padding: 12px 8px;
    }
`;

export const ContentHeaderButtonTitle = styled(ButtonTitle)`
    color: var(--button-add-color, #FFFFFF);
    font-family: var(--content-header-button-font, 'Inter');
    font-size: var(--button-add-font-size, 14px);
    text-transform: uppercase;

    @media (max-width: 1024px) {
        font-size: 12px;
    }
`;

export const ContentHeaderButtonIcon = styled(ButtonIcon)`
    color: var(--button-add-color, #FFFFFF);
    font-size: var(--button-add-font-size, 18px);
    min-width: var(--button-add-font-size, 14px);
    min-height: var(--button-add-font-size, 14px);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    @media (max-width: 1024px) {
        font-size: 12px;
    }
`;