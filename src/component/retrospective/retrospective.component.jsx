import React from 'react'
import { Router } from '@reach/router'
import { TopMenu } from '../top-menu/top-menu.component'
import { Info } from '../info'
import { Login } from '../login'
import { Dashboard } from '../dashboard'
import { Room } from '../room'

export const Retrospective = () => {
  return (
    <div>
      <h1>Neata</h1>
      <TopMenu />
      <Router>
        <Info path="/info" />
        <Login path="/" />
        <Dashboard path="/da" />
        <Room path="/room/:dasta" />
      </Router>
    </div>
  )
}
