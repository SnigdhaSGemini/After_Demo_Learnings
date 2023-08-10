import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0);
    const [change ,setChange] = useState("");
    const countref = useRef(0);
    const inputRef = useRef();

    const addInputStyles = () =>{//To access DOM elements directly
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#000000";
        inputRef.current.style.color = "#ffffff";
    }

    console.log(countref);//returns an object with a property named 'current' that 
    // contains the initial value assigned to it (by default) , that can be edited


    useEffect(()=>{
        // setCount(count + 1);

        // UseRef Hook
        countref.current = countref.current + 1; //mutable variable
    });//calls multiple times == infinite loop
  return (
    <>
     <div className='border-bottom border-2 p-4'>
     <h1 className='text-center'>UseRef Hook</h1>
      <h6 className='text-center'>Example</h6>
     <div className='text-center'>
     <input placeholder='enter data to re render' className='m-2' type='text' ref={inputRef} onChange={(e)=>
        {setChange(e.target.value)}} onClick={addInputStyles}/>
      <h4 className='text-center d-flex flex-row justify-content-center m-2'>No. of times 
      Component is Re - rendered : <div className='text-success'> 
      {/* {count} */}
      {countref.current}
      </div></h4>
     </div>
     </div>
    </>
  )
}

export default UseRefHook
