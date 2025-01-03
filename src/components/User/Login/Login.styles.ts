import styled from "styled-components";

export const FormLogin = styled.form<{ $hasError?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    min-height: 460px;
    max-width: 400px;
    padding: 40px;
    background: var(--content-background);
    border-radius: var(--border-radius-default);
    box-shadow: ${props => props.$hasError ?
        '0 0 10px var(--error-color), var(--box-shadow-default)' :
        'var(--box-shadow-default)'};
    transition: box-shadow 0.6s ease;
`;

export const FormLoginTopAction = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const FormLoginAction = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const LoginTitle = styled.h1`
    min-height: 32px;
    font-family: var(--logo-font);
    font-size: 32px;
    font-weight: 600;
    color: var(--content-header-color);
    text-align: center;
    margin-bottom: 20px;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;

export const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    min-width: 140px;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-family: var(--font-default);
`;

export const LoginButtonIcon = styled.span`
    display: none;
`;

export const LoginToResetPasswordButton = styled(LoginButton)`
    background: transparent;
    box-shadow: none;
    text-transform: none;
`;

export const AttemptsContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--logo-font);
    color: var(--content-header-color);
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;

export const EmptyContainer = styled.div`
    display: flex;
    margin-top: auto;
    margin-bottom: 10px;
    height: 40px;
`;

export const ErrorContainer = styled(EmptyContainer)`
    justify-content: center;
    align-items: center;
    font-family: var(--font-default);
    font-size: 12px;
    color: var(--content-header-color);
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;

export const InputHint = styled(ErrorContainer)``;