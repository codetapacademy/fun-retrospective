import React from 'react'
import { Button, IconButton, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { auth, GitHubProvider } from '../../config/firebase'
import { setUserAction, logOutAction } from '../../store/user'
import {
  GitHub as GitHubIcon,
} from '@material-ui/icons';

// const user = window.localStorage.getItem('user-fun-retrospective') 
//   ? JSON.parse(window.localStorage.getItem('user-fun-retrospective'))
//   : ''
// console.log(';########################')
// console.log(user)

export const Login = () => {
  const [
    isLoggedIn,
    user,
  ] = useSelector(({ user }) => ([
    user.isLoggedIn,
    user.user
  ]))

  const dispatch = useDispatch()

  const vreauInauntru = () => {
    console.log('Pai eu am inteles')
    auth
      // .signInWithRedirect(GitHubProvider)
      .signInWithPopup(GitHubProvider)
      .then(({ user }) => {
        const { email, uid, displayName, photoURL } = user

        dispatch(setUserAction({
          email,
          uid,
          displayName,
          photoURL
        }))
        // window.localStorage.setItem('user-fun-retrospective', JSON.stringify({
        //   email,
        //   uid,
        //   displayName,
        //   photoURL
        // }))
      })
      .catch(() => {
        console.log('am reusit sa nu fur toate parolele din lume')
      })
  }

  return (
    <div>
      {!isLoggedIn && <div>
        <IconButton color="inherit" onClick={vreauInauntru}>
          <GitHubIcon />
        </IconButton>
      </div>}
    </div>
  )
}
