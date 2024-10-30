import React from 'react';
import { ContentContainer } from './Content.styles';
import { ContentContainerProps } from './Content.types';
import ContentHeader from './ContentHeader/ContentHeader';
import { useContentData } from '../../contexts';
const Content: React.FC<ContentContainerProps> = ({children}) => {
  const { contentData } = useContentData();
  return (
    <>
      <ContentHeader contentData={contentData} />
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  );
};

export default Content;