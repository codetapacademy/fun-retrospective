import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { auth, GitHubProvider } from '../../config/firebase'

const user = window.localStorage.getItem('user-fun-retrospective') 
  ? JSON.parse(window.localStorage.getItem('user-fun-retrospective'))
  : ''
console.log(';########################')
console.log(user)

export const Login = () => {
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

        window.localStorage.setItem('user-fun-retrospective', JSON.stringify({
          email,
          uid,
          displayName,
          photoURL
        }))
      })
      .catch(() => {
        console.log('am reusit sa nu fur toate parolele din lume')
      })
  }

  const scoateMaCaTeCasapesc = () => {
    window.localStorage.setItem('user-fun-retrospective', '')
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

      {!user && <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={vreauInauntru}
        >
          Login
        </Button>
      </div>}

      {user && <div>
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
