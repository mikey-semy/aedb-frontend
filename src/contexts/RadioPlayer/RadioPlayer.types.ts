export interface PlayerContextType {
    isPlaying: boolean;
    isLoading: boolean;
    togglePlay: () => void;
    currentUrl: string;
    setCurrentUrl: (url: string) => void;
    changeStation: (newUrl: string) => void;
}