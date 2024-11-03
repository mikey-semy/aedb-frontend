import React, { useState, useEffect } from 'react';
import Tree from '../../components/Common/Tree/Tree';
import { getManuals } from './ManualsPage.api';
import { CategoryTypes } from './Categories/Category.types';
import ModalAddManual from '../../pages/Manuals/Modals/ModalAddManual';
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
import { ExtendedTreeItem } from './ManualsPage.types';
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
    const [manuals, setManualItems] = useState<ExtendedTreeItem[]>([]);

    const fetchManualItems = async () => {
        try {
            const manuals: CategoryTypes[] = await getManuals(); // Убедитесь, что getManuals возвращает CategoryTypes[]
            
            // Преобразуем данные в формат CategoryTypes[]
            const categoryItems: ExtendedTreeItem[] = manuals.map((category) => ({
                id: category.id,
                name: category.name,
                groups: category.groups.map((group) => ({
                    id: group.id,
                    name: group.name,
                    manuals: group.manuals.map((manual) => ({
                        id: manual.id,
                        name: manual.title,
                        file_url: manual.file_url,
                        group_id: group.id ?? 0,
                        category_id: manual.category_id,
                    })),
                })),
            }));
            console.log(categoryItems);
            // Убедитесь, что setManualItems принимает CategoryTypes[]
            setManualItems(categoryItems);
    
            console.log('Ответ API:', manuals);
        } catch (error) {
            console.error('Ошибка при загрузке каталога:', error);
        } 
    };
    
    useEffect(() => {
        fetchManualItems();
      }, []);
    return (
        <>
            <ModalAddManual />
            <Tree items={manuals} />
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