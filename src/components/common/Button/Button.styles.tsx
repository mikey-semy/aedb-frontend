import styled from 'styled-components';

export const ButtonContainer = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.3s ease;
    
    &:hover {
        opacity: 0.7;
    }
`;

export const ButtonIcon = styled.span`
    display: flex;
    align-items: center;
`;

export const ButtonTitle = styled.span`
    display: block;
    transition: all 0.3s ease;
`;