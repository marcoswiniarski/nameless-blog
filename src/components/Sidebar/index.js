import React from 'react'
import Profile from '../Profile'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile/>
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
