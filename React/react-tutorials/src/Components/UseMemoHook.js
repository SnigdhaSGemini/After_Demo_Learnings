import React, { useMemo, useState } from 'react'
import {BiAddToQueue} from 'react-icons/bi'
import {BsToggleOff, BsToggleOn} from 'react-icons/bs'

const UseMemoHook = () => {
    const [counter , setCounter] = useState(0);
    const [toggle, setToggle] = useState(false);

    const CheckData = () =>{
        return getVal(counter);
    };

    const getVal = (data) =>{
        setTimeout(()=>{},10000);
        console.log(counter);
        return data;
    }

    // const CheckData = useMemo(() =>{
    //     return getVal(counter);
    // },[counter]);

  return (
    <>
    <h1 className='text-center'>UseMemo Hook</h1>

<div className='text-center m-2 fs-3' onClick={()=>setCounter(counter +1)}><BiAddToQueue/>
       <h4 className='text-info fs-3'> {
        <CheckData/>
        // CheckData
       }</h4></div>

<div className='border-bottom border-2 p-4 text-center' onClick={()=> setToggle(!toggle)}> 
{toggle ? <BsToggleOn className='text-success fs-3'/> : <BsToggleOff 
className='text-danger fs-3'/>}</div>
    </>
  )
}

export default UseMemoHook
