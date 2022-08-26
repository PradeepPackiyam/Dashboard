import React from 'react'
import { ReadOutlined, InfoCircleTwoTone,CloudFilled} from '@ant-design/icons';
import "antd/dist/antd.css";
import { Button, Table,Layout,} from "antd";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { ProductContext } from '../App';
import { hover } from '@testing-library/user-event/dist/hover';

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
      title: 'price',
      dataIndex: 'price',

    },

    {
      key: '3',
      title: 'colors',
      dataIndex: 'colors',

      render: (id, productlists) => (
        <>
          {productlists.colors.map(color => {

            return (
             
           
              <CloudFilled style={{ color: productcolors[color] }} key={color} />
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
           <Button  key={id-1}  hoverable style={{color:'white',backgroundColor:'rgb(0,21,41)',borderRadius:'10px',fontSize:'medium',paddingBottom:30}}> <InfoCircleTwoTone  style={{fontSize:'medium'}}/>Product Details</Button>
       
</Link>
    }
</>
        )
    }
  ]
 

  return (
     
    <div >

      
         
        <Layout >
            <Content >
           
        <Table columns={columns}   dataSource={productlists} bordered
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
      

    </div>
   
  )
}


export default Productslist