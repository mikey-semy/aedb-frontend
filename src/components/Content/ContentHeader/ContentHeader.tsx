import React from 'react';
import { ContentHeaderContainer, ContentCaptionContainer, ContentActionContainer, ContentCaption } from './ContentHeader.styles';
import { ContentHeaderContainerTypes } from './ContentHeader.types';
import { AddButton } from './Buttons/AddButton/AddButton';

const ContentHeader: React.FC<ContentHeaderContainerTypes> = ({ contentData }) => {
  return (
    <ContentHeaderContainer>
        <ContentCaptionContainer>
            <ContentCaption>{contentData.caption}</ContentCaption>
        </ContentCaptionContainer>
        <ContentActionContainer>
            <AddButton
                onClick={contentData.onClick}
                icon={contentData.icon}
                title={contentData.title}
                />
        </ContentActionContainer>
    </ContentHeaderContainer>
  );
};

export default ContentHeader;