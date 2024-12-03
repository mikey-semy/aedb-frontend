import React, { useRef } from 'react';
import { radioStations } from './RadioPlayer.data';
import { RadioPlayerContainer, RadioPlaylist, RadioButton, Dropdown } from './RadioPlayer.styles';
import { RadioStation } from './RadioPlayer.types';
import { usePlayer } from '@/contexts';

const RadioPlayer: React.FC = () => {
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [selectedStation, setSelectedStation] = React.useState<string>(radioStations[0].url);
    const { isPlaying, togglePlay } = usePlayer();

    const playStation = (url: string) => {
        if (audioRef.current) {
            audioRef.current.src = url;
            audioRef.current.play();
            togglePlay();
        }
    };

    const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUrl = event.target.value;
        setSelectedStation(selectedUrl);
        playStation(selectedUrl);
    };

    return (
        <RadioPlayerContainer>
            <audio ref={audioRef} controls>
                Ваш браузер не поддерживает плеер.
            </audio>
            <Dropdown value={selectedStation} onChange={handleStationChange}>
                {radioStations.map((station: RadioStation, index: number) => (
                    <option key={index} value={station.url}>
                        {station.name}
                    </option>
                ))}
            </Dropdown>
            <RadioPlaylist>
                {radioStations.map((station: RadioStation, index: number) => (
                    <RadioButton 
                        key={index} 
                        onClick={() => playStation(station.url)}
                    >
                        {station.name}
                    </RadioButton>
                ))}
            </RadioPlaylist>
        </RadioPlayerContainer>
    );
};

export default RadioPlayer;