import React from 'react'
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";

import { useNavigate } from "react-router-dom";

const { Header } = Layout;
function Dashboardnav() {
    const navigate = useNavigate();
  return (
    <div><Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={new Array(2).fill(null).map((_, index) => {
          const key = index + 1;
          if ( key ===1) {
            
          return {
            key,
            label: "DashBoard",
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
    
   
    
      
      
   
  </Layout></div>
  )
}

export default Dashboardnav