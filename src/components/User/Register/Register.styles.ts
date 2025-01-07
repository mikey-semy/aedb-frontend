import styled from "styled-components";

export const RegisterContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const RegisterSection = styled.section`
    background: var(--content-background);
    border-radius: var(--border-radius-default);
    margin-bottom: 24px;
    box-shadow: var(--box-shadow-default);
`;

export const RegisterContent = styled.div`
    padding: 24px;
`;

export const RegisterHeader = styled.div`
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-color);
`;

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;
    width: 100%;
`;

export const RegisterTitle = styled.h1`
    font-family: var(--content-header-font);
    font-size: 18px;
    font-weight: 600;
    color: var(--content-header-color);
    margin: 0;
`;

export const RegisterButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-family: var(--logo-font);
`;

export const RegisterButtonIcon = styled.span`
    display: none;
`;

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 10px;
    height: 40px;
`;

export const EmptyContainer = styled.div`
    display: flex;
    margin-top: auto;
    margin-bottom: 10px;
    height: 40px;
`;