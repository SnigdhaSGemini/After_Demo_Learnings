import React from 'react'
import './dusk.css'

const Dusk = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <>
    <div className='dusk'>
    <h1 className='text-center'>Hey! Its Dusk / Twilight !</h1>
    <h5 className='text-center'>Golden Hour Of {currentHours}.{currentMins} PM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>“Dusk / Twilight” is the time when there is partial darkness between day and night. It means it is just before it becomes completely dark in the evening.</p>
    </div>
    </>
  )
}

export default Dusk
