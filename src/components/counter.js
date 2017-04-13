import React from 'react'

const Counter = ({ counter, onIncButtonClick }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => onIncButtonClick()} >+1</button>
    </div>
  )
}

export default Counter
