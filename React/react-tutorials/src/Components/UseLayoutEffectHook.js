import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffectHook = () => {

    const [random,setRandom] = useState(0);

    useEffect(()=>{//Runs asynchronously
        console.log("This is 1st useEffect Hook");
    })

    useEffect(()=>{//Runs asynchronously
        console.log("This is 2nd useEffect Hook");
    })

    // useLayoutEffect(()=>{//Runs synchronously & before useEffect
    //     console.log("This is useLayoutEffect Hook");
    // })

    useEffect(()=>{//Runs asynchronously
        console.log("This is 3rd useEffect Hook");
    })


    // Example 
    useEffect(()=>{
        if(random === 0 ) {setRandom(Math.ceil(Math.random() * 100))}
    })

    // useLayoutEffect(()=>{
    //     if(random === 0 ) {setRandom(Math.ceil(Math.random() * 100))}
    // })

  return (
    <>
      <h1 className='text-center m-4'>UseLayoutEffect Hook</h1>
      <h6 className='text-center m-2'>Example - Random Number</h6>
      <h4 className='text-center d-flex flex-row justify-content-center m-2'>Get me a Random Number : <div className='text-danger'>{random}</div></h4>
     <div className='text-center  border-bottom border-2 p-4'>  <button
      className='btn-warning btn' onClick={()=> setRandom(0)} >Get Number</button></div>
    </>
  )
}

export default UseLayoutEffectHook 
