import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { PlayerContextType } from './RadioPlayerContext.types';
import { radioStations } from '@/components/RadioPlayer/Dropdown/RadioPlayerDropdown.data';

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentUrl, setCurrentUrl] = useState(() => {
        return localStorage.getItem('lastRadioUrl') || radioStations[0].url;
    });
    const audioRef = useRef<HTMLAudioElement>(new Audio(currentUrl));
    const abortControllerRef = useRef<AbortController | null>(null);
    const loadingTimeoutRef = useRef<NodeJS.Timeout>();

    const togglePlay = async () => {
        const audio = audioRef.current;
        
        try {
            setIsLoading(true);
            
            if (isPlaying) {
                audio.pause();
                audio.src = ''; // Освобождаем ресурс
                audio.load(); // Принудительно сбрасываем состояние
                setIsPlaying(false);
            } else {
                // Даем время на освобождение ресурсов
                await new Promise(resolve => setTimeout(resolve, 300));
                audio.src = currentUrl;
                await audio.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error('Радио сдохло:', error);
            setIsPlaying(false);
        } finally {
            setIsLoading(false);
        }
    };

    const changeStation = async (newUrl: string) => {
        localStorage.setItem('lastRadioUrl', newUrl);
        const audio = audioRef.current;
        
        // Отменяем предыдущую загрузку если она есть
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        
        if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
        }

        // Создаем новый контроллер
        abortControllerRef.current = new AbortController();

       try {
            setIsLoading(true);
            setCurrentUrl(newUrl);
            
            audio.pause();
            audio.src = newUrl;
            
            await audio.play();
            setIsPlaying(true);
            
            // Задержка перед скрытием индикатора загрузки
            loadingTimeoutRef.current = setTimeout(() => {
                    setIsLoading(false);           
            }, 1000);
            
        } catch (error: unknown) {
            if (error instanceof Error && error.name !== 'AbortError') {
                setIsPlaying(false);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        return () => {
            if (loadingTimeoutRef.current) {
                clearTimeout(loadingTimeoutRef.current);
            }

            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            const audio = audioRef.current;
            audio.pause();
            audio.src = '';
        };
    }, []);

    return (
        <PlayerContext.Provider value={{ 
            isPlaying,
            isLoading, 
            togglePlay,
            currentUrl,
            setCurrentUrl,
            changeStation 
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
