import React from 'react';
import { Button } from '@/components';
import { usePlayer, useTheme } from '@/contexts';
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { RadioPlayerButtonContainer, RadioPlayerButtonIcon } from './RadioPlayerButton.styles';
import { ClipLoader } from 'react-spinners';

const RadioPlayerButton: React.FC = () => {
    const { isPlaying, isLoading, togglePlay } = usePlayer();
    const { isDark } = useTheme();
    return (
        <>
            <Button 
                as={RadioPlayerButtonContainer}
                iconAs={RadioPlayerButtonIcon}
                icon={
                    isPlaying 
                            ? <IoPauseOutline />
                            : <IoPlayOutline />
                    }
                onClick={togglePlay}
                disabled={isLoading}
                
                loading={isLoading}
                loadingIcon={<ClipLoader
                    color={
                        isDark 
                            ? 'var(--loader-color)' 
                            : 'var(--loader-color)'
                        }
                        size={20}
                    /> }
                
            />
        </>
    );
};
export default RadioPlayerButton;