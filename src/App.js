import React from 'react';
import Header from './components/Header';
import CalcBody from './components/CalcBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
          
          </Col>
          <Col md="6">
            <CalcBody/>
          </Col>
          <Col xs lg="2">
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
