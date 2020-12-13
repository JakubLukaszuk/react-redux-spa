import React, {useState, useEffect} from 'react';
import {checkValidity, canBeValue, canBeName, IsInteger} from '../../utils/validation';
import UserInputRows from './UsersInfoRows/UserInputRows';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserData,
  setUserData
} from '../../slices/userSlice';

// import * as ROUTES from '../../constants/routes';


import {
    Form,
    Button,
    Col,
    Row,
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
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const [inputsState, setInputsState] = useState(INITIAL_INPUTS_STATE);
  const [validationMessage, setValidationMessage] = useState(null);

  useEffect(()=>{
    const newInputState = {...inputsState};
    newInputState.name.value = userData.name;
    newInputState.surname.value = userData.surename;
    newInputState.age.value = userData.age;
    setInputsState(newInputState)
    console.log(userData);
    
  },[])

  const validateForm = () => {
    const newInputState = {...inputsState};
    let validationState = true;

    if(!canBeName(inputsState.name.value))
    {
      newInputState.name.valid = false;
      newInputState.name.toutched = true;
      validationState = false;
    }
    if(!canBeName(inputsState.surname.value))
    {
      newInputState.surname.valid = false;
      newInputState.surname.toutched = true;
      validationState = false;
    }
    const numericAge = Number(inputsState.age.value);

   if(!IsInteger(numericAge) || numericAge > 150 || numericAge <= 0)
    {
      newInputState.age.valid= false;
      newInputState.age.toutched = true;
      validationState = false;
    }
    setInputsState(newInputState);
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
    const userDataToSave = {
      name: inputsState.name.value,
      surename: inputsState.surname.value,
      age: inputsState.age.value
    }
    dispatch(
      setUserData(userDataToSave)
    )
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
