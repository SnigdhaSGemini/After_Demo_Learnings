import React from 'react'
import './noon.css'

const Noon = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <div className='noon'>
    <h1 className='text-center'>Hey! Its Noon / Mid Day !</h1>
    <h5 className='text-center'>Golden Hour Of {currentHours}.{currentMins} PM  </h5>
    <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
    <p className='text-center'>At midday, the sun is directly overhead, and shadows are at their shortest length.</p>
    <p className='text-center'>Midday is often the warmest time of day, as the sun’s rays are more intense and have had more time to heat up the Earth’s surface.</p>
    <p className='text-center'>Midday is a popular time for lunch breaks and meals, as it falls in the middle of the day and is convenient for most people’s schedules.</p>
    <p className='text-center'>In many parts of the world, work hours traditionally run from 9:00 am to 5:00 pm, with a lunch break in the middle at midday.</p>
    </div>
  )
}

export default Noon
