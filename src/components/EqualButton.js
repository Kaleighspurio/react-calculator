import React from 'react';
import Button from 'react-bootstrap/Button';

import './style.css';

export default function EqualButton(props) {
  return (
    <Button
      className="buttons"
      variant="outline-success"
      onClick={props.handleEqual}
    >
      =
    </Button>
  );
}
