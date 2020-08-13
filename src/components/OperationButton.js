import React from 'react';
import Button from 'react-bootstrap/Button';

import './style.css'

export default function OperationButton(props) {
  return <Button className="buttons"variant="outline-secondary" onClick={props.handleButtonClick} value={props.operation}>{props.operation}</Button>;
}
