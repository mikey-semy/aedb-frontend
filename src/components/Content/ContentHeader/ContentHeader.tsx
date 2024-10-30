import React from 'react';
import { ContentHeaderContainer, ContentCaptionContainer, ContentActionContainer, ContentCaption } from './ContentHeader.styles';
import { ContentHeaderContainerProps } from './ContentHeader.types';
import { AddButton } from './Buttons/AddButton/AddButton';
import { MdAdd } from 'react-icons/md';
const ContentHeader: React.FC<ContentHeaderContainerProps> = ({ contentData }) => {
  return (
    <ContentHeaderContainer>
        <ContentCaptionContainer>
            <ContentCaption>{contentData.caption}</ContentCaption>
        </ContentCaptionContainer>
        <ContentActionContainer>
            <AddButton
                onClick={() => console.log('Добавить вопрос')}
                icon={MdAdd}
                title={contentData.buttonTitle}
                />
        </ContentActionContainer>
    </ContentHeaderContainer>
  );
};

export default ContentHeader;