import { Button, Form, Input,message, Radio,Modal} from "antd";

import { Checkbox,Layout,Row,Col,Select, InputNumber,Card  } from 'antd';

import React from 'react'
import { useContext,useState } from 'react'
import { ProductContext } from '../App';
import "antd/dist/antd.css";


const CheckboxGroup = Checkbox.Group;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


function Addproductform() {
  const { Content } = Layout;

  const {productlists,setProductLists,productcategory,value, setValue} = useContext(ProductContext);

    const onFinish = (values) => {
        console.log("category", values)
        const keys=productlists.length+1;
     const newproducts ={
      id:keys,
      productname:values.productname,
      price:values.price,
      description:values.description,
      colors: values.colors,
      category:values.category,
      status:values.status,
      quantity:values.quantity,
      key:keys
     }
//  console.log("pppppdd", productlists)
// console.log("dddddd", newproducts)
setProductLists([...productlists,newproducts])
 console.log("pppppdd", newproducts)
 message.success('Processing complete!')
    }
    
    
    
      const options = [
        { label: 'Blue', value: '0' },
        { label: 'Green', value: '1' },
        { label: 'Yellow', value: '2' },
        { label: 'Orange', value: '3' },
        { label: 'Geek_blue', value: '4' },
        { label: 'Purple', value: '5' },
        { label: 'Magenta', value: '6' },
        { label: 'Gray', value: '7' },
        { label: 'Lime', value: '8' },
        { label: 'Cyan', value: '9' },
        { label: 'Gold', value: '10' },
      
      ];
      
      const  plainOptions = [
        { label: 'Mens', value: '0' },
        { label: 'Womens', value: '1' },
        { label: 'Kids', value: '2' },
        { label: 'Others', value: '3' },
      ];
      const [form] = Form.useForm();
      
  
  return (
    <div >
        <>
      
        <Layout >
          
          <Content className="home">
         
          
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



            <Card title='NEW PRODUCT' style={{borderRadius:50}}>
           

            <Form.Item label="Productname" name="productname"
 rules={[{ required: true, message: 'Please input productname ' }]}>
              <Input placeholder="productname" required  style={{borderRadius:30}}></Input>

            </Form.Item>
            <Form.Item label="Price" name="price" 
rules={[{ required: true, message: 'Please input price' }]}>
  <InputNumber
    
      min={1}
      max={10000}
      formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
       style={{borderRadius:30}}
      
    />

             

            </Form.Item>
            <Form.Item label="Description" name="description"  rules={[{ required: true, message: 'Please input the product description' }]} >
              <Input placeholder="description" required style={{borderRadius:30}}></Input>


            </Form.Item>
            

            <Form.Item label="colors" name="colors"
             rules={[{ required: true, message: 'Please input productcolors' }]} >
            <Select
    mode="multiple"
    showArrow
   
    style={{ width: '100%' }}
    options={options}
  />
            </Form.Item>

            <Form.Item label="category" name="category"
             rules={[{ required: true, message: 'Please input category ' }]} >

            {(
               <Checkbox.Group options={plainOptions}  />

          )}

            </Form.Item>
             

            
           

            <Form.Item label="status" name="status" 
             rules={[{ required: true, message: 'Please input productstatus ' }]}>

            {(
            <RadioGroup>
              <Radio value="available">available</Radio>
           
              <Radio value="not available">not available</Radio>
            </RadioGroup>
          )}

            </Form.Item>

            <Form.Item label="quantity" name="quantity" 
 rules={[{ required: true, message: 'Please enter the quantity of the product ' }]}>
               <InputNumber
    
    min={0}
    max={10000}
    formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
    style={{borderRadius:30}}
  />
           


            </Form.Item>
            
            <Form.Item label=" " >
             
             <Button flex type="primary" htmlType="onChange"   >Submit</Button>
            



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