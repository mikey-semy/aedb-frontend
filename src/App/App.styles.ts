import styled from 'styled-components';

export const AppContainer = styled.div`
    overscroll-behavior-x: none;
    touch-action: pan-y pinch-zoom; // Разрешаем только вертикальный скролл

// //! Ниже нужно отредактировать
//     #root {
//     width: 100%;
//   }
  
//   .app-container {
//       display: flex;
//       flex-direction: column;
//       min-height: 100vh; // Занимает всю высоту экрана
//     }
    
//   .app-main {
//     flex: 1; // Занимает оставшееся пространство
//     background-color: #f9f9f9; // Цвет фона для основного контента
//     padding: 20px; // Отступы вокруг основного контента
//   }
    
//   .content {
//     max-width: 1200px; // Максимальная ширина контента
//     margin: 0 auto; // Центрирование контента
//     padding: 20px; // Отступы внутри контента
//     background-color: #fff; // Цвет фона для содержимого
//     border-radius: 8px; // Скругление углов
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // Тень для эффекта поднятости
//   }
// `;