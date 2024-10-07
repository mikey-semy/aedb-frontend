import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
        AEDB ©{new Date().getFullYear()} Создано для удобства
    </Footer>
  );
};

export default FooterComponent;