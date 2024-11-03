import React from 'react';
import { Button } from '../../../../../components';
import { OpenButtonTypes } from './OpenButton.types';

const OpenButton: React.FC<OpenButtonTypes> = ({ as, iconAs, titleAs, onClick, icon, title }) => {

    return (
        <Button
            as={as}
            iconAs={iconAs}
            icon={icon}
            titleAs={titleAs}
            title={title}
            onClick={onClick}
        />
    );
};
export default OpenButton;