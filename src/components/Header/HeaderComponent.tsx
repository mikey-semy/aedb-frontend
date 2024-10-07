import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
import Logo from './Logo';


const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const HeaderComponent: React.FC = () => {
  return (
    <Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Logo />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  </Header>
  );
};

export default HeaderComponent;