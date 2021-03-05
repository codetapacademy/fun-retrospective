import { Button, Fab } from '@material-ui/core'
import React, { Fragment } from 'react'
import * as RLS from './retrospective-list.style'

export const RetrospectiveList = ({ list, sendAction }) => (
  <RLS.Wrapper>
    {list.map(({ id, retrospectiveName }) => (
      <Fragment key={id}>
        <div>{retrospectiveName}</div>
        <RLS.ActionWrapper>
          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => sendAction('edit', id)}
          >
            ✐
          </Fab>

          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => sendAction('select', id)}
          >
            🚀
          </Fab>

          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => sendAction('delete', id)}
          >
            &times;
          </Fab>
        </RLS.ActionWrapper>
      </Fragment>
    ))}
  </RLS.Wrapper>
)
