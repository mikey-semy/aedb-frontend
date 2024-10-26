import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        overscroll-behavior-x: none;
        touch-action: pan-y pinch-zoom;
    }
`;