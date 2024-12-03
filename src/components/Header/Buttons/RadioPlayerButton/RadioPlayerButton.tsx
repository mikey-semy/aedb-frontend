import React from 'react';
import { Button } from '@/components';
import { usePlayer } from '@/contexts';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import { RadioPlayerButtonContainer, RadioPlayerButtonIcon} from './RadioPlayerButton.styles';

const RadioPlayerButton: React.FC = () => {
    const { isPlaying, currentUrl } = usePlayer();

    const handleClick = () => {
        (window as any).playRadioStation(currentUrl);
    };

    return (
        <Button 
            as={RadioPlayerButtonContainer}
            iconAs={RadioPlayerButtonIcon}
            onClick={handleClick}
            icon=
                {isPlaying 
                    ? <MdPause /> 
                    : <MdPlayArrow />
                }
        />
    );
};
export default RadioPlayerButton;