import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi</h1>
    <ul>
      <li>
        <Link activeStyle={{ color: 'red' }} to='/sobre'>Sobre</Link>
      </li>
    </ul>

  </Layout>
)

export default IndexPage
