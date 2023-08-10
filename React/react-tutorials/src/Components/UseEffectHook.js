import React, { useEffect } from 'react'

const UseEffectHook = (props) => {

    const {title} = props;
    useEffect(()=>{document.title = title;});//No dependency passed i.e. would run on each
    //  and every re-render

    //  useEffect(()=>{document.title = title},[]);//an empty array i.e. runs only on 1st 
    // render 

    // useEffect(()=>{document.title = title},[title]); //props or state values i.e. 
    //  runs on 1st render + any time any dependency value changes


  return (
    <>
    </>
  )
}

export default UseEffectHook
