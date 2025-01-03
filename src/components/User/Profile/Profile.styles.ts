import styled from "styled-components";
import { InputLabel } from '@/components/Common/Input/Input.styles';

export const ProfileContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const ProfileSection = styled.section`
    background: var(--content-background);
    border-radius: var(--border-radius-default);
    margin-bottom: 24px;
    box-shadow: var(--box-shadow-default);
`;

export const ProfileHeader = styled.div`
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-color);
`;

export const ProfileTitle = styled.h2`
    font-family: var(--content-header-font);
    font-size: 18px;
    font-weight: 600;
    color: var(--content-header-color);
    margin: 0;
`;

export const ProfileContent = styled.div`
    padding: 24px;
`;

export const FormWithAvatar = styled.div`
    display: flex;
    gap: 40px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FormProfile = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;
    width: 100%;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ProfileInputLabel = styled(InputLabel)`
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
`;

export const AvatarUpload = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const AvatarPreview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border-color);
`;

export const AvatarInput = styled.input`
    display: none;
`;

export const AvatarLabel = styled.label`
    cursor: pointer;
    padding: 8px 16px;
    background: var(--button-background);
    color: var(--button-color);
    border-radius: var(--border-radius-default);
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;

export const ErrorContainer = styled.div`
    color: var(--error-color);
    font-size: 14px;
    margin-top: 8px;
`;

export const ProfileButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    min-width: 140px;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-family: var(--font-default);
`;

export const ProfileButtonIcon = styled.span`
    display: none;
`;
