import { createGlobalStyle } from 'styled-components';

const TypographyStyles = createGlobalStyle`
  @font-face {
    font-family: 'Squada One';
    src: url('../../assets/fonts/SquadaOne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../../assets/fonts/Inter_24pt-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default TypographyStyles;