import React from 'react';
import { RadioPlayerButton, RadioPlayerDropdown } from './index';
import { RadioPlayerContainer } from './RadioPlayer.styles';

const RadioPlayer: React.FC = () => {

    return (
        <RadioPlayerContainer>
            <RadioPlayerButton />
            <RadioPlayerDropdown />
        </RadioPlayerContainer>
    );
};
export default RadioPlayer;