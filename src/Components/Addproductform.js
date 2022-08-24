import { Button, Form, Input,message} from "antd";
import React from 'react'
import "antd/dist/antd.css";

function Addproductform() {



    const onFinish = async (values) => {
        console.log(values)
    
      }

      
      const [form] = Form.useForm();
  return (
    <div>
        <>
          <Form form={form} onFinish={onFinish}
            name="useform"  
          >
            <Form.Item label="id" name="id"   >
              <Input placeholder="id" required></Input>

            </Form.Item>
            <Form.Item label="productname" name="productname" >
              <Input placeholder="productname" required></Input>

            </Form.Item>
            <Form.Item label="colors" name="colors" >
              <Input placeholder="colors" required></Input>

            </Form.Item>
            <Form.Item label="description" name="description" >
              <Input placeholder="description" required></Input>

            </Form.Item>
            <Form.Item label="productDetails" name="productdetails" >
              <Input placeholder="productdetails" required></Input> 

            </Form.Item>
            <Form.Item  >
             
              <Button block type="primary" htmlType="onChange"  onClick={() => message.success('Processing complete!')} >Submit</Button>
             


            </Form.Item>
          </Form>
          </>

    </div>
  )
}

export default Addproductform