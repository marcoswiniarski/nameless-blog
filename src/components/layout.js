import React from 'react'
import PropTypes from 'prop-types'

import Perfil from '../components/Perfil'

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Perfil />
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
