import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    html, body {
        overscroll-behavior-x: none;
        touch-action: pan-y pinch-zoom;
    }

    body {
        background-color: #F3F3F3; //! Нужно создать переменную для тем
    }

    

`;
export default Global;