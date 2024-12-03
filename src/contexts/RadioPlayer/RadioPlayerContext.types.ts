export interface PlayerContextType {
    isPlaying: boolean;
    togglePlay: () => void;
    currentUrl: string;
    setCurrentUrl: (url: string) => void;
}