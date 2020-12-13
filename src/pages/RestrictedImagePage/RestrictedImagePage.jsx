import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {Button, Col, Row, Container, Image, Spinner, Badge, Jumbotron} from 'react-bootstrap';
import {getImageAsync} from '../../data/services/imageService';
import {getErrorMessage} from '../../utils/error';
import {
    selectOverEighteenYersOld,
    selectUserData
} from '../../slices/userSlice';

const RestrictedImagePage = () => {
  const isImageAllowed = useSelector(selectOverEighteenYersOld);
  const {name, surname} = useSelector(selectUserData);

  const [imgSource, setImgSource] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWarining, setIsWarining] = useState(false);

  const showImageHandle = () => {
    if(isImageAllowed)
    {
      setIsWarining(false)
      setIsLoading(true);
      const blobImage = getImageAsync().catch(error =>{
        setIsLoading(false);
        setError(error);
      })
        blobImage.then(blob => {
          if(!error && blob)
          {
            const objectURL = window.URL.createObjectURL(blob);
            setImgSource(objectURL);
          }
          setIsLoading(false);
        })
    }
    else
    {
      setIsWarining(true);
    }
  }

  return (
    <Container fluid>
            <section>
                <Row>
                    <Col>
                        <h2>{name} {surname}`s Page</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Button onClick= {showImageHandle}>Accces</Button>
                </Row>
                <Row >
                    <Col>
                        {isLoading ? <Spinner/> : imgSource && !isWarining ?
                            <Image src={imgSource} rounded/> : error ? getErrorMessage(error) : null}
                        {isWarining ? <Badge variant="danger">You by at least 18 years old !</Badge> : null}
                    </Col>
                </Row>
            </section>
    </Container>
  )
}

export default RestrictedImagePage
