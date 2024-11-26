import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const TabItems = styled.ul`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--tab-background, #FFFFFF);
    gap: 32px;
    height: var(--tab-height, 48px);
    width: 100%;
    padding: 0 12px;
    border-top-right-radius: var(--border-radius-default, 5px);
    border-top-left-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    z-index: 2;

    @media (max-width: 1024px) {
        border-radius: 0;
        position: fixed;
        top: var(--tab-fixed-top-mobile, 180px);
        left: 0;
        height: var(--tab-height-mobile, 48px);
        margin-left: 10px;
        gap: 20px;
    }
    

`;

export const TabItem = styled.li<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: var(--tab-font, 'Inter');
    font-size: var(--tab-font-size, 16px);
    font-weight: var(--tab-font-weight, 600);
    color: var(--tab-color, #000000);
    cursor: pointer;
    transition: all var(--transition-default);
    
    color: ${props => props.$isActive ? 'var(--tab-active-color, #000000)' : 'var(--tab-color, #000000)'};
    border-bottom: ${props => props.$isActive ? 'var(--tab-active-border)' : 'transparent'};
    
    &:hover {
        color: var(--tab-hover-color, #424242);
    }
`;

export const TabContent = styled.div<{ $isActive: boolean }>`
    display: ${props => props.$isActive ? 'block' : 'none'};
    padding: 20px;
    width: 100%;
`;