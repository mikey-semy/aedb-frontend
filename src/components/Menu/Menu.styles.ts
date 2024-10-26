import styled from 'styled-components';

export const MenuContainer = styled.div<{ isCollapsed: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.isCollapsed ? '50px' : '262px'};
    transition: width 0.3s ease-in-out;
    background: white;
    box-shadow: 0 0 0 1px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    @media (max-width: 1024px) {
        transform: translateX(${props => props.isCollapsed ? '-100%' : '0'});
        transition: transform 0.3s ease-in-out;
        width: 300px;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 50%;
    }
`;
