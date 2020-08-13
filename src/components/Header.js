import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import './style.css';

export default function Header() {
  return (
    <Jumbotron fluid className="header">
      <Container>
        <h1>Four Function Calulator</h1>
        <p>This simple calculator handles single operation math problems.</p>
      </Container>
    </Jumbotron>
  );
}
