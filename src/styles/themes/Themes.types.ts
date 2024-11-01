import 'styled-components';

export type ThemeType = {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        sidebarBackground: string;
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
        headerBackground: string;
        // headerColor: string;
        // headerLinkColor: string;
        // headerLinkHoverColor: string;
        // headerLinkActiveColor: string;
        // headerLinkActiveColorBackground: string;
        // headerItemHoverColorBackground: string;
        // headerButtonColor: string;
        contentBackground: string;
        contentColor: string;
        contentHeaderBackground: string;
        contentHeaderColor: string;
        boxShadowColor: string;
        footerBackground: string;
        listItemHoverBackground: string;
        linkColor: string,
        linkHoverColor: string,
        linkActiveColor: string,
        linkBackground: string,
        tabColor: string,
        tabActiveColor: string,
        tabHoverColor: string,
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}