import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const players = [
  {
    name: 'Dainy',
    score: 5
  },
  {
    name: 'Faye',
    score: 10
  },
  {
    name: 'Kapi',
    score: 15
  },
  {
    name: 'Mirris',
    score: 20
  }
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('app')
  )
})
