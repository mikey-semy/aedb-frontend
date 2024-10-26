import 'styled-components';

export type ThemeType = {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        menuBackground: string;
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}