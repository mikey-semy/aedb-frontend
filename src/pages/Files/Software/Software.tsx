import React from 'react';
import { SoftwareTypes } from './Software.types';

const Software: React.FC<SoftwareTypes> = ({ searchValue }) => {
    
    
    return (
        <>  
            <h1>{searchValue}</h1>
        </>
    );
};

export default Software;