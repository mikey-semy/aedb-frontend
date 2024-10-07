import React from 'react';
import { Menu } from 'antd';


const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const MenuComponent: React.FC = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default MenuComponent;