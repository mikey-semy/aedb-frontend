import { createGlobalStyle } from 'styled-components';

export const Variables = createGlobalStyle`
  :root {
    // Colors
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --accent-color: ${({ theme }) => theme.colors.accent};
    --background: ${({ theme }) => theme.colors.background};
    --sidebar-background: ${({ theme }) => theme.colors.sidebarBackground};
    --logo-color: ${({ theme }) => theme.colors.logoColor};
    --nav-label-color: ${({ theme }) => theme.colors.navLabelColor};
    --nav-icon-color: ${({ theme }) => theme.colors.navIconColor};
    --nav-label-active-color: ${({ theme }) => theme.colors.navLabelActiveColor};
    --nav-icon-active-color: ${({ theme }) => theme.colors.navIconActiveColor};
    --nav-label-hover-color: ${({ theme }) => theme.colors.navLabelHoverColor};
    --nav-icon-hover-color: ${({ theme }) => theme.colors.navIconHoverColor};
    --nav-link-active-color: ${({ theme }) => theme.colors.navLinkActiveColor};
    --nav-link-active-bg: ${({ theme }) => theme.colors.navLinkActiveColorBackground};
    --nav-item-hover-hover-bg: ${({ theme }) => theme.colors.navItemHoverColorBackground};
    --header-background: ${({ theme }) => theme.colors.headerBackground};
    --content-header-background: ${({ theme }) => theme.colors.contentHeaderBackground};
    --content-header-color: ${({ theme }) => theme.colors.contentHeaderColor};
    --content-background: ${({ theme }) => theme.colors.contentBackground};
    --content-color: ${({ theme }) => theme.colors.contentColor};
    --footer-background: ${({ theme }) => theme.colors.footerBackground};
    --box-shadow-color: ${({ theme }) => theme.colors.boxShadowColor};
    --list-item-hover-background: ${({ theme }) => theme.colors.listItemHoverBackground};
    --link-color: ${({ theme }) => theme.colors.linkColor};
    --link-hover-color: ${({ theme }) => theme.colors.linkHoverColor};
    --link-active-color: ${({ theme }) => theme.colors.linkActiveColor};
    --link-background: ${({ theme }) => theme.colors.linkBackground};
    --tab-color: ${({ theme }) => theme.colors.tabColor};
    --tab-active-color: ${({ theme }) => theme.colors.tabActiveColor};
    --tab-hover-color: ${({ theme }) => theme.colors.tabHoverColor};
    
    // Sizes
    --header-height: 80px;
    --sidebar-width: 262px;
    --sidebar-collapsed-width: 50px;
    --logo-container-height: 83px;
    --logo-width: 50px;
    --logo-height: 80px;
    --logo-padding: 12px 24px;
    --logo-font-size-small: 24px;
    --logo-font-size-large: 58px;
    --nav-icon-size: 20px;
    --nav-label-font-size: 16px;
    --nav-label-max-width: 200px;
    --nav-item-collapsed-padding: 4px;
    --nav-item-padding: 0 12px;
    --nav-collapse-button-width: 30px;
    --nav-collapse-button-height: 60px;
    --nav-collapse-button-font-size: 26px;
    --tab-font-size: 16px;
    --tab-font-weight: 600;

    // Fonts
    --font-default: 'Inter', sans-serif;
    --logo-font: 'Squada One', sans-serif;
    --nav-label-font: var(--font-default);
    --content-header-font: var(--font-default);
    --content-font: var(--font-default);
    --content-header-button-font: var(--font-default);
    --tab-font: var(--font-default);
    
    // Font params
    --logo-font-weight: 600;
    --logo-letter-spacing: 1px;
    --nav-label-font-weight: 600;

    // Shadows
    --box-shadow-default: 0 0 0 1px var(--box-shadow-color);
    --nav-collapse-button-box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    --tab-active-border: 2px solid var(--tab-active-color);
    
    // Transitions
    --transition-default: 0.3s ease-in-out;

    // Others
    --logo-translate-x: -50px;
    --logo-translate-y: 10px;
    --link-hover-opacity: 0.8;
    --border-radius-default: 5px;
    --nav-collapse-button-border-radius: 0 5px 5px 0;
  }
`;
export default Variables;