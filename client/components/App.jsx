import React from 'react'

import Header from './Header'
import Player from './Player'

class App extends React.Component {
  state = {
    players: [
      {
        id: 1,
        name: 'Dainy'
      },
      {
        id: 2,
        name: 'Faye'
      },
      {
        id: 3,
        name: 'Kapi'
      },
      {
        id: 4,
        name: 'Mirris'
      }
    ]
  }

  render () {
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
}

export default App
