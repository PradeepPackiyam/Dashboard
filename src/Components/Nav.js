import React from 'react'

import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
const { Header } = Layout;

function Nav() {
  return (
    <div>
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(2).fill(null).map((_, index) => {
          const key = index + 1;
          if ( key ===1) {
          return {
            key,
            label: "Home",
          }}
          else{
            return {
                key,
                label: "Login",
                
              }
          };
        })}
      />
    </Header>
    
   
    
      
      
   
  </Layout>
    </div>
  )
}

export default Nav