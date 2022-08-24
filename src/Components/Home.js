import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import Nav from './Nav';
import Card from './Card'
import { Content } from 'antd/lib/layout/layout';
const { Header } = Layout;

function Home() {
  return (
    
    <div ><Layout> 
    <Header>
      <div className="logo" />
      <Nav />
      
    </Header>
    <Content className='home' style={{paddingBottom:300}}>
       <Card />
    </Content>
    
    </Layout>
       </div>
  )
}

export default Home