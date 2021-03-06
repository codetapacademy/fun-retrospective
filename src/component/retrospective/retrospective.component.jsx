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
  const isLoggedIn = useIsLoggedIn()
  console.log(isLoggedIn)
  // const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)
  return (
    <div>
      <TopMenu />
      <Router>
        <Login path="/login" />
        <Login path="/" />
        <NotFound default />

        <Protected path="/user">
          <Info path="/info" />
          <Dashboard path="/da" />
        </Protected>

        <Protected path="/room">
          <Room path="/room/:dasta" />
        </Protected>
      </Router>
    </div>
  )
}
