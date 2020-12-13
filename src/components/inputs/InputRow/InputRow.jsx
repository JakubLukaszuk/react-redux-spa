import React from 'react';
import {
    Form,
    Alert,
    Col,
    Row
 } from 'react-bootstrap';
 import './InputRow.sass'

const InputRow = (props) => {
    const {label, value, toutched, isValid, type, placeholder, onChange, invalidMessage} = props;
    return (
      <Form.Group as={Row} >
        <Col md={2}>
            <Form.Label column >
                {label}
            </Form.Label>
        </Col>
        <Col md={8}>
          <Form.Control value = {value} type={type} placeholder={placeholder} onChange={onChange} required
          isValid = {isValid && toutched} isInvalid={!isValid && toutched}/>
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {invalidMessage}
          </Form.Control.Feedback>
        </Col>
        <Col md={2}>
            <Alert className="alertBar" variant= {!isValid && toutched ? 'danger' : 'success'}/>
        </Col>
      </Form.Group>
    )
}

export default InputRow
