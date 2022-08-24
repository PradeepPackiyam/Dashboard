import { Button, Form, Input } from 'antd';
import "antd/dist/antd.css";
import   Icon,{ UserOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

import React from 'react'


function Forms() {
  const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        navigate("/Dashboardpage");
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
     
  return (
    
    <div >
      <div>
        
      <UserOutlined style={{fontSize:'xx-large',marginTop:80,backgroundColor:"beige",borderRadius:50,padding:20,marginLeft:120}} /><h2 style={{marginLeft:120}}>Login</h2>
      
      <Form style={{paddingTop:80,marginBottom:'100%'}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        
        rules={[{ required: true, message: 'Please input your username!' },
      {type: "email", message: 'Please input your mail'}]}
      hasFeedback
      >
        <Input placeholder="enter your email"  style={{borderRadius:30,fontSize:'x-large'}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
        >
        <Input.Password   placeholder="enter your password"  style={{borderRadius:30,fontSize:'x-large'}}/>
      </Form.Item>

     
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{borderRadius:20}}>
         Login to Dashboard 
        </Button>
      </Form.Item>
    </Form>  
    
    </div>
    
    </div>

  )
}

export default Forms