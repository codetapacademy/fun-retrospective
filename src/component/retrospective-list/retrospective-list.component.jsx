import { Button, Fab } from '@material-ui/core'
import React from 'react'
import * as RLS from './retrospective-list.style'

export const RetrospectiveList = ({ list, sendAction }) => (
  <RLS.Wrapper>
    {list.map(({ id, retrospectiveName }) => (
      <>
        <div>{retrospectiveName}</div>
        <RLS.ActionWrapper>
          <Fab
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => sendAction('select', id)}
          >
            👁
          </Fab>

          <Fab
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => sendAction('delete', id)}
          >
            &times;
          </Fab>
        </RLS.ActionWrapper>
      </>
    ))}
  </RLS.Wrapper>
)
