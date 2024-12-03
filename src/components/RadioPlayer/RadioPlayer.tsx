import React from 'react';
import { RadioPlayerButton, RadioPlayerMenu } from './index';
import { RadioPlayerContainer } from './RadioPlayer.styles';

const RadioPlayer: React.FC = () => {

    return (
        <RadioPlayerContainer>
            <RadioPlayerButton />
            <RadioPlayerMenu />
        </RadioPlayerContainer>
    );
};
export default RadioPlayer;