import React, { useRef, useEffect } from 'react';
import { radioStations } from './RadioPlayer.data';
import { RadioPlayerContainer, /*RadioPlaylist, RadioButton,*/ Dropdown } from './RadioPlayer.styles';
import { RadioStation } from './RadioPlayer.types';
import { usePlayer } from '@/contexts';

const RadioPlayer: React.FC = () => {
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { isPlaying, togglePlay, currentUrl, setCurrentUrl } = usePlayer();

    useEffect(() => {
        (window as any).playRadioStation = (url: string) => {
            if (audioRef.current) {
                if (isPlaying) {
                    audioRef.current.pause();
                } else {
                    audioRef.current.src = url;
                    audioRef.current.play();
                }
                togglePlay();
            }
        };
    }, [isPlaying, togglePlay]);

    const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUrl = event.target.value;
        setCurrentUrl(selectedUrl);
        (window as any).playRadioStation(selectedUrl);
    };


    return (
        <RadioPlayerContainer>
            <audio ref={audioRef}>
                Ваш браузер не поддерживает плеер.
            </audio>
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