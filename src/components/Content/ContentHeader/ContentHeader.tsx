import React from 'react';
import { ContentData } from '../../../contexts/Content/ContentContext';

interface ContentHeaderProps {
    contentData: ContentData;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ contentData }) => {
    return (
        <header>
            <p>{contentData.caption}</p>
            {contentData.onClick && <button onClick={contentData.onClick}>{contentData.title}{contentData.icon && <contentData.icon />}</button>}
        </header>
    );
};

export default ContentHeader;