import styled from 'styled-components';

export const RadioPlayerContainer = styled.div`
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const RadioPlaylist = styled.div`
    margin-top: 10px;
`;

export const RadioButton = styled.button`
    background-color: #ffffff;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    padding: 8px;
    margin: 4px 0;
    cursor: pointer;
    width: 100%;
    text-align: left;

    &:hover {
        background-color: #f1f8ff;
    }

    &:focus {
        outline: none;
        border-color: #0366d6;
    }
`;

export const Dropdown = styled.select`
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #0366d6;
    }
`;