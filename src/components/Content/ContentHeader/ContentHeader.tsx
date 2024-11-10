import React from 'react';
import { ContentData } from '@/contexts/Content/ContentContext';
import { ContentHeaderContainer, ContentCaptionContainer, ContentActionContainer,ContentCaption } from './ContentHeader.styles';
import { ContentHeaderButton } from './Buttons/ContentHeaderButton/ContentHeaderButton';

interface ContentHeaderProps {
    contentData: ContentData;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ contentData }) => {
    return (
        <ContentHeaderContainer>
            <ContentCaptionContainer>
                <ContentCaption>{contentData.caption}</ContentCaption>
            </ContentCaptionContainer>
            <ContentActionContainer>
                {contentData.onClick &&
                <ContentHeaderButton
                    onClick={contentData.onClick}
                    icon={contentData.icon}
                    title={contentData.title}
                /> 
                }
            </ContentActionContainer>
            
        </ContentHeaderContainer>
    );
};

export default ContentHeader;