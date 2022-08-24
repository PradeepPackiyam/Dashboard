import { UnorderedListOutlined, PlusCircleOutlined } from '@ant-design/icons';

import React from 'react'

import { Layout, Menu,  Modal , Row, Col } from 'antd';


import "antd/dist/antd.css";

import Addproductform from './Addproductform';
import { useState } from 'react'



const { Sider } = Layout;
function Dashboardsider() {
    
 
    const [visible, setVisible] = useState();
   
 

    const showModalAdd = () => {
        setVisible(true);
      };
      const handleOk = () => {
        setVisible(false);
      }
      const handleCancel = () => {
        setVisible(false);
      }

      const showModal = () => {
        setVisible(true);
      };



    return (



    
    <div>

        <Row >
        <Col flex={2}>
        <Layout  >
        <Sider width={200}  >

        
            <Menu theme="dark" defaultSelectedKeys={['1']}  mode="inline"  style={{ height:550}}>
                            <Menu.Item key="1">
                            <UnorderedListOutlined />
                                <span> ProductsList</span>
                                

                          
                            </Menu.Item>
                            <Menu.Item key="2"  onClick={showModal}>
                            <PlusCircleOutlined />
                                <span> Add Product</span>



                                <Modal

        visible={visible}
        title="New User"
        onCancel={handleCancel}
        footer={[
        ]}> <Addproductform   onClick={showModalAdd}  /> 



        
        
        </Modal>
         </Menu.Item>
         </Menu>

                        
        
      </Sider>
        </Layout>
        </Col>
        </Row>
    </div>
  )
}

export default Dashboardsider