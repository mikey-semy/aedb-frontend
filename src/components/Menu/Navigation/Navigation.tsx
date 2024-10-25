import React, { useState } from 'react';
import { NavigationData } from './Navigation.data';
import { 
    NavigationContainer, 
    NavigationItems, 
    NavigationItem,
    ItemLink,
    ItemIcon,
    ItemLabel 
} from './Navigation.styles';

const Navigation: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => {
    const [items] = useState(NavigationData);
    return (
            <NavigationContainer>
                <NavigationItems>
                    {items.map((item, index) => (
                        <NavigationItem 
                            key={index} 
                            isCollapsed={ isCollapsed }
                        >
                            <ItemLink 
                                to={`${typeof item.path == 'string' ? 
                                    item.path : '#'}` //! Из-за SubMenu, нужно переделать
                                }
                            >
                                <ItemIcon>
                                    {item.icon && (typeof item.icon === 'function' ? 
                                        <item.icon /> : 
                                        item.icon)
                                    }
                                </ItemIcon>
                                <ItemLabel isCollapsed={ isCollapsed }>
                                    <span>{item.label }</span>
                                </ItemLabel>
                            </ItemLink>
                        </NavigationItem>
                    ))}
                </NavigationItems>
            </NavigationContainer>
    )
}
export default Navigation;