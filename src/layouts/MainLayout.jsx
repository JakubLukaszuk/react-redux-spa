import React from 'react'

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <div>
        {props.children}
      </div>
    </React.Fragment>
  )
}
export default MainLayout;