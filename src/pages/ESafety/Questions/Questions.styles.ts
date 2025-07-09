import styled from 'styled-components';
import { ListItem } from '@/Common/List';

export const QuestionItem = styled(ListItem)`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const QuestionHeader = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 8px;
`;

export const ThemeName = styled.span`
    color: var(--color-text-secondary);
    font-size: 12px;
    font-weight: 600;
    &:after {
        content: '→';
        margin-left: 12px;
    }
`;

export const QuestionText = styled.div`
    color: var(--color-text-primary);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
`;

export const AnswerText = styled.div`
    color: var(--color-text-secondary);
    font-size: 14px;
    margin-bottom: 8px;
`;

export const ReferenceText = styled.span`
    color: var(--color-text-secondary);
    font-size: 12px;
    font-style: italic;
`;
