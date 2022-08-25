import React from 'react'
import { Layout,Button } from 'antd';
import "antd/dist/antd.css";
import {  PlusCircleOutlined } from '@ant-design/icons';
import Dashboardnav from './Dashboardnav'
import Dashboardsider from './Dashboardsider';
import Productslist from './Productslist';
import { useNavigate } from "react-router-dom";
const { Header,Content, Sider } = Layout;

function Dashboardpage() {
  const navigate = useNavigate();
 
  const  addproduct = () => {
    navigate("/addproductpage");
  };
  return (
    <div><Layout className="layout"> 
    <Header>
      <div className="logo" />
      
      <Dashboardnav />
    </Header>
    </Layout>
   
    <Layout >
    <Content  
         >
            
        <Button type="yellow"  style={{color:'purple',  borderRadius: 50}}  onClick={addproduct}   >
        <PlusCircleOutlined />
        Add Product    
</Button>
      <Productslist /> 
    </Content>
    </Layout></div>
  )
}

export default Dashboardpage