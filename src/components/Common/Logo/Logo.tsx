import React from 'react';
import { LogoContainer, LogoLink, LogoText } from './Logo.styles';
import { LogoData } from './Logo.data';

const Logo: React.FC<{ $isCollapsed: boolean }> = ({ $isCollapsed }) => {
    return (
        <LogoContainer>
            <LogoLink to={LogoData.path} $isCollapsed={$isCollapsed}>
                <LogoText $isCollapsed={$isCollapsed}>
                    <span>{LogoData.text}</span>
                </LogoText>
            </LogoLink>
        </LogoContainer>
    )
}
export default Logo;