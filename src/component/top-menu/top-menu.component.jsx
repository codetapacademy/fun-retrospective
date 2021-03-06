import { AppBar, Fab, IconButton, Toolbar } from '@material-ui/core'
import React from 'react'

import {
  Menu as MenuIcon,
  Add as AddIcon,
  AccountBox as AccountIcon,
  ExitToApp as ExitIcon
} from '@material-ui/icons';

import * as TMS from './top-menu.style'
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../store/user';

export const TopMenu = () => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)
  const dispatch = useDispatch()

  const logout = () => {
    // window.localStorage.setItem('user-fun-retrospective', '')
    dispatch(logOutAction())
    // auth.
  }

  return (
    <AppBar position="fixed" color="primary">
      <TMS.Nav>
        {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton> */}

        <Fab color="secondary" aria-label="add" style={{alignSelf: 'center'}}>
          <AddIcon />
        </Fab>

        {!isLoggedIn && <IconButton color="inherit">
          <AccountIcon />
        </IconButton>}

        {isLoggedIn && <IconButton edge="end" color="inherit" onClick={logout}>
          <ExitIcon />
        </IconButton>}
      </TMS.Nav>
    </AppBar>
    // <TMS.Nav>
    //   <span />
    //   <TMS.NiceLink to="/">Home</TMS.NiceLink>
    //   <TMS.NiceLink to="/info">Info</TMS.NiceLink>
    //   <TMS.NiceLink to="/dashboard">Dashboard</TMS.NiceLink>
    // </TMS.Nav>
  )
}
