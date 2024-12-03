import React, { createContext, useContext, useState } from 'react';
import { PlayerContextType } from './RadioPlayerContext.types';
import { radioStations } from '@/components/RadioPlayer/RadioPlayer.data';

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentUrl, setCurrentUrl] = useState(radioStations[0].url);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <PlayerContext.Provider value={{ 
            isPlaying, 
            togglePlay,
            currentUrl,
            setCurrentUrl 
        }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};