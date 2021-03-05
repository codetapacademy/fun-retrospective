import s from 'styled-components'

export const ActionWrapper = s.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Wrapper = s.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
`
