import React from 'react';
import { Button } from '@/components';
import { usePlayer, useTheme } from '@/contexts';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import { RadioPlayerButtonContainer, RadioPlayerButtonIcon } from './RadioPlayerButton.styles';
import { ScaleLoader } from 'react-spinners';

const RadioPlayerButton: React.FC = () => {
    const { isPlaying, isLoading, togglePlay } = usePlayer();
    const { isDark } = useTheme();
    return (
        <>
            <Button 
                as={RadioPlayerButtonContainer}
                iconAs={RadioPlayerButtonIcon}
                onClick={togglePlay}
                disabled={isLoading}
                icon={
                    isLoading ? 
                    <ScaleLoader 
                        color={isDark ? '#c9d1d9' : '#24292f'} 
                        height={20}
                        width={2}
                    /> 
                    : isPlaying ? <MdPause /> 
                    : <MdPlayArrow />
                    }
            />
        </>
    );
};
export default RadioPlayerButton;