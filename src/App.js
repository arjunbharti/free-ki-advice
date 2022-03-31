import React from 'react'
import Advice from './components/Advice'
import './styles/main.css'

const App = () => {
  return (
    <div className='main-container'>
      <p className='heading text-center'>Free ki advice</p>
      <div className="advice-container">
        <Advice />
      </div>
    </div>
  )
}

export default App
