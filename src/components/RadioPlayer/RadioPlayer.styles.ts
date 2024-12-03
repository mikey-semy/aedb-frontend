import styled from 'styled-components';

export const RadioPlayerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: var(--color-background-secondary);
    height: 100%;
    width: 240px;
    margin: 0 40px;

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 10px;
        width: 240px;
        height: 150%;
        box-shadow: var(--box-shadow-default);
        z-index: -1;

        
    }

    @media (max-width: 768px) {
        width: 50px;

        &::before {
            display: none;
        }    
    }
`;