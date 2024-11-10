import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    /* html, body {
        overscroll-behavior-x: none;
        touch-action: pan-y pinch-zoom;
    } */

    body {
        background-color: var(--background); //! Нужно создать переменную для тем
        /* &.no-scroll {
            overflow: hidden;
        } */
    }
    
    a {
        color: var(--link-color, #000000);
        font-weight: 600;
        text-decoration: none;
        transition: color var(--transition-default);
    }

    a:hover {
        color: var(--link-hover-color, #666666);
    }

    a:active {
        color: var(--link-active-color, #888888);
        /* background-color: var(--link-background, #FFFFFF); */
    }

`;
export default Global;