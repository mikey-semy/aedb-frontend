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
        buttonHeaderHoverBgColor: string;
        buttonHeaderHoverColor: string;
        buttonHeaderActiveBgColor: string;
        buttonHeaderActiveColor: string;
        buttonCollapseBgColor: string;
        buttonBackground: string;
        buttonColor: string;
        buttonHoverBackground: string;
        buttonHoverColor: string;
        buttonActiveBackground: string;
        buttonActiveColor: string;
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
        inputBackground: string;
        inputColor: string;
        inputBoxShadow: string;
        inputFocusColor: string;
        inputDisabledBackground: string;
        inputDisabledColor: string;
        inputLabelColor: string;
        inputFileButtonBackground: string;
        inputFileButtonColor: string;
        inputFileButtonBorderColor: string;
        emptyColor: string;
        errorColor: string;
        loaderColor: string;
        optionSelectedBackground: string;
        optionSelectedColor: string;
        optionHoverBackground: string;
        optionHoverColor: string;
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