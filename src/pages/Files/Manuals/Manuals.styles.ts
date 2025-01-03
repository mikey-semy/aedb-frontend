import styled from 'styled-components';
import { ListItem } from '@/components/Common/List/List.styles';

export const ListItemManuals = styled(ListItem)`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ListItemContentHeader = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
`;

export const CategoryName = styled.span`
  color: var(--color-text-secondary);
  font-size: 12px;
  font-weight: 600;
  &:after {
    content: '→';
    margin-left: 12px;
  }
`;

export const GroupName = styled.span`
  color: var(--color-text-secondary);
  font-size: 12px;
`;

export const ManualLink = styled.a`
  text-decoration: none;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;