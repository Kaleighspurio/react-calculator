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
    const newState = state.concat(event.target.value);
    console.log(newState);
    setState(newState);
  };

  const handleEqual = (event) => {
      const stateString = state;
      const splitStr = stateString.split(" ");
      console.log(splitStr);
      if (splitStr.length > 3) {
          alert('oops! This is a dumb calculator- You can only perform one operation on 2 numbers at a time')
      }
      const num1 = parseInt(splitStr[0]);
      const num2 = parseInt(splitStr[2]);
      if (splitStr[1] === "+") {
          const sum = num1 + num2;
          console.log(sum)
          if (isNaN(sum)) {
              alert('Oops! I think you may have a typo!')
          }
      } else if (splitStr[1] === "-") {
          const difference = num1 - num2;
          console.log(difference);
          if (isNaN(difference)) {
            alert('Oops! I think you may have a typo!')
        }
      } else if (splitStr[1] === "*") {
          const product = num1 * num2;
          console.log(product);
          if (isNaN(product)) {
            alert('Oops! I think you may have a typo!')
        }
      } else if (splitStr[1] === "/") {
          const quotient = num1 / num2;
          console.log(quotient);
          if (isNaN(quotient)) {
            alert('Oops! I think you may have a typo!')
        }
      } else {
          alert("Hmmm, something went wrong...Check what you put into the calculator and try again.")
      }
      
  }

  const handleClear = (event) => {
      setState('');
  }

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
          <OperationButton operation={' / '} handleButtonClick={handleButtonClick} />
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
          <OperationButton operation={' * '} handleButtonClick={handleButtonClick}/>
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
          <OperationButton operation={' - '} handleButtonClick={handleButtonClick}/>
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        <Col xs={3}>
          <ClearButton handleClear={handleClear} />
        </Col>
        <Col xs={3}>
          <NumButton value={0} handleButtonClick={handleButtonClick} />
        </Col>
        <Col xs={3}>
          <EqualButton handleEqual={handleEqual}/>
        </Col>
        <Col xs={3}>
          <OperationButton operation={' + '} handleButtonClick={handleButtonClick} />
        </Col>
      </Row>
    </Container>
  );
}
