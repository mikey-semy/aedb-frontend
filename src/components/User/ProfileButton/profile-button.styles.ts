import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '@/components/Common/Button/Button.styles';

export const ProfileButtonContainer = styled(ButtonContainer)`
    height: 40px;
    width: 40px;
    text-align: center;
    transition: all var(--transition-default);
    box-shadow: none;
`;

export const ProfileButtonTitle = styled(ButtonTitle)`
    font-family: var(--font-default);
    font-size: 14px;
    font-weight: 600;
`;

export const ProfileButtonIcon = styled(ButtonIcon)`
    color: var(--nav-icon-color);
    font-size: var(--nav-icon-size);
`;