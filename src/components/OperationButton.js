import React from 'react';
import Button from 'react-bootstrap/Button';

export default function OperationButton(props) {
  return <Button variant="outline-secondary">{props.value}</Button>;
}
