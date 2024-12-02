import styled from "styled-components";

export const LoginContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background: var(--content-background);
    border-radius: var(--border-radius-default);
    box-shadow: var(--box-shadow-default);
`;

export const LoginTitle = styled.h1`
    font-family: var(--content-header-font);
    font-size: 24px;
    color: var(--content-header-color);
    text-align: center;
    margin-bottom: 20px;
`;

export const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-family: var(--logo-font);
`;

export const LoginButtonIcon = styled.span`
    display: none;
`;