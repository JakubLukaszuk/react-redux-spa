import React, {useState, useContext} from 'react';
//import Input from '../../components/UI/Input/Input';
import {checkValidity, canBeValue, canBeName, IsInteger} from '../../utils/validation';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm'
// import * as ROUTES from '../../constants/routes';
// import {UserContext} from '../../App.js';

import {
    Col,
    Row,
    Container,
  } from 'react-bootstrap';

const UserInfoPage = () => {

  return (
    <Container>
      <Row>
        <Col>User Data</Col>
      </Row>
      <main>
        <Row className="justify-content-center">
          <UserInfoForm/>
        </Row>
      </main>
    </Container>
  )
}

export default UserInfoPage
