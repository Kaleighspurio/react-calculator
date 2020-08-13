import React, { useState } from 'react';
import NumButton from './NumButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import OperationButton from './OperationButton';
import ScreenDiv from './ScreenDiv';
import AlertEl from './AlertEl';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

export default function CalcBody() {
  const [mathProblem, setMathProblem] = useState('');
  const [alert, setAlert] = useState('hide');
  const [alertMessage, setAlertMessage] = useState('');

  const handleButtonClick = (event) => {
    const newState = mathProblem.concat(event.target.value);
    setMathProblem(newState);
  };

  const typoAlert = () => {
    setAlert('show');
    setAlertMessage('Oops! I think you may have a typo!');
    return;
  };

  const handleEqual = (event) => {
    const stateString = mathProblem;
    const splitStr = stateString.split(' ');
    if (splitStr.length > 3) {
      setAlertMessage(
        'Oops! This is a dumb calculator- You can only perform one operation at a time.  Positive numbers only...'
      );
      setAlert('show');
      return;
    }
    const num1 = parseInt(splitStr[0]);
    const num2 = parseInt(splitStr[2]);
    if (splitStr[1] === '+') {
      const sum = num1 + num2;
      if (isNaN(sum)) {
        typoAlert();
      } else {
        const answerState = mathProblem.concat(` = ${sum}`);
        setMathProblem(answerState);
      }
    } else if (splitStr[1] === '-') {
      const difference = num1 - num2;
      if (isNaN(difference)) {
        typoAlert();
      } else {
        const answerState = mathProblem.concat(` = ${difference}`);
        setMathProblem(answerState);
      }
    } else if (splitStr[1] === 'x') {
      const product = num1 * num2;
      if (isNaN(product)) {
        typoAlert();
      } else {
        const answerState = mathProblem.concat(` = ${product}`);
        setMathProblem(answerState);
      }
    } else if (splitStr[1] === '÷') {
      const quotient = num1 / num2;
      if (isNaN(quotient)) {
        typoAlert();
      } else {
        const answerState = mathProblem.concat(` = ${quotient}`);
        setMathProblem(answerState);
      }
    } else {
      setAlert('show');
      setAlertMessage(
        'Hmmm, something went wrong...Check what you put into the calculator and try again.'
      );
    }
  };

  const handleClear = (event) => {
    setMathProblem('');
    setAlert('hide');
    setAlertMessage('');
  };

  const showAlert = () => {
    if (alert === 'show') {
      return <AlertEl message={alertMessage} />;
    }
  };

  return (
    <Container className="calc-body">
      {showAlert()}
      <Row className="justify-content-center">
        <Col xl="9" lg="10" md="12" sm="11" xs="11">
          <ScreenDiv input={mathProblem} />
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
          <OperationButton
            operation={' ÷ '}
            handleButtonClick={handleButtonClick}
          />
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
          <OperationButton
            operation={' x '}
            handleButtonClick={handleButtonClick}
          />
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
          <OperationButton
            operation={' - '}
            handleButtonClick={handleButtonClick}
          />
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
          <EqualButton handleEqual={handleEqual} />
        </Col>
        <Col xs={3}>
          <OperationButton
            operation={' + '}
            handleButtonClick={handleButtonClick}
          />
        </Col>
      </Row>
    </Container>
  );
}
