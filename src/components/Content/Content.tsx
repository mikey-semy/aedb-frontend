import React, { ReactNode } from 'react';
import { ContentContainer } from './Content.styles';
import ContentHeader from './ContentHeader/ContentHeader';
import { useContentData } from '@/contexts';

interface ContentProps {
  children: ReactNode; // Указываем, что children - это ReactNode
}
const Content: React.FC<ContentProps> = ({ children }) => {
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
