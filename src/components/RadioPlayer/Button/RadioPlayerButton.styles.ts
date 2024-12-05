import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '@/components/Common/Button/Button.styles';

export const RadioPlayerButtonContainer = styled(ButtonContainer)<{ isLoading: boolean }>`
    height: 40px;
    width: 40px;
    text-align: center;
    transition: all var(--transition-default);
    box-shadow: none;
    padding: ${({ isLoading }) => (isLoading ? '0' : '0 4px')};
`;

export const RadioPlayerButtonTitle = styled(ButtonTitle)`
    display: 'none';
`;

export const RadioPlayerButtonIcon = styled(ButtonIcon)`
    color: var(--nav-icon-color);
    font-size: var(--nav-icon-size);
`;