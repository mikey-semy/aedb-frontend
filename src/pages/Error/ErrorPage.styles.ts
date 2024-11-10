import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

export const ErrorPageTitle = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
`;

export const ErrorPageText = styled.p`
    font-size: 24px;
    margin-bottom: 16px;
`;

export const ErrorPageMessage = styled.i`
    color: var(--accent-color);
`;