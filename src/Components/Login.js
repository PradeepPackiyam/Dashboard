import React from 'react'
import { Layout, Col, Row  } from 'antd';
import Forms from './Forms';
import Nav from './Nav';

const { Header,Content } = Layout;


function Login() {
  return (
    
    <div><Layout className="layout"> 
    <Header>
      <div className="logo" />
      <Nav />
     </Header>
    <Content className='full'>
    <Row>
      <Col span={8}></Col>
      <Col span={6}> <Forms />
</Col>

      
      <Col span={10}> </Col>
    </Row>

      
      
    
     
    </Content>
    </Layout>


    </div>
  )
}

export default Login