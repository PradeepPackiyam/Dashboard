import { Button, Form, Input } from 'antd';
import "antd/dist/antd.css";
import   Icon,{ UserOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { Row,Col } from 'antd';
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
      <Row>
      <Col span={8}></Col>
      <Col span={8}> <UserOutlined style={{fontSize:'xx-large',marginTop:80,backgroundColor:"beige",borderRadius:50,padding:20,marginLeft:120}} > </UserOutlined> <h1   style={{marginLeft:120}}>LOGIN</h1></Col>
      <Col span={8}></Col>

      
    </Row>  
 
     
      
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
        <Input placeholder="enter your email"  style={{borderRadius:30,fontSize:'x-large',width:'320px'}}/>
      </Form.Item>
<Row>
<Col span={6}></Col>
<Col span={6}>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
        >
        <Input.Password   placeholder="enter your password"  style={{borderRadius:30,fontSize:'x-large',width:'320px'}}/>
      </Form.Item>
      </Col>
      </Row>


      <Row>
      <Col span={6}></Col>
      <Col span={10}> <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button  htmlType="submit" style={{borderRadius:20,color:"white", backgroundColor:'#15191d', marginLeft:20}}>
         Login to Dashboard 
        </Button>
      </Form.Item>
      </Col>
      <Col span={8}></Col>

      
    </Row>  
      
    </Form>  
    
    </div>
    
    </div>

  )
}

export default Forms