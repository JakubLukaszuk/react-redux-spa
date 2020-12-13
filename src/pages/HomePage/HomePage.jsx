import React from 'react'
import './HomePage.sass'
import { Link } from 'react-router-dom'
import {
    Button
 } from 'react-bootstrap';
import {USER_INFO} from '../../constants/routes'

const HomePage = () => {
    return (
        <header className="homePageContainer">
            <div className="homePageContainer__rectangle"/>
            <section className="homePageContainer__content">
                <h1 className="display-4 homePageContainer__content__title">
                    Welcome to React-Redux Spa!
                </h1>
                <Button to = {USER_INFO} as={Link} variant="outline-dark" size="lg">Go to user information page</Button>
            </section>
        </header>
    )
}

export default HomePage
