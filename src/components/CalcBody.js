import React, { useState } from 'react';
import NumButton from './NumButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import OperationButton from './OperationButton';
import ScreenDiv from './ScreenDiv';

import { Container, Row, Col } from 'react-bootstrap';

export default function CalcBody() {
  const [state, setState] = useState('');

  const handleButtonClick = (event) => {
    // const currentState = state
    const newState = state.concat(event.target.value);
    console.log(newState);
    setState(newState);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <ScreenDiv input={state} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <NumButton value={7} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <NumButton value={8} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <NumButton value={9} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <OperationButton operation={'/'} handleButtonClick={handleButtonClick} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <NumButton value={4} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <NumButton value={5} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <NumButton value={6} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <OperationButton operation={'*'} handleButtonClick={handleButtonClick}/>
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <NumButton value={1} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <NumButton value={2} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <NumButton value={3} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <OperationButton operation={'-'} handleButtonClick={handleButtonClick}/>
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <ClearButton />
        </Col>
        <Col xs={3}>
          <NumButton value={0} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <EqualButton />
        </Col>
        <Col xs={3}>
          <OperationButton operation={'+'} handleButtonClick={handleButtonClick} />
        </Col>
      </Row>
    </Container>
  );
}
