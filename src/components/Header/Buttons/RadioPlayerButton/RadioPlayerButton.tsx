import React from 'react';
import { Button } from '@/components';
import { usePlayer } from '@/contexts';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import { RadioPlayerButtonContainer, RadioPlayerButtonIcon} from './RadioPlayerButton.styles';

const RadioPlayerButton: React.FC = () => {
    const { isPlaying, togglePlay } = usePlayer();
    return (
        <Button 
            as={RadioPlayerButtonContainer}
            iconAs={RadioPlayerButtonIcon}
            onClick={togglePlay}
            icon=
                {isPlaying 
                    ? <MdPause size={24} /> 
                    : <MdPlayArrow size={24} />
                }
        />
    );
};
export default RadioPlayerButton;