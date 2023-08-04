import React from 'react'
import Midnight from './Components/Midnight';
import Noon from './Components/Noon';
import Morning from './Components/Morning';
import Afternoon from './Components/Afternoon';
import Evening from './Components/Evening';
import Night from './Components/Night';
import Dawn from './Components/Dawn';
import Dusk from './Components/Dusk';

const App = () => {
  let currentDate = new Date();
  currentDate = currentDate.getHours();
  return (
    <>
    {currentDate === 0 && <Midnight/>}
    {currentDate === 12 && <Noon/>}
    {currentDate >= 7 && currentDate <=11 && <Morning/>}
    {currentDate >= 13 && currentDate <= 17 && <Afternoon/>}
    {currentDate >= 19 && currentDate <=23 && <Evening/>}
    {currentDate >= 1 && currentDate <=5 && <Night/>}
    {currentDate === 6 && <Dawn/>}
    {currentDate === 18 && <Dusk/>}


      {/* midnight - 0.0
      noon - 12.0
      morning - 7 - 11
      afternoon - 13 - 17
      evening - 19 - 23
      night - 1 -5
      dawn - 6
      dusk - 18
      */}
    </>
  )
}

export default App
