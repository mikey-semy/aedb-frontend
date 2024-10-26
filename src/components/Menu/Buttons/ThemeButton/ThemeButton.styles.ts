import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../common/Button/Button.styles';

export const ThemeButtonContainer = styled(ButtonContainer) <{ isCollapsed: boolean }>`
    

    position: relative;
    margin-top: auto;
    width: ${props => props.isCollapsed ? '40px' : '100%'};
    text-align: center;
    transition: all .3s ease-in-out;

    @media (max-width: 1024px) {
        display: block;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        width: 30px;
        height: 60px;
        background: white;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
        border-radius: 0 5px 5px 0;
        z-index: 1000;
    }
`;

export const ThemeButtonTitle = styled(ButtonTitle) <{ isCollapsed: boolean }>`
    display: ${props => props.isCollapsed ? 'none' : 'block'};
`;

export const ThemeButtonIcon = styled(ButtonIcon)`
    font-size: 26px;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;