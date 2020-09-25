import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'

import GlobalStyle from '../../styles/global'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyle />
        <Sidebar/>
        <S.LayoutMain>
          {children}
        </S.LayoutMain>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
