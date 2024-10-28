import React from 'react';
import { 
  ManualsPageContainer,
  ToolbarManualsStyled,
  CategoryItems,
  CategoryItem,
  CategoryCaption,
  CategoryLogo,
  CategoryTitle,
  GroupItems,
  GroupTitle,
  ManualItems,
  ManualLink,
  ManualIcon,
  ManualTitle,
  ManualEmpty,
  ActionManualStyled

} from './ManualsPage.styles';

const Manuals: React.FC = ({ categoriesItems, handleUpdateItems }) => {

  return (
    <ManualsPageContainer>
    <ToolbarManualsStyled onUpdate={handleUpdateItems}>
    
    <CategoryItems>
      
      {categoriesItems.map((category) => (   
        <CategoryItem key={category.id}>
          
          <CategoryCaption>
            <CategoryLogo src={category.logo_url} alt={category.name} />
            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryCaption>
          
          <GroupItems>
            
            {category.groups.map((group) => (
              <GroupItem key={group.id}>
                
                <GroupTitle>{group.name}</GroupTitle>
                
                {group.manuals.length > 0 ? (
                  <ManualItems>
                    {group.manuals.map((manual) => (
                      
                      <ManualItem key={manual.id}>
                        <ManualLink href={manual.file_url} target='_blank'>
                          <ManualIcon>📄</ManualIcon>
                          <ManualTitle>{manual.title}</ManualTitle>
                        </ManualLink>
                        
                        <ActionManualStyled 
                          category={category}
                          manual={manual}
                          onUpdate={handleUpdateItems}
                        />
                      </ManualItem>
                    ))}
                  </ManualItems>
                ) : (
                  <ManualEmpty>Здесь пока пусто... :(</ManualEmpty>
                )}
              </GroupItem>
            ))}
          </GroupItems>
        </CategoryItem>
      ))}
    </CategoryItems>
  </ToolbarManualsStyled>
  </ManualsPageContainer>
  );
};

export default Manuals;