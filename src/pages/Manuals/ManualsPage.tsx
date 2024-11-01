import React, { /*useState,*/useEffect } from 'react';
// import Tree from '../../components/Common/Tree/Tree';
// import { getManuals } from './ManualsPage.api';
// import { CategoryTypes } from './Categories/Category.types';
// import { GroupTypes } from './Groups/Group.types';
// import { ManualTypes } from './Manuals/Manual.types';

// import { 
//   ManualsPageContainer,
//   ToolbarManualsStyled,
//   CategoryItems,
//   CategoryItem,
//   CategoryCaption,
//   CategoryLogo,
//   CategoryTitle,
//   GroupItems,
//   GroupTitle,
//   ManualItems,
//   ManualLink,
//   ManualIcon,
//   ManualTitle,
//   ManualEmpty,
//   ActionManualStyled

// } from './ManualsPage.styles';
import { useContentData } from '../../contexts';
import { MdAdd } from 'react-icons/md';
const Manuals: React.FC = () => {
    const { setContentData } = useContentData();
    useEffect(() => {
        setContentData({
            caption: 'Инструкции',
            title: 'Добавить',
            icon: MdAdd,
            onClick: () => console.log('click'),
        });
    }, [setContentData]);
    // const [manuals, setManualItems] = useState<CategoryTypes[]>([]);

    // const fetchManualItems = async () => {
    //    try {
    //     const manuals = await getManuals();
         
    //      setManualItems(
    //       manuals.map((category: CategoryTypes) => ({
    //         id: category.id,
    //         name: category.name,
    //         logo_url: category.logo_url ?? '',
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
   
    //      console.log('Ответ API:', manuals);
    //     } catch (error) {
    //         console.error('Ошибка при загрузке каталога:', error);
    //     } 
    // };
    // const mapToTreeItem = (item: CategoryTypes | GroupTypes | ManualTypes): TreeItem => {
    //     return {
    //       id: String(item.id),
    //       name: item.name,
    //       children: item.groups || item.manuals ? item.groups.map(mapToTreeItem) || item.manuals.map(mapToTreeItem) : undefined,
    //     };
    //   };
    // useEffect(() => {
    //     fetchManualItems();
    //   }, []);

    return (
        <>
            {/* <Tree items={manuals} /> */}
        </>
//     <ManualsPageContainer>
//     <ToolbarManualsStyled onUpdate={handleUpdateItems}>
    
//     <CategoryItems>
      
//       {categoriesItems.map((category) => (   
//         <CategoryItem key={category.id}>
          
//           <CategoryCaption>
//             <CategoryLogo src={category.logo_url} alt={category.name} />
//             <CategoryTitle>{category.name}</CategoryTitle>
//           </CategoryCaption>
          
//           <GroupItems>
            
//             {category.groups.map((group) => (
//               <GroupItem key={group.id}>
                
//                 <GroupTitle>{group.name}</GroupTitle>
                
//                 {group.manuals.length > 0 ? (
//                   <ManualItems>
//                     {group.manuals.map((manual) => (
                      
//                       <ManualItem key={manual.id}>
//                         <ManualLink href={manual.file_url} target='_blank'>
//                           <ManualIcon>📄</ManualIcon>
//                           <ManualTitle>{manual.title}</ManualTitle>
//                         </ManualLink>
                        
//                         <ActionManualStyled 
//                           category={category}
//                           manual={manual}
//                           onUpdate={handleUpdateItems}
//                         />
//                       </ManualItem>
//                     ))}
//                   </ManualItems>
//                 ) : (
//                   <ManualEmpty>Здесь пока пусто... :(</ManualEmpty>
//                 )}
//               </GroupItem>
//             ))}
//           </GroupItems>
//         </CategoryItem>
//       ))}
//     </CategoryItems>
//   </ToolbarManualsStyled>
//   </ManualsPageContainer>
    );
};

export default Manuals;