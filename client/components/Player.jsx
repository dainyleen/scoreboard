import React from 'react'

import Counter from './Counter'

const Player = (props) => {
  console.log(props.removePlayer)
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>
      <Counter />
    </div>
  )
}

export default Player
