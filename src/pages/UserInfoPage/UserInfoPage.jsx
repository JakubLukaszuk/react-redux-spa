import React from 'react';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import {
    Col,
    Row,
    Container,
  } from 'react-bootstrap';
import './UserInfoPage.sass'


const UserInfoPage = () => {

  return (
    <Container>
        <section className="userInfoTitleContainer">
          <Row>
            <Col>
              <h2>User Data</h2>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <UserInfoForm/>
          </Row>
        </section>
    </Container>
  )
}

export default UserInfoPage
