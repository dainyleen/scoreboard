import React from 'react'

const Counter = () => {
  return (
    <div>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">25</span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  )
}

export default Counter
