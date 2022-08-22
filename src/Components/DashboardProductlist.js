import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";

import Dashboardnav from './Dashboardnav'
import Dashboardsider from './Dashboardsider';
import Productslist from './Productslist';

const { Header,Content, Sider } = Layout;


function DashboardProductlist() {
  return (
    <div>
        <Layout className="layout"> 
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
    <Layout>
    <Content>
       <Productslist />
    </Content>
    </Layout>
    </div>
  )
}

export default DashboardProductlist