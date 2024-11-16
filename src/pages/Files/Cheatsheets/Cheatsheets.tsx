import React from 'react';
import { CheatsheetsTypes } from './Cheatsheets.types';

const Cheatsheets: React.FC<CheatsheetsTypes> = ({ searchValue }) => {

    return (
        <>  
            <h1>{searchValue}</h1>
        </>
    );
};

export default Cheatsheets;