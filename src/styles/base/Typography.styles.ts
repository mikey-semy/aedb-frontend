import { createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`

    @font-face {
      font-family: 'SquadaOne';
      src: url('/fonts/SquadaOne.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'Inter';
      src: url('/fonts/Inter.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
`;
export default Typography;