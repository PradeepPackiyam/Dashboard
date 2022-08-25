import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import Addproductform from './Addproductform';
import Dashboardnav from './Dashboardnav';

import { Col, Row } from 'antd';

const { Header,Content } = Layout;
function Addproductpage() {
  return (
    <div>
        
        
    <Layout className="layout"> 

    <Header>
    <div className="logo" />
    <Row>
    
      <Col span={2}></Col>
      <Col span={20}> <Dashboardnav /></Col>
      <Col span={2}></Col>
     

      
    </Row> 
     
    </Header>
    </Layout>
    <Layout>
   

    

    <Content  
         >
            <Row>
    
    <Col span={2}></Col>
    <Col span={20}>  <Addproductform /> </Col>
    <Col span={2}></Col>
   

    
  </Row> 
            

     
    </Content>
    </Layout>
    </div>







  )
}

export default Addproductpage


