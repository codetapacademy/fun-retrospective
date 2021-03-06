import React, { useEffect } from 'react'
import { Router, Redirect, redirectTo } from '@reach/router'
import { useSelector } from 'react-redux'

import { TopMenu } from '../top-menu/top-menu.component'
import { Info } from '../info'
import { Login } from '../login'
import { Dashboard } from '../dashboard'
import { Room } from '../room'
import { NotFound } from '../not-found'
import { Protected } from '../protected/protected.component'

const useIsLoggedIn = () => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)
  // useEffect(() => {
  //   !isLoggedIn && redirectTo('/login')
  // }, [])

  return isLoggedIn
}

export const Retrospective = () => {
  return (
    <div>
      <TopMenu />
      <Router>
        <Login path="/login" />
        <NotFound default />

        <Protected path="/">
          <Room path="/room/:dasta" />
          <Info path="info" />
          <Dashboard path="dashboard" />
        </Protected>
      </Router>
    </div>
  )
}
