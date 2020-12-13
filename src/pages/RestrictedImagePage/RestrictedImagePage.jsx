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
    <Container>
        <Jumbotron fluid>
            <section>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h2>{name} {surname}`s Page</h2>
                    </Col>
                </Row>
            </section>
            <section>
                <Row className="justify-content-center">
                    <Button md="auto" onClick= {showImageHandle}>Accces</Button>
                </Row>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <div>
                            {isLoading ? <Spinner/> : imgSource && !isWarining ?
                                <Image src={imgSource} rounded/> : error ? getErrorMessage(error) : null}
                            {isWarining ? <Badge variant="danger">You by at least 18 years old !</Badge> : null }
                        </div>
                    </Col>
                </Row>
            </section>
        </Jumbotron>
    </Container>
  )
}

export default RestrictedImagePage
