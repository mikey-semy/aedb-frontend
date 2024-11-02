import styled from 'styled-components';

export const TreeContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: var(--border-default);
    border-radius: var(--border-radius-default, 5px);
    box-shadow: var(--box-shadow-default);
    height: 100%;
    overflow-y: auto;
    
`;


export const TreeNode = styled.div`
  margin-bottom: 5px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const TreeFolder = styled.span``;
export const TreeFile = styled.span``;

export const TreeNodeLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-right: 10px;
  padding-bottom: 5px;
  cursor: pointer;
`;

export const TreeNodeChildren = styled.div`
  margin-left: 20px;
`;