import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    html, body {
        overscroll-behavior-x: none;
        touch-action: pan-y pinch-zoom;
    }

    body {
        background-color: var(--background); //! Нужно создать переменную для тем
    }

    

`;
export default Global;