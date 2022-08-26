import React from 'react'
import { Layout,Button,Col } from 'antd';
import "antd/dist/antd.css";
import {  PlusCircleOutlined } from '@ant-design/icons';
import Dashboardnav from './Dashboardnav'
import Dashboardsider from './Dashboardsider';
import Productslist from './Productslist';
import { useNavigate } from "react-router-dom";
const { Header,Content, Footer } = Layout;

function Dashboardpage() {
  const navigate = useNavigate();
 
  const  addproduct = () => {
    navigate("/addproductpage");
  };
  return (
    <div ><Layout > 
    <Header>
      <div className="logo" />
      
      <Dashboardnav />
    </Header>
    </Layout>
   
    <Layout >
    <Content className='home' 
       style={{paddingBottom:210}}  >
            
           <Col span={12} offset={22}>  <Button   style={{color:'black',  borderRadius: 50,marginTop:30,marginBottom:20,backgroundColor:'rgb(182,225,247)'}}  onClick={addproduct}   >
        <PlusCircleOutlined />
        Add Product    
</Button> </Col>
      <Productslist /> 
    </Content>
    </Layout>

    
    </div>
  )
}

export default Dashboardpage