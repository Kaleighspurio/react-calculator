import React from 'react';

import Alert from 'react-bootstrap/Alert';

export default function AlertEl(props) {
    return <Alert variant="danger">
        {props.message}
    </Alert>
}