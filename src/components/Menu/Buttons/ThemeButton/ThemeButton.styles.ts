import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../common/Button/Button.styles';

export const ThemeButtonContainer = styled(ButtonContainer) <{ isCollapsed: boolean }>`
    margin-top: auto;
    width: ${props => props.isCollapsed ? '40px' : '100%'};
    text-align: center;
    transition: all var(--transition-default);
`;

export const ThemeButtonTitle = styled(ButtonTitle) <{ isCollapsed: boolean }>`
    display: ${props => props.isCollapsed ? 'none' : 'block'};
`;

export const ThemeButtonIcon = styled(ButtonIcon)`
    color: var(--nav-icon-color);
    font-size: var(--nav-icon-size);
`;