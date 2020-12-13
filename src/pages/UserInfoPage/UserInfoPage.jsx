import React from 'react';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';


import {
    Col,
    Row,
    Container,
  } from 'react-bootstrap';

const UserInfoPage = () => {

  return (
    <Container>
      <section>
        <Row>
          <Col>User Data</Col>
       </Row>
      </section>
      <section>
        <Row className="justify-content-center">
          <UserInfoForm/>
        </Row>
      </section>
    </Container>
  )
}

export default UserInfoPage
