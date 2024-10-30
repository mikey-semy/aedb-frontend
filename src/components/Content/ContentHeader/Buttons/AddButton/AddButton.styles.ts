import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../../Common/Button/Button.styles';

export const AddButtonContainer = styled(ButtonContainer)`
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

`;

export const AddButtonTitle = styled(ButtonTitle)`
    color: var(--button-add-color, #FFFFFF);
    font-family: var(--button-add-font, 'Inter');
    font-size: var(--button-add-font-size, 14px);
    text-transform: uppercase;
`;

export const AddButtonIcon = styled(ButtonIcon)`
    color: var(--button-add-color, #FFFFFF);
    font-size: var(--button-add-font-size, 14px);
    min-width: var(--button-add-font-size, 14px);
    min-height: var(--button-add-font-size, 14px);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;