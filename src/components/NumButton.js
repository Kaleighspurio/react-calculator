import React from 'react';
import Button from 'react-bootstrap/Button';

export default function NumButton(props) {
  return <Button variant="outline-primary">{props.value}</Button>;
}
