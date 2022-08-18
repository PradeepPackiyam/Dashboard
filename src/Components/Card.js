import React from 'react'
import { Layout, Card } from 'antd';
import "antd/dist/antd.css";


const { Meta } = Card;

const Cards = () => {

    const { Header,Content } = Layout;







  return (

    <div>
    
    


<h1 style={{marginTop:100,marginBottom:-100,fontFamily:'cursive'}}>Our Offers Below!</h1>

<Content className='content'>
    <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30
    }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />}
  >
    <Meta title="Create Your own app" description="www.instagram.com" />
  </Card>

  </Content>





  <Content className='content'>
    <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30

    }}
    cover={<img alt="example"  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"  />}
  >
    <Meta title="React Basic Course Package" description="www.instagram.com" />
  </Card>
  
  </Content>




  <Content className='content'>
    <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30

    }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"  />}
  >
    <Meta title="Become a web developer" description="www.instagram.com" />
  </Card>
  
  </Content>




  <Content className='content'>
    <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30

    }}
    cover={<img alt="example"  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />}
  >
    <Meta title="React Advance Course Package" description="www.instagram.com" />
  </Card>
  
  </Content>
   
    </div>
  )



}

export default Cards