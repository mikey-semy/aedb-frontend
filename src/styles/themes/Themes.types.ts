import 'styled-components';

export type ThemeType = {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        menuBackground: string;
        logoColor: string;
        navLabelColor: string;
        navIconColor: string;
        navLabelActiveColor: string;
        navIconActiveColor: string;
        navLabelHoverColor: string;
        navIconHoverColor: string;
        navLinkActiveColor: string;
        navLinkActiveColorBackground: string;
        navItemHoverColorBackground: string;
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}