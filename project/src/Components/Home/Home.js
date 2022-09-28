import React from 'react'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function Home() {
  return (
    <div>
    
    <Carousel>
      <Carousel.Item>
        <img height={700}
          className="d-block w-100"
          src="../../../../Images/bg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h2> We Are Here For Your Care</h2>
        <h1>  We The Best Doctors</h1>
        <p>We are here for your care 24/7. Any help just call us.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
 <React.Fragment>
      <div className='background_text'>
        <div className='middle_text'>
            <h3 className='wcu'>Why choose us</h3>
            <p className='wabttb'>We are better than the best</p>
        </div>


  
        <div className='right_text'>
          Your health is<br/> our priority
        
          </div>
        
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup className='listGroup'>
                <ListGroup.Item action href="#link1" className='listGroupItem'>
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Link 3
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Link 4
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  dgsrgsg
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  vb vnbdgfth
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  sgrdshrh
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                 segvsegvsgveh
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
    </Tab.Container>
   
   



      </div>

    </React.Fragment>

  
     </div>
  )
}
