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
        buttonHeaderBgColor: string;
        buttonHeaderColor: string;
        tabBackground: string;
        contentBackground: string;
        contentColor: string;
        contentHeaderBackground: string;
        contentHeaderColor: string;
        contentToolbarBackground: string;
        contentToolbarColor: string;
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
        searchColor: string,
        searchBackground: string,
        modalBackground: string;
        modalColor: string;
        modalHeaderColor: string;
        modalOverlayColor: string;
    },
    scrollbar: {
        thumbColor: string,
        trackColor: string,
        thumbHoverColor: string,
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}