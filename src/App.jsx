import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  return (
    <>
      <h1>React Core concept</h1>
    <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

    </>
  )
}

export default App
