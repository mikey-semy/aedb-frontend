import React from 'react';
import { useContentData } from '@/contexts';
import { ContentProps } from './Content.types';
import { ContentContainer } from './Content.styles';

import ContentHeader from './ContentHeader/ContentHeader';
import ContentToolbar from './ContentToolbar/ContentToolbar';

const Content: React.FC<ContentProps> = ({ children }) => {
    const { contentData } = useContentData();

    return (
        <>
            <ContentHeader contentData={contentData} />
            <ContentToolbar contentData={contentData}>
                {contentData.toolbarContent}
            </ContentToolbar>
            <ContentContainer>
                {children}
            </ContentContainer>
        </>
    );
};

export default Content;
