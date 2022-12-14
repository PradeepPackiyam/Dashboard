import React from 'react'

import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";

import { useNavigate } from "react-router-dom";

const { Header } = Layout;


function Nav() {
  const navigate = useNavigate();
  return (
    <div>
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
       
        items={new Array(2).fill(null).map((_, index) => {
          const key = index + 1;
          if ( key ===1) {
            
          return {
            key,
            label: "Home",
            onClick: () => {
              navigate("/");
            }
            
          }} 
          else{
           
            return {
                key,
                label: "Login",
                onClick: () => {
                  navigate("/Login");
                }
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