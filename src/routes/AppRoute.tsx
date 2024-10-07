import React, { useEffect } from 'react';
import { /*Breadcrumb,*/ Layout, theme } from 'antd';
const { Content } = Layout;

// import { Outlet } from "react-router-dom";

import favicon from '../assets/icons/favicons/favicon.ico';

import HeaderComponent from '../components/Header/Header';
import FooterComponent from '../components/Footer/FooterComponent';



const App: React.FC = () => {

  useEffect(() => {
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    }
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: '0 48px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default App;
