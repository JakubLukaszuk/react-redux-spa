import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {Button, Col, Row, Container, Image, Spinner, Badge} from 'react-bootstrap';
import {getImageAsync} from '../../data/services/imageService';
import {getErrorMessage} from '../../utils/error';
import {
    selectOverEighteenYersOld,
    selectUserData
} from '../../slices/userSlice';
import './RestrictedImagePage.sass'

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
          setTimeout(()=>{
            setIsLoading(false);
          }, 1000);
        })
    }
    else
    {
      setIsWarining(true);
    }
  }

  return (
    <Container fluid>
            <section className="imagePageContentWrapper">
                <Row className="imagePageContentWrapper__userNameWrapper">
                    <Col>
                        <h2>{name} {surname}`s Page</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Button size="lg" onClick= {showImageHandle}>Accces</Button>
                </Row>
                <Row>
                    <Col>
                        <div className = "imagePageContentWrapper__imageWrapper">
                            {isLoading ?
                            <Spinner animation="border" size="lg" className="imagePageContentWrapper__spinner"/> :
                            imgSource && !isWarining ?
                                <Image className="imagePageContentWrapper__imageWrapper__secredImage" src={imgSource} rounded/> :
                                error ?
                                <Badge className="imagePageContentWrapper__warining" variant="danger">{getErrorMessage(error)}</Badge> :
                                null}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {isWarining ? <Badge className="imagePageContentWrapper__warining" variant="danger">You by at least 18 years old !</Badge> : null}
                    </Col>
                </Row>
            </section>
    </Container>
  )
}

export default RestrictedImagePage
