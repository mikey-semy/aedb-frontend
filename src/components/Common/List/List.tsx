import React from 'react';
import { ListTypes } from './List.types';
import { ListContainer, ListItem, ListHeader, ListFooter } from './List.styles';

const List: React.FC<ListTypes> = ({
    listItems,
    header,
    footer,
    bordered,
    renderItem,
    listItemAs,
  }) => {
    return (
      <ListContainer>
        {header && <ListHeader>{header}</ListHeader>}
        {listItems.map((item, index) => (
          <ListItem as={listItemAs} key={index} bordered={bordered}>
            {renderItem ? renderItem(item) : item.content}
          </ListItem>
        ))}
        {footer && <ListFooter>{footer}</ListFooter>}
      </ListContainer>
    );
  };

export default List;