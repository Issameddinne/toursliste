import React from 'react'
import Navigation from './Navigation'
import image from "../Plane.png"
const Bar = () => {
  return (
    <div className='Menu'>
      <img className='logo' src={image} alt="LOGO" />
    <Navigation/>    
    </div>
  )
}

export default Bar
