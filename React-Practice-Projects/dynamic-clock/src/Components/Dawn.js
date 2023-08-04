import React from 'react'
import './dawn.css'

const Dawn = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <>
    <div className='dawn'>
    <h1 className='text-center'>Hey! Its Dawn !</h1>
    <h5 className='text-center'>Golden Hour Of {currentHours}.{currentMins} AM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>“Dawn” is the time just before sunrise when the sky starts to lighten and the world wakes up. This is the time when the sun rises or comes up (sunrise).</p>
    </div>
    </>
  )
}

export default Dawn
