import React from 'react'
import './counter.css'

const Counter = ({ counter, onIncButtonClick }) => {
  return (
    <div className='container'>
      <button className='plusone' onClick={() => onIncButtonClick()} >{counter}</button>
    </div>
  )
}

export default Counter
