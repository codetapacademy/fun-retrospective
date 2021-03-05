import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { auth, GitHubProvider } from '../../config/firebase'
import { setUserAction, logOutAction } from '../../store/user'

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
      .signInWithPopup(GitHubProvider)
      .then(({ user }) => {
        const { email, uid, displayName, photoURL } = user
        console.log('am reusit sa fur toate parolele din lume')
        console.log(email)
        console.log(uid)
        console.log(displayName)
        console.log(photoURL)

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

  const scoateMaCaTeCasapesc = () => {
    // window.localStorage.setItem('user-fun-retrospective', '')
    dispatch(logOutAction())
    // auth.
  }

  return (
    <div>
      <div>
        <TextField/>
      </div>

      <div>
        <TextField
          type="password"
        />
      </div>

      {!isLoggedIn && <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={vreauInauntru}
        >
          Login
        </Button>
      </div>}

      {isLoggedIn && <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={scoateMaCaTeCasapesc}
        >
          Logout
        </Button>
      </div>}
    </div>
  )
}
