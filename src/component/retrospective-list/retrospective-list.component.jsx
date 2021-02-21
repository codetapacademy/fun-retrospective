import { Button, Fab } from '@material-ui/core'
import React from 'react'
import * as RLS from './retrospective-list.style'

export const RetrospectiveList = ({ list, sterge }) => (
  <RLS.Wrapper>
    {list.map(({ id, retrospectiveName }) => (
      <>
        <div>{retrospectiveName}</div>
        <Fab
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => sterge(id)}
        >
          &times;
        </Fab>
      </>
    ))}
  </RLS.Wrapper>
)
