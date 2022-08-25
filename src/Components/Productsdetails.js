import { Layout,Menu } from 'antd';
import { ReadOutlined, BorderOutlined, CloudFilled } from '@ant-design/icons';
import React from 'react'
import { Button, Table } from "antd";
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Dashboardnav from './Dashboardnav';
import { Link } from "react-router-dom";
import { ProductContext } from '../App';
import { useNavigate } from "react-router-dom";
import { Col, Row } from 'antd';

const { Header,Content } = Layout;



function Productsdetails() {
    const {productlists,setProductlists, productcolors, setProductcolors} = useContext(ProductContext);
    
    const {id} = useParams();
  
    
      console.log("id product",productlists[id])

const singleproduct =productlists[id-1];

console.log("ddd", singleproduct)
      const navigate = useNavigate();
  return (
   
<Layout>
<Header>

      <Menu
        theme="dark"
        mode="horizontal"
        
        items={new Array(2).fill(null).map((_, index) => {
          const key = index + 1;
          if ( key ===1) {
            
          return {
            key,
            label: "Back",
            onClick: () => {
                navigate("/dashboardpage");
              }
            
          }} 
          else{
           
            return {
                key,
                label: "Logout",
                onClick: () => {
                  navigate("/Login");
                }
              }
              
          };
        })}
      />
     
  
    </Header>
    
  
        <Content className="site-layout-background">

         <Row>
      <Col span={8}></Col>
      <Col span={8}><h1>PRODUCT DETAILS</h1></Col>
      <Col span={8}></Col>

      
    </Row>  
    <Row>
    <Col span={4}></Col>
      <Col span={5}><h3>ID </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.id}</h3></Col>
      <Col span={4}></Col>

      
    </Row> 
    <Row>
    <Col span={4}></Col>
      <Col span={5}><h3> PRODUCT NAME </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.productname}</h3></Col>
      <Col span={4}></Col>

      
    </Row>  
    <Row>
    <Col span={4}></Col>
      <Col span={5}><h3>PRICE </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.price}</h3></Col>
      <Col span={4}></Col>

      
    </Row> 
    <Row>
    <Col span={4}></Col>
      <Col span={5}><h3>DESCRIPTION </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.description}</h3></Col>
      <Col span={4}></Col>

      
    </Row> 
    
    
     
                <Row>
                <Col span={4}></Col>
                  <Col span={5}><h3>COLORS </h3></Col>
                  <Col span={4}><h3>:</h3></Col>
                    
          
                  <Col span={10}>
                  {
          singleproduct.colors.map(color => {
                console.log("rrrr", color)
            return (
                    <CloudFilled style={{ color: productcolors[color] }} key={color} />
                     );
                    })}
                        
                     </Col>
            <Col span={4}></Col>
            
                  
                </Row> 

                <Row>
    <Col span={4}></Col>
      <Col span={5}><h3>CATEGORY </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.category}</h3></Col>
      <Col span={4}></Col>

      
    </Row> 

    <Row>
    <Col span={4}></Col>
      <Col span={5}><h3>STATUS </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.status}</h3></Col>
      <Col span={4}></Col>

      
    </Row> 
    <Row>
    <Col span={4}></Col>
      <Col span={5}><h3>QUANTITY </h3></Col>
      <Col span={4}><h3>:</h3></Col>
      <Col span={10}><h3>{singleproduct.quantity}</h3></Col>
      <Col span={4}></Col>

      
    </Row> 
            
            
             
            
   
   
        
        </Content>
      </Layout>
    
  )
}

export default Productsdetails