import { Redirect } from '@reach/router'
import React from 'react'

export const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The hamsters have gone mad! We'll try to fix it as soon as possible.</p>
      {/* <Redirect from="/" to="/login" noThrow /> */}
    </div>
  )
}
