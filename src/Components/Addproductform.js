import { Button, Form, Input,message, Radio,Modal} from "antd";
import { Checkbox,Layout,Row,Col,Card  } from 'antd';
import React from 'react'
import { useContext,useState } from 'react'
import { ProductContext } from '../App';
import "antd/dist/antd.css";


const CheckboxGroup = Checkbox.Group;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


function Addproductform() {
  const { Content } = Layout;

  const {productlists,setProductLists} = useContext(ProductContext);

    const onFinish = (values) => {
        console.log(values)
     const newproducts = [...productlists,values];
//  console.log("pppppdd", productlists)
// console.log("dddddd", newproducts)
setProductLists([...productlists,values])
 console.log("pppppdd", productlists)
    }
    
    
    
      const options = [
        { label: '#0088FE', value: '0' },
        { label: '#00C49F', value: '1' },
        { label: '#FFBB28', value: '2' },
        { label: '#FF804', value: '3' },
      ];

      const [form] = Form.useForm();
  
  return (
    <div >
        <>
      
        <Layout>
          
          <Content className="home" style={{marginLeft:'-180px',marginRight:'-160px'}}>
         
          
          <Form form={form} onFinish={onFinish}
            name="useform"  
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          
            colon={false}
            
            className='home'
            style={{marginTop:'50px',padding:'50px',paddingBottom:'250px'}}

          >


            <Card title='NEW PRODUCT' style={{borderRadius:50,padding:40}}>
            <Form.Item label="ID" name="id"   >
              <Input placeholder="id" required  style={{borderRadius:30}}></Input>

            </Form.Item>
            <Form.Item label="Productname" name="productname" >
              <Input placeholder="productname" required  style={{borderRadius:30}}></Input>

            </Form.Item>
            <Form.Item label="Price" name="price" >
              <Input placeholder="price" required style={{borderRadius:30}}></Input>

            </Form.Item>
            <Form.Item label="Description" name="description" >
              <Input placeholder="description" required style={{borderRadius:30}}></Input>

            </Form.Item>
            

            <Form.Item label="Colors" name="colors" >
            <CheckboxGroup options={options}  />
            </Form.Item>

            <Form.Item label="Category" name="category" >
            {(
            <RadioGroup>
              <Radio value="Mens">Mens</Radio>
              <Radio value="womens">womens</Radio>
              <Radio value="Kids">Kids</Radio>
            </RadioGroup>
          )}

            </Form.Item>
             

            
           
            <Form.Item label="Status" name="status" >
            {(
            <RadioGroup>
              <Radio value="available">available</Radio>
           
              <Radio value="not available">not available</Radio>
            </RadioGroup>
          )}

            </Form.Item>
            <Form.Item label="Quantity" name="quantity" >
              <Input placeholder="quantity" required  style={{borderRadius:30}}></Input> 

            </Form.Item>
            <Form.Item label=" " >
             
              <Button flex type="primary" htmlType="onChange"  onClick={() => message.success('Processing complete!')} >Submit</Button>
             


            </Form.Item>
            </Card>
          </Form>
          </Content>
          </Layout>
          </>

    </div>
  )
}

export default Addproductform