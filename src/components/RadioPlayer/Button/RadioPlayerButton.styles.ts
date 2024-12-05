import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '@/components/Common/Button/Button.styles';

export const RadioPlayerButtonContainer = styled(ButtonContainer)<{ isLoading: boolean }>`
    
    height: 40px;
    width: 40px;
    text-align: center;
    transition: all var(--transition-default);
    box-shadow: none;
    &:hover {
        background: ${({ isLoading }) => (isLoading && 'transparent')};
    } 
`;

export const RadioPlayerButtonTitle = styled(ButtonTitle)`
    display: 'none';
`;

export const RadioPlayerButtonIcon = styled(ButtonIcon)`
    margin: 0 auto;
    color: var(--nav-icon-color);
    font-size: var(--nav-icon-size);
`;