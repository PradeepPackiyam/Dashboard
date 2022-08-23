import { UnorderedListOutlined, PlusCircleOutlined } from '@ant-design/icons';

import React from 'react'
import { Layout, Menu,  Modal  } from 'antd';

import "antd/dist/antd.css";

import Addproductform from './Addproductform';
import { useState } from 'react'



const { Sider } = Layout;
function Dashboardsider() {
    
    const [isModalVisible, setIsModalVisible] = useState();
   
 

    const showModalAdd = () => {
        setIsModalVisible(true);
      };
      const handleOk = () => {
        setIsModalVisible(false);
      }
      const handleCancel = () => {
        setIsModalVisible(false);
      }

    return (



    
    <div>
        <Layout>
        <Sider width={200} className="site-layout-background">
        
            <Menu theme="dark" defaultSelectedKeys={['1']}  mode="inline"  style={{ height:800, borderRight: 0 }}>
                            <Menu.Item key="1">
                            <UnorderedListOutlined />
                                <span> ProductsList</span>
                                

                          
                            </Menu.Item>
                            <Menu.Item key="2"  onClick={showModalAdd}>
                            <PlusCircleOutlined />
                                <span> Add Product</span>
                                <Modal
          title="Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          >  </Modal>
                            </Menu.Item>
                        </Menu>
                        
        
      </Sider>
        </Layout>
    </div>
  )
}

export default Dashboardsider