import React from 'react'
import * as TMS from './top-menu.style'

export const TopMenu = () => {
  return (
    <TMS.Nav>
      <span />
      <TMS.NiceLink to="/">Home</TMS.NiceLink>
      <TMS.NiceLink to="/user/info">Info</TMS.NiceLink>
      <TMS.NiceLink to="/user/da">Dashboard</TMS.NiceLink>
    </TMS.Nav>
  )
}
