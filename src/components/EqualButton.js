import React from 'react';
import Button from 'react-bootstrap/Button';

export default function EqualButton(props) {
  return <Button variant="outline-success" onClick={props.handleEqual} >Equal</Button>;
}
