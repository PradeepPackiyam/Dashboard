import React from 'react'
import { Layout, Card,Row,Col } from 'antd';
import "antd/dist/antd.css";


const { Meta } = Card;

const Cards = () => {

    const { Header,Content } = Layout;







  return (

    <div className='content'>
    
<h1 style={{marginTop:100,marginBottom:-100,fontFamily:'verdana',fontSize:"50px"}}>Our Offers Below!</h1>



<Content>
<Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div>

        <Content>
        <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30,
      padding:50,
      marginTop:'200px',
    }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />}
  >
    <Meta title="Create Your own app" description="www.instagram.com" />
  </Card>
  </Content>
        </div>
    </Col>



      <Col className="gutter-row" span={6}>
        <div>

        <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30,
      padding:50,
      marginTop:'200px'



    }}
    cover={<img alt="example"  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"  />}
  >
    <Meta title="React Basic Course Package" description="www.instagram.com" />
  </Card>

        </div>
      </Col>





      <Col className="gutter-row" span={6}>
        <div >

        <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30,
      padding:50,
      marginTop:'200px'



    }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"  />}
  >
    <Meta title="Become a web developer" description="www.instagram.com" />
  </Card>

        </div>
      </Col>







      <Col className="gutter-row" span={6}>
        <div>

        <Card
    hoverable
    style={{
      width: 300,
      borderRadius:30,
      padding:50,
      marginTop:'200px'



    }}
    cover={<img alt="example"  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />}
  >
    <Meta title="React Advance Course Package" description="www.instagram.com" />
  </Card>

        </div>
      </Col>
     
    </Row>
    </Content>
    </div>
   
  )



}

export default Cards