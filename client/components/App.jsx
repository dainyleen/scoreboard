import React from 'react'

import Header from './Header'
import Player from './Player'

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1}/>,
      <Player />
    </div>
  )
}

export default App
