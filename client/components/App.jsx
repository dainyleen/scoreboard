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

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    })
  }

  render () {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
        />
        {this.state.players.map(player =>
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }
}

export default App
