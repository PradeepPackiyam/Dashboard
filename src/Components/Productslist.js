import React from 'react'

import { ReadOutlined, BorderOutlined} from '@ant-design/icons';
import {useState} from "react";
import "antd/dist/antd.css";
import { Button, Table,Layout,Row,Col } from "antd";


import "antd/dist/antd.css";
import { Button, Table, Layout } from "antd";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { ProductContext } from '../App';

const { Content } = Layout;



function Productslist() {
  const {productlists,setProductlists, productcolors, setProductcolors} = useContext(ProductContext);

  
  

  
  const columns = [
    {
      key: '1',
      title: 'id',
      dataIndex: 'id',


    },
    {
      key: '2',
      title: 'productname',
      dataIndex: 'productname',

    },

    {
      key: '3',
      title: 'colors',
      dataIndex: 'colors',

      render: (id, productlists) => (
        <>
          {productlists.colors.map(color => {

            return (
              <BorderOutlined style={{ color: productcolors[color] }} key={color} />
            );
          })}
        </>
      ),
    },
    {
      key: '4',
      title: 'description',
      dataIndex: 'description',


    },

    {
      key: '5',
      title: 'productDetails',
      dataIndex: 'productDetails',
      render:(id, productlists) => (
        <>
      {
      <Link to={{ pathname: `/productsdetails/${productlists.id}` }}>
           <Button key={id-1}>Product Details</Button>
       
</Link>
    }
</>
        )
    }
  ]
 

  return (
    <div>

      
         <Row >
         <Col flex={3}>
        <Layout >
            <Content   
          style={{
            padding: 24,
            marginTop: -580,
            marginLeft:30
            
          }}>
           
        <Table columns={columns} dataSource={productlists} bordered
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row >
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      />
      
      </Content>
      </Layout>
      </Col>
      </Row>

    </div>
   
  )
}


export default Productslist