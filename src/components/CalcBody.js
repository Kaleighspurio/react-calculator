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
            <Row xs={2} md={4} lg={6} className="justify-content-center">
                <Col>
                    <ScreenDiv/>
                </Col>
            </Row>
            <Row xs={2} md={4} lg={6} className="justify-content-center">
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
            <Row xs={2} md={4} lg={6} className="justify-content-center">
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
            <Row xs={2} md={4} lg={6} className="justify-content-center">
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
            <Row xs={2} md={4} lg={6} className="justify-content-center">
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