import React, { useEffect } from 'react';
import { ContentToolbarProps } from './ContentToolbar.types';
import { ContentToolbarContainer } from './ContentToolbar.styles';

const ContentToolbar: React.FC<ContentToolbarProps> = ({ contentData, children }) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--has-toolbar', contentData.isToolbar ? '1' : '0');
    }, [contentData.isToolbar]);

    return (
        <>
            {contentData.isToolbar && 
                <ContentToolbarContainer>
                    { children }
                </ContentToolbarContainer>
            }
        </>
    );
};

export default ContentToolbar;