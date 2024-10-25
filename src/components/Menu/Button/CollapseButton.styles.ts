import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../common/Button/Button.styles';

export const CollapseButtonContainer = styled(ButtonContainer)<{ isCollapsed: boolean }>`
    margin-top: auto;
    width: ${props => props.isCollapsed ? '30px' : '100%'};
    text-align: center;
`;

export const CollapseButtonTitle = styled(ButtonTitle)<{ isCollapsed: boolean }>`
    display: ${props => props.isCollapsed ? 'none' : 'block'};
`;

export const CollapseButtonIcon = styled(ButtonIcon)<{ isCollapsed: boolean }>`
    font-size: 24px;
    
    transform: ${props => props.isCollapsed ? 'rotate(180deg)' : 'none'};
    transition: transform 0.3s ease;
`;