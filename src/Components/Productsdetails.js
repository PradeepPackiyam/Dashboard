import { Layout,Menu, Space } from 'antd';
import { ReadOutlined, BorderOutlined, CloudFilled } from '@ant-design/icons';
import React from 'react'
import { Button, Table,Tag } from "antd";
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Dashboardnav from './Dashboardnav';
import { Link } from "react-router-dom";
import { ProductContext } from '../App';
import { useNavigate } from "react-router-dom";
import { Col, Row,Card } from 'antd';

const { Header,Content } = Layout;



function Productsdetails() {
    const {productlists,setProductlists, productcolors,productcategory} = useContext(ProductContext);
    
    const {key} = useParams();
  
    
      console.log("id product",productlists[key])

const singleproduct =productlists[key-1];

console.log("ddd", singleproduct)
      const navigate = useNavigate();
      

  return (
   
<Layout  style={{marginBottom:'-750px'}}>
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
    
        <Content className='home' style={{paddingBottom:110}}>
        <Row>
      <Col span={8}></Col>
      <Col span={8}><h1 style={{fontFamily:'verdana',fontSize:"xxx-large",color:'white',marginTop:'50px',backgroundColor:'rgb(0,21,41)',borderRadius:30,textAlign:'center'}} >Product Details</h1></Col>
      <Col span={8}></Col>
    </Row>  

<Card style={{borderRadius:50,margin:'110px'}}>
    <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>
    <Col span={4}></Col>
      <Col span={10}><h3>ID :</h3></Col>
      <Col span={10}><h3>{singleproduct.id}</h3></Col>
      <Col span={4}></Col>
    </Row> 
<hr></hr>

<Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>    <Col span={4}></Col>
      <Col span={10}><h3> PRODUCT NAME : </h3></Col>
      <Col span={10}><h3>{singleproduct.productname}</h3></Col>
      <Col span={4}></Col>

    </Row>  
    <hr></hr>

    <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>    <Col span={4}></Col>
      <Col span={10}><h3>PRICE :</h3></Col>
      <Col span={10}><h3>{singleproduct.price}</h3></Col>
      <Col span={4}></Col>
    </Row> 
    <hr></hr>

 <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}> 
 <Col span={4}></Col>
      <Col span={10}><h3>DESCRIPTION :</h3></Col>
      <Col span={10}><h3>{singleproduct.description}</h3></Col>
      <Col span={4}></Col>

    </Row> 
    
    <hr></hr>
     
    <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>   
     <Col span={4}></Col>
                  <Col span={10}><h3>COLORS </h3></Col>

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
    <hr></hr>


    <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>   
   
                <Col span={4}></Col>
      <Col span={10}><h3>CATEGORY :</h3></Col>
      <Col span={10}><h3> {
          singleproduct.category.map(cate => {
             return ( 
            <Tag color={productcolors[cate]}>
             { productcategory[cate] } 

            </Tag>
    
                    )} )} </h3></Col>

      <Col span={4}></Col>

    </Row> 
    <hr></hr>


    <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>   
  
    <Col span={4}></Col>
      <Col span={10}><h3>STATUS :</h3></Col>
      <Col span={10}><h3>{singleproduct.status}</h3></Col>
      <Col span={4}></Col>

    </Row> 

    <hr></hr>


    <Row style={{backgroundColor:'aliceblue',fontSize:'large'}}>   

<Col span={4}></Col>
      <Col span={10}><h3>QUANTITY :</h3></Col>
      <Col span={10}><h3>{singleproduct.quantity}</h3></Col>
      <Col span={4}></Col>
    </Row> 

    </Card>
            
            
   
  
        </Content>
       
      </Layout>
    
  )
}

export default Productsdetails