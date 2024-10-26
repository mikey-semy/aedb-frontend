import styled from 'styled-components';

export const AppContainer = styled.div`
    overscroll-behavior-x: none;
    touch-action: pan-y pinch-zoom; // Разрешаем только вертикальный скролл
`;