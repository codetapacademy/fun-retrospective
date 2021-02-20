import React from 'react'
import { Router } from '@reach/router'
import { TopMenu } from '../top-menu/top-menu.component'
import { Info } from '../info'
import { Login } from '../login'
import { Dashboard } from '../dashboard'

export const Retrospective = () => {
  return (
    <div>
      <h1>Neata</h1>
      <TopMenu />
      <Router>
        <Info path="/info" />
        <Login path="/" />
        <Dashboard path="/da" />
      </Router>
    </div>
  )
}
