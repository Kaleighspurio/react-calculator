import React from 'react';
import NumButton from './NumButton';
import ClearButton from "./ClearButton";
import EqualButton from './EqualButton';
import OperationButton from './OperationButton';
import ScreenDiv from './ScreenDiv';

import { Container, Row, Col } from 'react-bootstrap';

export default function CalcBody() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <ScreenDiv/>
                </Col>
            </Row>
            <Row>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <OperationButton/>
            </Col>
            </Row>
            <Row>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <OperationButton/>
            </Col>
            </Row>
            <Row>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <OperationButton/>
            </Col>
            </Row>
            <Row>
            <Col xs={3}>
                <ClearButton/>
            </Col>
            <Col xs={3}>
                <NumButton/>
            </Col>
            <Col xs={3}>
                <EqualButton/>
            </Col>
            <Col xs={3}>
                <OperationButton/>
            </Col>
            </Row>
        </Container>
    )
}