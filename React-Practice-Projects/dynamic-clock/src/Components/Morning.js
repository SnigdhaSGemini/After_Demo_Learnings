import React from 'react'
import './morning.css';

const Morning = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <>
    <div className='morning'>
    <h1 className='text-center'>Hey! Good Morning !</h1>
    <h5 className='text-center'>It's {currentHours}.{currentMins} AM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>Morning is often associated with early risers or “morning people” who wake up early and feel most productive during this time.</p>
    <p className='text-center'>Many people begin their workday in the morning and commute to their jobs or schools during this time.</p>
    </div>
    </>
  )
}

export default Morning
