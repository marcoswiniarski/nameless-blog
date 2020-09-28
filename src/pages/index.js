import React from 'react'
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
   <SEO title='Home'/>
   <PostItem />
  </Layout>
)

export default IndexPage
