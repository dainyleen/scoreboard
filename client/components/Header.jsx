import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
      </header>
    </div>
  )
}

export default Header
