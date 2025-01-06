import styled from 'styled-components';
import { AvatarTypes } from './avatar.types';

export const AvatarContainer = styled.div<AvatarTypes>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const DefaultAvatar = styled.div<{ size: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    background: var(--primary-color, #6366f1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--logo-font);
    font-weight: 600;
    font-size: ${props => Math.max(props.size / 3, 12)}px;
    cursor: ${props => props.onClick ? 'pointer' : 'default'};
`;