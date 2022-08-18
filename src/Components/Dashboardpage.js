import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";

import Dashboardnav from './Dashboardnav'
const { Header,Content } = Layout;
function Dashboardpage() {
  return (
    <div><Layout className="layout"> 
    <Header>
      <div className="logo" />
      
      <Dashboardnav />
    </Header>
    <Content>
       
    </Content>
    </Layout></div>
  )
}

export default Dashboardpage