import React from 'react'
import './afternoon.css'

const Afternoon = () => {
    let currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
  return (
    <>
    <div className='afternoon'>
    <h1 className='text-center'>Hey! Good Afternoon !</h1>
    <h5 className='text-center'>It's {currentHours}.{currentMins} PM  </h5>
  <h6  className='text-center'>Fun Fact Of Time Zone : </h6>
  <p className='text-center' >The afternoon is a popular time for a light lunch or snack, as it falls after midday and before evening.</p>
<p className='text-center'>Productivity: Research has shown that people tend to be less productive in the afternoon, with a dip in cognitive ability and alertness around 2-3 pm.</p>
<p className='text-center'>In some cultures, work hours may extend into the afternoon, while in others, it may be considered the end of the workday.</p>
</div>
    </>
  )
}

export default Afternoon
