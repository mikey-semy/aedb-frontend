import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const Selected = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: var(--border-radius-default, 5px);
    cursor: pointer;
    background-color: #fff;
    box-shadow: var(--box-shadow-default);
`;

export const OptionsList = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
`;

export const Option = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;