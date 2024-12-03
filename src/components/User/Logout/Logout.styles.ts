import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '@/components/Common/Button/Button.styles';

export const LogoutButton = styled(ButtonContainer)`
    height: 40px;
    width: 40px;
    text-align: center;
    transition: all var(--transition-default);
    box-shadow: none;
`;

export const LogoutButtonTitle = styled(ButtonTitle)`
    display: 'none';
`;

export const LogoutButtonIcon = styled(ButtonIcon)`
    color: var(--nav-icon-color);
    font-size: var(--nav-icon-size);
`;