import React from 'react'
import './counter.css'

const Counter = ({ counter, onIncButtonClick }) => {
  return (
    <div className='container'>
      {/*<h1 className='number'>{counter}</h1>*/}
      {/*<h4 className='hidden'>lnja老婆计数器</h4>*/}
      <button className='plusone' onClick={() => onIncButtonClick()} >{counter}</button>
    </div>
  )
}

export default Counter
