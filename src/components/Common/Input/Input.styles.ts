import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 280px;
`;

export const InputField = styled.input<{ $hasError?: boolean }>`
    padding: 8px 12px;
    border: none;
    border-radius: var(--border-radius-default);
    box-shadow: ${props => props.$hasError ?
        '0 0 15px var(--error-color), var(--box-shadow-default)' :
        'var(--box-shadow-default)'};
    transition: box-shadow 0.3s ease;
    background-color: var(--input-background);
    color: var(--input-color);
    font-size: 16px;
    margin-bottom: 20px;

    &:focus {
        outline: none;
        border-color: var(--input-focus-color);
    }

    &:disabled {
        background-color: var(--input-disabled-background);
        color: var(--input-disabled-color);
        cursor: not-allowed;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {

        -webkit-text-fill-color: var(--input-color);
        -webkit-box-shadow: ${props => props.$hasError ?
            '0 0 10px var(--error-color), var(--box-shadow-default), 0 0 0px 1000px var(--input-background) inset' :
            'var(--box-shadow-default), 0 0 0px 1000px var(--input-background) inset'};
        font-size: 16px !important;
        transition: all 0s 50000s, background-color 0s, -webkit-box-shadow 0s;
        caret-color: var(--input-color);
    }

    &::-webkit-validation-bubble-message {
        background: var(--content-background);
        border: none;
        box-shadow: var(--box-shadow-default);
        color: var(--content-color);
        padding: 8px;
        border-radius: var(--border-radius-default);
    }

    &::-webkit-validation-bubble-arrow {
        background: var(--content-background);
        border: none;
    }

    &[type="file"] {
        position: relative;
        padding: 8px 8px 8px 120px;
        box-shadow: none;
        background-color: var(--input-file-button-background);
        color: var(--input-file-button-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;


        &::-webkit-file-upload-button {
            visibility: hidden;
            width: 0;
        }
        &::before {
            content: 'Выбрать файл';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            display: inline-flex;
            align-items: center;
            padding: 0 12px;
            border: 1px solid var(--input-file-button-border-color);
            border-radius: var(--border-radius-default);
            cursor: pointer;
        }
    }
`;

export const InputLabel = styled.label`
    color: var(--input-label-color);
    font-size: 14px;
`;

export const ErrorText = styled.span`
    color: var(--error-color);
    font-size: 12px;
`;
