import React from 'react'
import { Button, TextField } from '@material-ui/core'

export const Login = () => {
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

      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Baga-ma si pe mine!
        </Button>
      </div>
    </div>
  )
}
