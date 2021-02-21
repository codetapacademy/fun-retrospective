import { Button } from '@material-ui/core'
import React from 'react'
import * as RLS from './retrospective-list.style'

export const RetrospectiveList = ({ list, sterge }) => (
  <RLS.Wrapper>
    {list.map(({ id, retrospectiveName }) => (
      <>
        <div>{retrospectiveName}</div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => sterge(id)}
        >
          {id}
        </Button>
      </>
    ))}
  </RLS.Wrapper>
)
