import React from 'react';
import Button from 'react-bootstrap/Button';

export default function NumButton(props) {
  return (
    <Button
      variant="outline-primary"
      onClick={props.handleButtonClick}
      value={props.value}
    >
      {props.value}
    </Button>
  );
}
