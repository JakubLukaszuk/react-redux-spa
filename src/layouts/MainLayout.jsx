import React from 'react'
import NavBar from '../components/Navigation/NavBar/NavBar'

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <header>
        <NavBar/>
      </header>
      <main>
        {props.children}
      </main>
    </React.Fragment>
  )
}
export default MainLayout;