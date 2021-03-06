import styled from 'styled-components'
import { Link } from '@reach/router'
import { Toolbar } from '@material-ui/core'


export const NiceLink = styled(Link)`
  color: #d52027;
`

export const Nav = styled(Toolbar)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
`
