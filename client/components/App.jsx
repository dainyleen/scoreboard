import React from 'react'

import Header from './Header'
import Player from './Player'

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />
      {props.initialPlayers.map(player =>
        <Player
          key={player.id}
          name={player.name}
        />
      )}
    </div>
  )
}

export default App
