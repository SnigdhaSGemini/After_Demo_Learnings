import React, {useReducer} from 'react'
import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'

const UseReducerHook = () => {

    const reducer = (state , action) =>{//reducer function
        if(action.type === "INC"){
            state = state +1;
        }
        if(action.type === "DEC"){
            state = state -1;
        }
        return state;
    }

    const [count, dispatch] = useReducer(reducer,0);

  return (
    <>
       <h1 className='text-center pt-2'>UseReducer Hooks</h1>
      <h6 className='text-center'> Example - Counter</h6>
      <div className='text-center d-flex flex-row justify-content-center border-bottom
       border-2 p-4'>
        <div className='m-2 fs-3 text-primary' onClick={()=>{dispatch({type:"INC" })}}>
        <FiPlusSquare/></div> <p className='m-2 text-success fs-3'>{count}</p> 
        <div className='m-2 fs-3 text-primary' onClick={()=>{dispatch({type:"DEC" })}}>
            <FiMinusSquare/></div>
        </div>
    </>
  )
}

export default UseReducerHook
