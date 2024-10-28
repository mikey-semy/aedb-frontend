import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../common/Button/Button.styles';

export const ThemeButtonContainer = styled(ButtonContainer)`
    margin-top: auto;
    width: '40px';
    text-align: center;
    transition: all var(--transition-default);
`;

export const ThemeButtonTitle = styled(ButtonTitle)`
    display: 'none';
`;

export const ThemeButtonIcon = styled(ButtonIcon)`
    color: var(--nav-icon-color);
    font-size: var(--nav-icon-size);
`;