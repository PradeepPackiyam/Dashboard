import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";

import Dashboardnav from './Dashboardnav'
import Dashboardsider from './Dashboardsider';
import Productslist from './Productslist';
const { Header,Content, Sider } = Layout;
function Dashboardpage() {
  return (
    <div><Layout className="layout"> 
    <Header>
      <div className="logo" />
      
      <Dashboardnav />
    </Header>
    </Layout>
    <Layout>
    <Sider >
      <Dashboardsider />
    </Sider>
    </Layout>
    <Layout style={{
          padding: '0 150px 70px',
        }}>
    <Content  className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
      <Productslist /> 
    </Content>
    </Layout></div>
  )
}

export default Dashboardpage