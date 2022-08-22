import React from 'react'
import { ReadOutlined} from '@ant-design/icons';
import {useState} from "react";
import "antd/dist/antd.css";
import { Button, Table,Layout } from "antd";


const { Content } = Layout;
function Productslist() {
    const [productlists,setProductLists]=useState([
        {
            id:1,
            productname:"Adidas Running Shoes",
            price: 8999 ,
            description:"Fluo Adidas Running Shoes For Men.Great Everyday Shoes For Runners To Go That Extra Mile. ",
            category :"men",
            status:"available",
            quantity:10
        },
        {
            id:2,
            productname:"Adidas Running Shoes",
            price: 7999 ,
            description:"Fluo Adidas Running Shoes For Women.Great Everyday Shoes For Runners To Go That Extra Mile. ",
            category :"women",
            status:"not available",
            quantity:0
        },
        {
            id:3,
            productname:"Adidas Casual Shoes",
            price: 3599 ,
            description:"Synthetic upper with Forefoot perforations for breathability. SOLE :- MBI Sole: Rubber outsole with protruding lugs for a perfect grip on different terrains and wet, slippery surfaces Lightweight EVA midsole for comfort and optimum foot support. ",
            category :"men",
            status:"available",
            quantity:13
        },
        {
            id:4,
            productname:"Adidas Casual Shoes",
            price: 3299 ,
            description:"Synthetic upper with Forefoot perforations for breathability. SOLE :- MBI Sole: Rubber outsole with protruding lugs for a perfect grip on different terrains and wet, slippery surfaces Lightweight EVA midsole for comfort and optimum foot support. ",
            category :"women",
            status:"available",
            quantity:12
        },
        {
            id:5,
            productname:"Crocs",
            price: 1099 ,
            description:"Light Weight Synthetic Upper & EVA Sole offers all day comfort. Perfect fit hook & loop shoes makes it easy to wear and offers customised fit according to foot-size.",
            category :"Kids",
            status:"available",
            quantity:13
        },
        {
            id:6,
            productname:"Crocs",
            price: 1999 ,
            description:"Light Weight Synthetic Upper & EVA Sole offers all day comfort. Perfect fit hook & loop shoes makes it easy to wear and offers customised fit according to foot-size. ",
            category :"kids",
            status:"available",
            quantity:8
        }
    ]);

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
          key: 'tag',
          title: 'price',
          dataIndex: 'price',
    
    
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
          render: () => {
            return <>
            <Button >
            <ReadOutlined />
            </Button>
             
            </>
          }
    
        }
      ]
  return (
    <div>
        <Layout>
            <Content  className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
        <Table columns={columns} dataSource={productlists} bordered
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      />
      </Content>
      </Layout>
    </div>
  )
}

export default Productslist