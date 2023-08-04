import React from 'react'
import './midnight.css'

const Midnight = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <>
    <div className='midnight'>
    <h1 className='text-center'>Hey! Its Midnight !</h1>
    <h5 className='text-center'>Golden Hour Of {currentHours}.{currentMins} AM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>Midnight is the time of day when the clock strikes 12:00 am and marks the beginning of a new day. It is the middle of the night, and most people are typically asleep at this time.</p>
    </div>
    </>
  )
}

export default Midnight
