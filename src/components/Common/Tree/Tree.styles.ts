import styled from 'styled-components';

export const TreeContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: var(--border-default);
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
`;


export const TreeNode = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const TreeNodeLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const TreeNodeChildren = styled.div`
  margin-left: 20px;
`;