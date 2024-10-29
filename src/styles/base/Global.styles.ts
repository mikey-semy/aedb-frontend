import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    @font-face {
        font-family: 'Squada One';
        src: url('../../assets/fonts/SquadaOne.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('../../assets/fonts/Inter.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    html, body {
        overscroll-behavior-x: none;
        touch-action: pan-y pinch-zoom;
    }

    body {
        background-color: #F3F3F3; //! Нужно создать переменную для тем
    }

    

`;
export default Global;