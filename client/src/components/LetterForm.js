import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const LetterForm =() => (
    <Form>
        <Form.Group controlId="formSender" style={{width: '15rem'}}>
            <Form.Label>Sender of photo(s)</Form.Label>
            <Form.Control type="sender" placeholder="sender" />
        </Form.Group>

        <Form.Group controlId="formReceiver" style={{width: '15rem'}}>
            <Form.Label>Receiver of photo(s)</Form.Label>
            <Form.Control type="receiver" placeholder="receiver" />
        </Form.Group>

        <Form.Group controlId="formSenderAddress" style={{width: '30rem'}}>
            <Form.Label>Sender address</Form.Label>
            <Form.Control type="senderAddress" placeholder="sender address" />
        </Form.Group>

        <Form.Group controlId="formReceiverAddress" style={{width: '30rem'}}>
            <Form.Label>Receiver address</Form.Label>
            <Form.Control type="receiverAddress" placeholder="receiver address" />
        </Form.Group>

        <Button type="done" variant="primary">Done</Button>
    </Form>
)