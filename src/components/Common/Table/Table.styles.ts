import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
  
    table {
        width: 100%;
        border-collapse: collapse;
    }
`;

export const TableHeader = styled.th<{ sortable?: boolean }>`
    padding: 12px;
    text-align: left;
    background-color: #f5f5f5;
    cursor: ${props => props.sortable ? 'pointer' : 'default'};
  
    &:hover {
        background-color: ${props => props.sortable ? '#e8e8e8' : '#f5f5f5'};
    }
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #fafafa;
    }
  
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const TableCell = styled.td`
    padding: 12px;
    border-bottom: 1px solid #e8e8e8;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px 0;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 10px;
`;