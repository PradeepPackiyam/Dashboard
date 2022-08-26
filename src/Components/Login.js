import React from 'react'
import { Layout, Col, Row, Card  } from 'antd';
import Forms from './Forms';
import Nav from './Nav';

const { Header,Content } = Layout;


function Login() {
  return (
    
    <div><Layout className="layout"> 
    <Header>
     
      <Nav />
     </Header>

    <Content className='home'>
    <Row justify="space-justify"  >
      
      <Col span={12} offset={6}>  
        <Forms />
        
</Col>

      
      <Col span={10}> </Col>
    </Row>

      
      
    
     
    </Content>
    </Layout>


    </div>
  )
}

export default Login