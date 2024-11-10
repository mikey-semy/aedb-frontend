import React, { useState } from 'react';
import { FcFolder, FcFile } from 'react-icons/fc';
import { TreeTypes } from './Tree.types';
import { 
    TreeContainer, 
    TreeNode, 
    TreeNodeLabel, 
    TreeNodeChildren,
    TreeFolder, TreeFile } from './Tree.styles';

const Tree: React.FC<TreeTypes> = ({ items }) => {
    const [expanded, setExpanded] = useState<string[]>([]);
  
    const handleToggle = (id: string) => {
      if (expanded.includes(id)) {
        setExpanded(expanded.filter((item) => item !== id));
      } else {
        setExpanded([...expanded, id]);
      }
    };
  
    const renderTree = (item: any, parentId?: string) => {
        const children = Object.keys(item).filter((key) => Array.isArray(item[key]));
        const itemId = parentId ? `${parentId}.${item.id}` : item.id;
      return (
        <TreeNode key={itemId}>
          <TreeNodeLabel onClick={() => handleToggle(itemId)}>
            {children.length > 0 ? 
                <TreeFolder><FcFolder /> {item.name} </TreeFolder>
                : 
                <TreeFile>
                    <FcFile /> 
                    <a href={item.file_url} target="_blank">
                        {item.name}
                    </a>  
                </TreeFile>
            }
            
          </TreeNodeLabel>
          {children.length > 0 && expanded.includes(itemId) && (
            <TreeNodeChildren >
              {children.map((child) => (
                <div key={child}>
                  {item[child].map((childItem: any) => (
                    <div key={childItem.id + 1}>
                      {renderTree(childItem, itemId)}
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