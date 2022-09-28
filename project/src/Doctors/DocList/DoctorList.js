import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import { Link, useParams } from 'react-router-dom';
import DoctorsJSON from '../Doctors.json';


export default function DoctorList() {
    let {name}=useParams();
    let doc_dept= DoctorsJSON.Department.find((data)=>data.dep_name===name)
    console.log("doctors's name: ", doc_dept)
  return (
    <>
    <div>DoctorList</div>
    <Container>
           <Row xs={1} md={2} lg={3}>
            {doc_dept.doc_dep.map(t=>(
                <Col key={t.doc_id}>
                     <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={t.doc_img} height="325px" />
                            <Card.Body>
                                <Card.Title>{t.doc_name}</Card.Title>
                                <Card.Text>{t.doc_desc}</Card.Text>
                                <Link to={`/details_doctor/${name}`}>
                                <Button variant="outline-success">Apoinment</Button>
                                </Link>
                            </Card.Body>
                     </Card>


                     
                </Col>
            ))}

           </Row>
        </Container>
    </>
  )
}
