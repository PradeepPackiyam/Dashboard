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
        
          <Form form={form} onFinish={onFinish}
            name="useform"
          >
            <Form.Item label="id" name="id"   >
              <Input placeholder="id" required></Input>

            </Form.Item>
            <Form.Item label="email" name="email" >
              <Input placeholder="email" required></Input>

            </Form.Item>
            <Form.Item label="first_name" name="first_name" >
              <Input placeholder="first_name" required></Input>

            </Form.Item>
            <Form.Item label="last_name" name="last_name" >
              <Input placeholder="last_name" required></Input>

            </Form.Item>
            <Form.Item label="avatar" name="avatar" >
              <Input placeholder="img_url" required></Input> 

            </Form.Item>
            <Form.Item  >
              <Button block type="link"  >Fill Form</Button>
              <Button block type="primary" htmlType="onChange"  onClick={() => message.success('Processing complete!')} >Submit</Button>
              <Button block type="primary"  >Reset</Button>


            </Form.Item>
          </Form>
        

    </div>
  )
}

export default Addproductform