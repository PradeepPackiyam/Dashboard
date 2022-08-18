import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import Nav from './Nav';
import Card from './Card'
import { Content } from 'antd/lib/layout/layout';
const { Header } = Layout;

function Home() {
  return (
    
    <div><Layout className="layout"> 
    <Header>
      <div className="logo" />
      <Nav />
    </Header>
    <Content>
       <Card />
    </Content>
    </Layout>
       </div>
  )
}

export default Home