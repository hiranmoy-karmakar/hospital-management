import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import DoctorsJSON from '../Doctors.json'
export default class Department extends Component {
  render() {
    return (
      <div>
        <h1>Department</h1>
        <Container>
           <Row xs={1} md={2} lg={3}>
            {DoctorsJSON.Department.map(dep=>(
                <Col key={dep.dep_id}>
                     <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={dep.dep_img} height="325px"/>
                            <Card.Body>
                                <Card.Title>{dep.dep_name}</Card.Title>
                               
                                <Link to={`/department/${dep.dep_name}`}>
                                <Button variant="outline-danger">View More</Button>
                                </Link>
                            </Card.Body>
                     </Card>


                     
                </Col>
            ))}

           </Row>
        </Container>
      </div>
    )
  }
}
