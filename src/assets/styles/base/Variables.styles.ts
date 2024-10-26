import { createGlobalStyle } from 'styled-components';

export const Variables = createGlobalStyle`
  :root {
    // Colors
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --accent-color: ${({ theme }) => theme.colors.accent};
    --background: ${({ theme }) => theme.colors.background};
    --menu-background: ${({ theme }) => theme.colors.menuBackground};

    // Sizes
    --menu-width: 262px;
    --menu-collapsed-width: 50px;

    // Fonts
    --font-family: 'Inter', sans-serif;

    // Shadows
    --box-shadow-default: 0 0 0 1px #ccc;

    // Transitions
    --transition-default: 0.3s ease-in-out;
  }
`;