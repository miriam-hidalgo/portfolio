import React from 'react';
import {Row, Col, Image, Container} from 'react-bootstrap';
import photo from '../img/Professional.jpg';
import './Heading.css';


function Heading() {
  return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">


    <Row>
    <Col xs={6} md={4}>
    <Image src={photo} roundedCircle thumbnail />
    </Col>

    <Col xs={6} md={8}>
      <h1 className="display-4">Hello, I am Miriam Hidalgo</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </Col>

  </Row>
    


  </div>
</div>
  
  
 
  );
}

export default Heading;
