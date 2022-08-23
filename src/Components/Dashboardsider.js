import { UnorderedListOutlined, PlusCircleOutlined } from '@ant-design/icons';

import React from 'react'
import { Layout, Menu,Icon } from 'antd';

import "antd/dist/antd.css";
import { useNavigate,  Link } from "react-router-dom";
const { Sider } = Layout;
function Dashboardsider() {
    const navigate = useNavigate();

 

    return (



    
    <div>
        <Layout>
        <Sider width={200} className="site-layout-background">
        
            <Menu theme="dark"  mode="inline"  style={{ height:800, borderRight: 0 }}>
                            <Menu.Item key="1">
                            <UnorderedListOutlined />
                                <span> ProductsList</span>
                               

                                <Link to="/productslist" />
                            </Menu.Item>
                            <Menu.Item key="2">
                            <PlusCircleOutlined />
                                <span> Add Product</span>
                                <Link to="" />
                            </Menu.Item>
                        </Menu>
                        
        
      </Sider>
        </Layout>
    </div>
  )
}

export default Dashboardsider