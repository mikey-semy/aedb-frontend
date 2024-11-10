// import React, { useState, useEffect } from 'react';

// import ToolbarManuals from './Actions/ToolbarManual';
// import ActionManual from './Actions/ActionManual';
// import { getManuals } from './ManualsPage.api';
// // import { manualsApi } from '@/api';
// import { CategoryTypes } from './Categories/Category.types';
// import { GroupTypes } from './Groups/Group.types';
// import { ManualTypes } from './Manuals/Manual.types';
// const ContentManual: React.FC = () => {

//   const [categoriesItems, setCategoryItems] = useState<CategoryTypes[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchCategoryItems = async () => {
//     setError(null);
//     setLoading(true);
//    try {
//     const data = await getManuals();
     
//      setCategoryItems(
//       data.map((category: CategoryTypes) => ({
//         id: category.id,
//         name: category.name,
//         // logo_url: category.logo_url ?? '',
//         groups: category.groups.map((group: GroupTypes) => ({
//           id: group.id,
//           name: group.name,
//           manuals: group.manuals.map((manual: ManualTypes) => ({
//             id: manual.id,
//             title: manual.title,
//             file_url: manual.file_url,
//             group_id: group.id ?? 0,
//             category_id: manual.category_id,
//           })),
//         })),
//       }))
//      );
//     //  setCategoryItems(data);

//      console.log('Ответ API:', data);
//    } catch (error) {
//       console.error('Ошибка при загрузке каталога:', error);
//       setError('Не удалось загрузить данные. Попробуйте позже.');
// } finally {
//     setLoading(false);
//    }
//  };

//   useEffect(() => {
//     fetchCategoryItems();
//   }, []);

//   const handleUpdateItems = () => {
//     fetchCategoryItems(); // Вызов функции для обновления данных
//     console.log("Обновление данных")
//   };
//   if (error) {
//     return (
//       <div className="error__container">
//         <h1 className="error__oops">Оопс!</h1>
//         <p className="error__sorry">Извините, что-то пошло не так :(</p>
//         <div className="error__message">{error}</div>
//         <button className="button-retry" onClick={fetchCategoryItems}>
//           Попробовать снова
//         </button>
//       </div>
//     );
//   }
//   if (loading) {
//     return <div className="loader--select"></div>;
//   }

//   return (
//     <>
//     <ToolbarManuals onUpdate={handleUpdateItems}/>
//     <ul className='category__items'>
//     {categoriesItems.map((category) => (
//         <li className='category__item' key={category.id}>
//             <div className='category__caption'>
//                 {/* <img className='category__logo' src={category.logo_url} alt={category.name} /> */}
//                 <h2 className='category__title'>{category.name}</h2>
//             </div>
//             <ul className='group__items'>
//             {category.groups.map((group) => (
//               <li className='group__item' key={group.id}>
//                 <h3 className='group__title'>{group.name}</h3>
//                 {group.manuals.length > 0 ? (
//                 <ul className='manual__items manual__items--table'>
//                   {group.manuals.map((manual) => (
//                     <li className='manual__item manual__item--table'  key={manual.id}>
//                       <a className='manual__link' href={manual.file_url} target='_blank'>
//                         <span className='manual__icon manual__icon--table'>📄</span>
//                         <span className='manual__title manual__title--table'>{manual.title}</span>
//                       </a>
//                       <ActionManual 
//                         category={category}
//                         manual={manual}
//                         onUpdate={handleUpdateItems}
//                       />
//                     </li>
//                   ))}
//                 </ul>
//                 ) : (
//                   <p className='manual__empty'>Здесь пока пусто... :(</p>
//                 )}
//               </li>
//             ))}
//             </ul>
//         </li>
//     ))}
// </ul>
// </>
//   );
// };

// export default ContentManual;