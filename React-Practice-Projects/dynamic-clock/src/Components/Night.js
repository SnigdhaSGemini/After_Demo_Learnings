import React from 'react'
import './night.css'

const Night = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <div className='night'>
    <h1 className='text-center'>Hey! Good Night !</h1>
    <h5 className='text-center'>It's {currentHours}.{currentMins} PM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>“Night” is the time when there is actual darkness after sunset and before sunrise.</p>
    </div>
  )
}

export default Night
