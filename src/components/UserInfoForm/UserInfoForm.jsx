import React, {useState, useContext} from 'react';
//import Input from '../../components/UI/Input/Input';
import {checkValidity, canBeValue, canBeName, IsInteger} from '../../utils/validation';
import UserInputRows from './UsersInfoRows/UserInputRows';
// import * as ROUTES from '../../constants/routes';
// import {UserContext} from '../../App.js';

import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Jumbotron,
    Alert,
    Badge
  } from 'react-bootstrap';

const INITIAL_INPUTS_STATE = {
  name: {
    elementType: 'text',
    placeholder: 'Enter your name',
    label: "Name",
    value: '',
    invalidMessage: "Insert correct name",
    validation: {
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    valid: false,
    toutched: false
  },
  surname: {
    elementType: 'text',
    placeholder: 'Enter your surname',
    label: "Surname",
    value: '',
    invalidMessage: "Insert correct surname",
    validation: {
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    valid: false,
    toutched: false
  },
  age: {
    elementType: 'number',
    placeholder: 'Enter your age',
    label: "Age",
    value: '',
    invalidMessage: "Age must be interger from 1 to 150",
    validation: {
      required: true,
      minLength: 1,
      maxLength: 3,
      minValue: 1,
      maxValue: 150,
    },
    valid: false,
    toutched: false
  }
}

const UserInfoForm = () => {

  const [inputsState, setInputsState] = useState(INITIAL_INPUTS_STATE);
  const [validationMessage, setValidationMessage] = useState(null);

  const validateForm = () => {
    const newInputs ={...inputsState};
    let validationState = true;

    if(!canBeName(inputsState.name.value))
    {
      newInputs.name.valid = false;
      newInputs.name.toutched = true;
      validationState = false;
    }
    if(!canBeName(inputsState.surname.value))
    {
      newInputs.surname.valid = false;
      newInputs.surname.toutched = true;
      validationState = false;
    }
    const numericAge = Number(inputsState.age.value);

   if(!IsInteger(numericAge) || numericAge > 150 || numericAge <= 0)
    {
      newInputs.age.valid= false;
      newInputs.age.toutched = true;
      validationState = false;
    }
    setInputsState(newInputs);
    if(!validationState)
    {
        setValidationMessage("Fill all fields correctly");
    }
    return validationState;
  }

  const onChange = (event, controlName) => {
    if(validationMessage!== null)
    {
        setValidationMessage(null)
    }
    const minValOrFalse = inputsState[controlName].validation.minValue ?
     inputsState[controlName].validation.minValue : false;

    const isNewValue = canBeValue(event.target.value, inputsState[controlName].validation.maxLength, minValOrFalse)
    const newValue = isNewValue ? event.target.value : inputsState[controlName].value;
    const updatedControls = {
      ...inputsState,
      [controlName]: {
        ...inputsState[controlName],
        value: newValue,
        valid: checkValidity(newValue, inputsState[controlName].validation),
        toutched: true
      }
    }
    setInputsState(updatedControls)
  };

  const saveFormValues = () => {
  };

  const onSubmit = (event) => {
    if(validateForm())
    {
      saveFormValues();
    }
    event.preventDefault();
  }

  return (
        <Form noValidate  onSubmit={onSubmit} validated={inputsState.valid && inputsState.toutched}>
        <UserInputRows inputsState={inputsState} onChange = {onChange}/>
          <Row className="justify-content-center">
            <Col md="auto">
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="auto">
              {validationMessage ?
                <Badge variant="danger">{validationMessage}</Badge>
              : null}
            </Col>
          </Row>
          <br/>
          <Row className="justify-content-center">
            <Col md="auto">
              <Button type="submit">Save</Button>
            </Col>
          </Row>
        </Form>
  )
}

export default UserInfoForm
