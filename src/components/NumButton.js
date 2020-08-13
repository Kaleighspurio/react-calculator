import React from 'react';
import Button from 'react-bootstrap/Button';

import "./style.css";

export default function NumButton(props) {
  return (
    <Button
      className="buttons"
      variant="outline-primary"
      onClick={props.handleButtonClick}
      value={props.value}
    >
      {props.value}
    </Button>
  );
}
