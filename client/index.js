import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const players = [
  {
    id: 1,
    name: 'Dainy',
    score: 5
  },
  {
    id: 2,
    name: 'Faye',
    score: 10
  },
  {
    id: 3,
    name: 'Kapi',
    score: 15
  },
  {
    id: 4,
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
