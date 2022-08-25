import { Button, Form, Input,message, Radio,Modal} from "antd";
import { Checkbox,Layout,Row,Col  } from 'antd';
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
    <div>
        <>
      
        
          <Form form={form} onFinish={onFinish}
            name="useform"  
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          
            colon={false}
            

          >
            <Form.Item label="id" name="id"   >
              <Input placeholder="id" required></Input>

            </Form.Item>
            <Form.Item label="productname" name="productname" >
              <Input placeholder="productname" required></Input>

            </Form.Item>
            <Form.Item label="price" name="price" >
              <Input placeholder="price" required></Input>

            </Form.Item>
            <Form.Item label="description" name="description" >
              <Input placeholder="description" required></Input>

            </Form.Item>
            

            <Form.Item label="colors" name="colors" >
            <CheckboxGroup options={options}  />
            </Form.Item>

            <Form.Item label="category" name="category" >
            {(
            <RadioGroup>
              <Radio value="Mens">Mens</Radio>
              <Radio value="womens">womens</Radio>
              <Radio value="Kids">Kids</Radio>
            </RadioGroup>
          )}

            </Form.Item>
             

            
           
            <Form.Item label="status" name="status" >
            {(
            <RadioGroup>
              <Radio value="available">available</Radio>
           
              <Radio value="not available">not available</Radio>
            </RadioGroup>
          )}

            </Form.Item>
            <Form.Item label="quantity" name="quantity" >
              <Input placeholder="quantity" required></Input> 

            </Form.Item>
            <Form.Item label=" " >
             
              <Button flex type="primary" htmlType="onChange"  onClick={() => message.success('Processing complete!')} >Submit</Button>
             


            </Form.Item>
          </Form>
         
         
          </>

    </div>
  )
}

export default Addproductform