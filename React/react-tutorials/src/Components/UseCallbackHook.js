import React, { useCallback, useState } from 'react'
import Todo from './Todo'
import {BiAddToQueue} from 'react-icons/bi'

const UseCallbackHook = () => {
    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState(0);

    const AddList = (() =>{//on each re render this function is called again & again thus,
        //  component is called again & again
        console.log("re render");
      return setTodo([...todo , "New Entry"]);
        
    });

    const increment = () =>{
        setCount(count +1);
    }

    // const AddList = useCallback(()=>{
    //    console.log("re render");
    //     return setTodo((val) => [...val , "New Entry"]);
    // },[todo])

  return (
    <>
      <h1 className='text-center'>UseCallback Hook</h1>
      <div className='text-center m-4'><Todo  todos={todo}  newEntry={AddList}/></div>
      <div className='text-center d-flex flex-row justify-content-center m-2'><h6
       className='fs-3 m-2 '>  Count : {count}</h6> 
        <div className='fs-3 m-2' onClick={increment}><BiAddToQueue/></div></div>
    </>
  )
}

export default UseCallbackHook

