import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ClearButton(props) {
  return (
    <Button variant="outline-danger" onClick={props.handleClear}>
      Clear
    </Button>
  );
}
