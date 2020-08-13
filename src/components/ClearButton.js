import React from 'react';
import Button from 'react-bootstrap/Button';

import './style.css'

export default function ClearButton(props) {
  return (
    <Button className="buttons" variant="outline-danger" onClick={props.handleClear}>
      Clear
    </Button>
  );
}
