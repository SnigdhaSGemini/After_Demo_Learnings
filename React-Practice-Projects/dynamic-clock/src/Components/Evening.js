import React from 'react'
import './evening.css'

const Evening = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <>
    <div className='evening'>
    <h1 className='text-center'>Hey! Good Evening !</h1>
    <h5 className='text-center'>It's {currentHours}.{currentMins} PM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>“Evening” is the part of the day between the end of the afternoon and night. ( From sunset to bedtime and from approximately 18:00 hours to 00:00 hours).</p>
    </div>
    </>
  )
}

export default Evening
