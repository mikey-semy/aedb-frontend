import React from 'react';
import { CheatsheetsTypes } from './Cheatsheets.types';
import { Empty } from '@/components';

const Cheatsheets: React.FC<CheatsheetsTypes> = ({ searchValue }) => {

    return (
        <>  
            <Empty />
        </>
    );
};

export default Cheatsheets;