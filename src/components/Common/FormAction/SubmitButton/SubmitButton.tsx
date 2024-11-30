import React from 'react';
import { Button } from '@/components';
import { MdSend } from 'react-icons/md';
import { SubmitButtonContainer, SubmitButtonIcon } from './SubmitButton.styles';
import { SubmitButtonTypes } from './SubmitButton.types';

const SubmitButton: React.FC<SubmitButtonTypes> = ({ onClick, ...props }) => {

    return (
        <Button
            type="submit"
            as={SubmitButtonContainer}
            iconAs={SubmitButtonIcon}
            icon={ MdSend }
            title={props.title}
            onClick={onClick}
        />
    );
};
export default SubmitButton;