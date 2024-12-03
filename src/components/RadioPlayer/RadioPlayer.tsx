import React, { useRef, useEffect } from 'react';
import { radioStations } from './RadioPlayer.data';
import { RadioPlayerContainer, /*RadioPlaylist, RadioButton,*/ Dropdown } from './RadioPlayer.styles';
import { RadioStation } from './RadioPlayer.types';
import { usePlayer } from '@/contexts';

const RadioPlayer: React.FC = () => {
    
    const { isPlaying, currentUrl, setCurrentUrl } = usePlayer();

    const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUrl = event.target.value;
        setCurrentUrl(selectedUrl);
        window.playRadioStation(selectedUrl);
    };


    return (
        <RadioPlayerContainer> 
            <Dropdown value={currentUrl} onChange={handleStationChange}>
                {radioStations.map((station: RadioStation, index: number) => (
                    <option key={index} value={station.url}>
                        {station.name}
                    </option>
                ))}
            </Dropdown>
        </RadioPlayerContainer>
    );
};

export default RadioPlayer;