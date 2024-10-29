import React from 'react';
import { DocumentsData } from './Documents.data';

const DocumentsList: React.FC = () => {
    return (
        <>
            <p>Перечень документов для проверки знаний:</p>
            <ol>
                {DocumentsData.map((doc, index) => (
                    <li key={index}>
                        {doc.title} {doc.link && <a href={doc.link}>{doc.label}</a>}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default DocumentsList;
