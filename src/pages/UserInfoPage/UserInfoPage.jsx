import React from 'react';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import {useSelector} from 'react-redux'
import {
  selectUserData,
} from '../../slices/userSlice';

import {
    Col,
    Row,
    Container,
    Jumbotron,
  } from 'react-bootstrap';

const UserInfoPage = () => {
  const {name, surname} = useSelector(selectUserData)

  return (
    <Container>
      <Jumbotron fluid>
        <section>
          <Row>
            <Col>
              <h2>User Data</h2>
            </Col>
          </Row>
        </section>
        <section>
          <Row className="justify-content-center">
            <UserInfoForm/>
          </Row>
        </section>
        <section>
          <Col md="auto">
            {name && surname ?
              <h3>{`Hello ${name} ${surname} !`}</h3> :
              null}
          </Col>
        </section>
      </Jumbotron>
    </Container>
  )
}

export default UserInfoPage
