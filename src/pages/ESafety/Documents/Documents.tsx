import React from 'react';
import { DocumentsData } from './Documents.data';
import { Lists } from '../../../components';

const DocumentsList: React.FC = () => {
    return (
        <Lists
            listItems={DocumentsData.map((item) => ({
                content: (
                    <>
                        {item.link && (
                            <a href={item.link} target="_blank">
                                <span>{item.title} ({item.label})</span>
                            </a>
                        )}
                        {!item.link && (
                            <span>{item.title} ({item.label})</span>
                        )}
                    </>
                ),
            }))}
            bordered
        />
    );
};

export default DocumentsList;
