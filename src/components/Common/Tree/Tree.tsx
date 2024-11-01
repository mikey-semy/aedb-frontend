import React, { useState } from 'react';

import { TreeTypes } from './Tree.types';
import { TreeContainer, TreeNode, TreeNodeLabel, TreeNodeChildren } from './Tree.styles';
const Tree: React.FC<TreeTypes> = ({ items }) => {
    const [expanded, setExpanded] = useState<string[]>([]);
  
    const handleToggle = (id: string) => {
      if (expanded.includes(id)) {
        setExpanded(expanded.filter((item) => item !== id));
      } else {
        setExpanded([...expanded, id]);
      }
    };
  
    const renderTree = (item: any) => {
      const children = Object.keys(item).filter((key) => Array.isArray(item[key]));
  
      return (
        <TreeNode key={item.id}>
          <TreeNodeLabel onClick={() => handleToggle(item.id)}>
            {item.name}
          </TreeNodeLabel>
          {children.length > 0 && expanded.includes(item.id) && (
            <TreeNodeChildren>
              {children.map((child) => (
                <div key={child}>
                  {item[child].map((childItem: any) => (
                    <div key={childItem.id}>
                      {renderTree(childItem)}
                    </div>
                  ))}
                </div>
              ))}
            </TreeNodeChildren>
          )}
        </TreeNode>
      );
    };
  
    return (
      <TreeContainer>
        {items.map((item) => (
          <div key={item.id}>
            {renderTree(item)}
          </div>
        ))}
      </TreeContainer>
    );
  };

export default Tree;