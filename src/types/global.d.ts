declare global {
    interface Window {
        playRadioStation: (url: string) => void;
    }
}
export {};