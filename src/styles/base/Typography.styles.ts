import { createGlobalStyle } from 'styled-components';

const TypographyStyles = createGlobalStyle`
  @font-face {
    font-family: 'Squada One';
    src: url('../../assets/fonts/SquadaOne.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../../assets/fonts/Inter.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default TypographyStyles;