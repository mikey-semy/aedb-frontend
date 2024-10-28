import { createGlobalStyle } from 'styled-components';

export const Variables = createGlobalStyle`
  :root {
    // Colors
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --accent-color: ${({ theme }) => theme.colors.accent};
    --background: ${({ theme }) => theme.colors.background};
    --menu-background: ${({ theme }) => theme.colors.menuBackground};
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
    
    // Sizes
    --menu-width: 262px;
    --menu-collapsed-width: 50px;
    --logo-container-height: 83px;
    --logo-width: 214px;
    --logo-height: 59px;
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

    // Fonts
    --logo-font: 'Squada One', sans-serif;
    --nav-label-font: 'Inter', sans-serif;

    // Font params
    --logo-font-weight: 600;
    --logo-letter-spacing: 1px;
    --nav-label-font-weight: 600;

    // Shadows
    --box-shadow-default: 0 0 0 1px #ccc;
    --nav-collapse-button-box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    
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