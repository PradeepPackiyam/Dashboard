import React from 'react'
import { UnorderedListOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, Row, Col } from 'antd';
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;


function Dashboardsider() {
  const navigate = useNavigate();
 
  const  onClick = () => {
    navigate("/addproductpage");
  };
  const  listpage = () => {
    navigate("/dashboardpage");
  }

  return (
    <div>

      <Row >
        <Col flex={2}>
          <Layout  >
            <Sider width={200}  >


              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ height: 550 }}>
                <Menu.Item key="1"  onClick={listpage}>
                  <UnorderedListOutlined />
                  <span> ProductsList</span>



                </Menu.Item>
                <Menu.Item key="2" onClick={onClick}  >
                  <PlusCircleOutlined />
                  <span> Add Product</span>



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