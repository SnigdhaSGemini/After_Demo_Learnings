import React, { useState } from 'react'
import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'
import UseEffectHook from './UseEffectHook';

const UseStateHook = () => {
   const [count, setCount] = useState(0);
  return (
    <>
      <h1 className='text-center pt-2'>UseState & UseEffect Hooks</h1>
      <h6 className='text-center'> Example - Counter</h6>
      <div className='text-center d-flex flex-row justify-content-center '>
        <div className='m-2 fs-3 text-info' onClick={()=>{setCount(count+1)}}>
        <FiPlusSquare/></div> <p className='m-2 text-danger fs-3'>{count}</p> 
        <div className='m-2 fs-3 text-info' onClick={()=>{
            // Using Conditionals in Hooks
            count === 0 ? setCount(0) : setCount(count-1)
            }}><FiMinusSquare/></div>
        </div>
        <div className='border-bottom  border-2 p-4'><UseEffectHook title={count} /></div>
      
    </>
  )
}

export default UseStateHook

