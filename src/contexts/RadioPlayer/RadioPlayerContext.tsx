import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { PlayerContextType } from './RadioPlayerContext.types';
import { radioStations } from '@/components/RadioPlayer/RadioPlayer.data';

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
/**
 * Компонент PlayerProvider, который предоставляет контекст плеера.
 * Оборачивает дочерние компоненты и предоставляет им доступ к состоянию и функциям плеера.
 *
 * @param {React.ReactNode} children - Дочерние компоненты, которые будут иметь доступ к контексту плеера.
 */
    const [isLoading, setIsLoading] = useState(false);      // Состояние для отслеживания загрузки аудио
    const [isPlaying, setIsPlaying] = useState(false);      // Состояние для отслеживания, воспроизводится ли аудио в данный момент
    const [currentUrl, setCurrentUrl] = useState(() => {    // Состояние для хранения текущего URL аудио, инициализируется URL из localStorage или первой радиостанцией
        return localStorage.getItem('lastRadioUrl') || radioStations[0].url; 
    });
    const audioRef = useRef<HTMLAudioElement>(new Audio(currentUrl));   // Ссылка для хранения элемента аудио
    // Возможное решение проблемы с прерыванием потока
    // const mediaSourceRef = useRef<MediaSource | null>(null);
    // const sourceBufferRef = useRef<SourceBuffer | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);    // Ссылка для AbortController, чтобы отменять загрузку аудио
    const loadingTimeoutRef = useRef<NodeJS.Timeout>();                 // Ссылка для таймера загрузки

    /**
     * Функция для переключения воспроизведения аудио.
     * Приостанавливает воспроизведение, если оно активно, или начинает воспроизведение текущего URL.
     */
    const togglePlay = async () => {
        // Возможное решение проблемы с прерыванием потока
        // if (!mediaSourceRef.current) {
        //     mediaSourceRef.current = new MediaSource();
        //     audioRef.current = new Audio(URL.createObjectURL(mediaSourceRef.current));

        //     mediaSourceRef.current.addEventListener('sourceopen', () => {
        //         sourceBufferRef.current = mediaSourceRef.current?.addSourceBuffer('audio/mp3');
        //         loadAudio(currentUrl);
        //     });
        // }
        const audio = audioRef.current;
        
        try {
            setIsLoading(true); // Устанавливаем состояние загрузки
            
            if (isPlaying) {
                audio.pause();          // Приостанавливаем воспроизведение
                audio.src = '';         // Освобождаем ресурс
                audio.load();           // Принудительно сбрасываем состояние
                setIsPlaying(false);    // Обновляем состояние воспроизведения
            } else {
                                        // Даем время на освобождение ресурсов
                await new Promise(resolve => setTimeout(resolve, 300));
                audio.src = currentUrl; // Устанавливаем текущий URL
                await audio.play();     // Пытаемся воспроизвести аудио
                setIsPlaying(true);     // Обновляем состояние воспроизведения
            }
        } catch (error) {
            console.error('Радио сдохло:', error);
            setIsPlaying(false);    // Обновляем состояние воспроизведения
        } finally {
            setIsLoading(false);    // Сбрасываем состояние загрузки
        }
    };
    // Возможное решение проблемы с прерыванием потока
    // const loadAudio = (url: string) => {
    //     fetch(url)
    //         .then(response => {
    //             const reader = response.body.getReader();
    //             const pump = () => {
    //                 return reader.read().then(({ done, value }) => {
    //                     if (done) {
    //                         mediaSourceRef.current?.endOfStream();
    //                         return;
    //                     }
    //                     sourceBufferRef.current?.appendBuffer(value);
    //                     return pump();
    //                 });
    //             };
    //             pump();
    //         })
    //         .catch(error => {
    //             console.error('Ошибка загрузки аудио:', error);
    //         });
    // };

    /**
     * Функция для смены радиостанции.
     * Обновляет текущий URL, сохраняет его в localStorage и пытается воспроизвести новый источник.
     *
     * @param {string} newUrl - Новый URL радиостанции для воспроизведения.
     */
    const changeStation = async (newUrl: string) => {
    localStorage.setItem('lastRadioUrl', newUrl);   // Сохраняем новый URL в localStorage
    const audio = audioRef.current;

    // Отменяем предыдущую загрузку если она есть
    if (abortControllerRef.current) {
        abortControllerRef.current.abort();
    }

    if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);    // Очищаем таймер загрузки
    }

    // Создаем новый контроллер для отмены загрузки
    abortControllerRef.current = new AbortController();
    
    // ---------------------------------------------------------------------
    // Возможное решение проблемы с прерыванием потока
    // try {
    //     setIsLoading(true);
    //     setCurrentUrl(newUrl);
    //     audio.pause();
    //     audio.src = '';

    //     if (mediaSourceRef.current) {
    //         mediaSourceRef.current = new MediaSource();
    //         audio.src = URL.createObjectURL(mediaSourceRef.current);
    //         mediaSourceRef.current.addEventListener('sourceopen', () => {
    //             sourceBufferRef.current = mediaSourceRef.current?.addSourceBuffer('audio/mpeg');
    //             loadAudio(newUrl);
    //         });
    //     }
    // } catch (error) {
    //     console.error('Ошибка смены радиостанции:', error);
    // } finally {
    //     setIsLoading(false);
    // }
    // ---------------------------------------------------------------------
    try {
        setIsLoading(true);         // Устанавливаем состояние загрузки
        setCurrentUrl(newUrl);      // Обновляем текущий URL
        
        audio.pause();              // Приостанавливаем текущее воспроизведение
        audio.src = newUrl;         // Устанавливаем новый URL

        // Ждем, пока аудио не будет готово к воспроизведению
        audio.oncanplaythrough = async () => {
            try {
                await audio.play();     // Пытаемся воспроизвести аудио
                setIsPlaying(true);     // Обновляем состояние воспроизведения
            } catch (error) {
                console.error('Ошибка воспроизведения:', error);
                setIsPlaying(false);    // Обновляем состояние воспроизведения
            } finally {
                setIsLoading(false);    // Сбрасываем состояние загрузки
            }
        };

        // Обработка ошибок
        audio.onerror = (error) => {
            console.error('Ошибка аудио:', error);
            setIsPlaying(false);        // Обновляем состояние воспроизведения
            setIsLoading(false);        // Сбрасываем состояние загрузки
        };

    } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
            setIsPlaying(false);        // Обновляем состояние воспроизведения
            setIsLoading(false);        // Сбрасываем состояние загрузки
        }
    }
    // ---------------------------------------------------------------------
};

    // Эффект для очистки ресурсов при размонтировании компонента
    useEffect(() => {
        return () => {
            if (loadingTimeoutRef.current) {
                clearTimeout(loadingTimeoutRef.current);    // Очищаем таймер загрузки
            }

            if (abortControllerRef.current) {
                abortControllerRef.current.abort();         // Отменяем загрузку, если она есть
            }
            const audio = audioRef.current;
            audio.pause();                                  // Приостанавливаем воспроизведение
            audio.src = '';                                 // Освобождаем ресурс
        };
    }, []);
    // Предоставляем значение контекста дочерним компонентам
    return (
        <PlayerContext.Provider value={{ 
            isPlaying,      // Текущее состояние воспроизведения
            isLoading,      // Состояние загрузки
            togglePlay,     // Функция для переключения воспроизведения
            currentUrl,     // Текущий URL аудио
            setCurrentUrl,  // Функция для обновления текущего URL
            changeStation   // Функция для смены радиостанции
        }}>
            {children}      
        </PlayerContext.Provider>
    );
};
/**
 * Пользовательский хук для использования PlayerContext.
 * Обеспечивает доступ к контексту плеера и выбрасывает ошибку, если используется вне PlayerProvider.
 *
 * @returns {PlayerContextType} - Значение контекста плеера.
 */
export const usePlayer = () => {
    const context = useContext(PlayerContext);  // Получаем доступ к контексту
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');  // Ошибка, если используется вне провайдера
    }
    return context; // Возвращаем значение контекста
};
