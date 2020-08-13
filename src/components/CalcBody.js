import React from 'react';
import NumButton from './NumButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import OperationButton from './OperationButton';
import ScreenDiv from './ScreenDiv';

import { Container, Row, Col } from 'react-bootstrap';

export default function CalcBody() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <ScreenDiv />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <NumButton value={7} />
        </Col>
        <Col xs={3}>
          <NumButton value={8} />
        </Col>
        <Col xs={3}>
          <NumButton value={9} />
        </Col>
        <Col xs={3}>
          <OperationButton value="÷" />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <NumButton value={4} />
        </Col>
        <Col xs={3}>
          <NumButton value={5} />
        </Col>
        <Col xs={3}>
          <NumButton value={6} />
        </Col>
        <Col xs={3}>
          <OperationButton value={'X'} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <NumButton value={1} />
        </Col>
        <Col xs={3}>
          <NumButton value={2} />
        </Col>
        <Col xs={3}>
          <NumButton value={3} />
        </Col>
        <Col xs={3}>
          <OperationButton value={'-'} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <ClearButton />
        </Col>
        <Col xs={3}>
          <NumButton value={0} />
        </Col>
        <Col xs={3}>
          <EqualButton />
        </Col>
        <Col xs={3}>
          <OperationButton value={'+'} />
        </Col>
      </Row>
    </Container>
  );
}
