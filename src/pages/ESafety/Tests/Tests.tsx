import React from 'react';
import { TestsData } from './Tests.data';
import { Lists } from '@/components';

const TestsList: React.FC = () => {
    return (
        <Lists
            listItems={TestsData.map((item) => ({
                content: (
                    <>
                        {item.link && (
                            <a href={item.link} target="_blank">
                                <span>{item.label}</span>
                            </a>
                        )}
                        {!item.link && (
                            <span>{item.label}</span>
                        )}
                    </>
                ),
            }))}
            bordered
        />     
    );
};

export default TestsList;
