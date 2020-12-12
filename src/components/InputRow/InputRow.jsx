import React from 'react';
import {
    Form,
    Alert,
    Col,
    Row
 } from 'react-bootstrap';

const InputRow = (props) => {
    const {label, value, toutched, isValid, type, placeholder, onChange, invalidMessage} = props;
    return (
      <Form.Group as={Row} >
        <Col>
            <Form.Label column lg={2}>
                {label}
            </Form.Label>
        </Col>
        <Col>
          <Form.Control value = {value} type={type} placeholder= {placeholder} onChange={onChange} required
          isValid = {isValid && toutched} isInvalid={!isValid && toutched}/>
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {invalidMessage}
          </Form.Control.Feedback>
        </Col>
        <Col sm={2}>
            <Alert variant= {!isValid && toutched ? 'danger' : 'success'}/>
        </Col>
      </Form.Group>
    )
}

export default InputRow
