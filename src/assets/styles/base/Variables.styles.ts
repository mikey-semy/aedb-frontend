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

    // Fonts
    --logo-font: 'Squada One', sans-serif;
    --nav-label-font: 'Inter', sans-serif;

    // Font params
    --logo-font-weight: 600;
    --logo-letter-spacing: 1px;
    --nav-label-font-weight: 600;

    // Shadows
    --box-shadow-default: 0 0 0 1px #ccc;

    // Transitions
    --transition-default: 0.3s ease-in-out;

    // Others
    --logo-translate-x: -50px;
    --logo-translate-y: 10px;
    --link-hover-opacity: 0.8;
    --nav-hover-bg: rgba(0,0,0,0.05);
    --nav-active-bg: #F1EEFE;
    --nav-active-color: #7839CD;
  }
`;