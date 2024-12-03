import React, { createContext, useContext, useState } from 'react';
import { PlayerContextType } from './RadioPlayerContext.types';


const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <PlayerContext.Provider value={{ isPlaying, togglePlay }}>
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