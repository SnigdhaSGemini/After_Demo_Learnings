import React from 'react'
import UseStateHook from './Components/UseStateHook'
import UseReducerHook from './Components/UseReducerHook'
import UseRefHook from './Components/UseRefHook'
import UseLayoutEffectHook from './Components/UseLayoutEffectHook'
import UseMemoHook from './Components/UseMemoHook'
import UseCallbackHook from './Components/UseCallbackHook'

const App = () => {
  return (
    <>
      <UseStateHook/>
      <UseReducerHook/>
      <UseRefHook/>
      <UseLayoutEffectHook/>
      <UseMemoHook/>
      <UseCallbackHook/>
    </>
  )
}

export default App
