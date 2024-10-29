import React from 'react';
import { TestsData } from './Tests.data';

const TestsList: React.FC = () => {
    return (
        <>
            <h3>Тестирование по электробезопасности (по темам):</h3>
            <ul>
                {TestsData.map((test, index) => (
                    <li key={index}>
                        <a href={test.link}>{test.label}</a>
                    </li>
                ))}
            </ul>
        </> 
    );
};

export default TestsList;
