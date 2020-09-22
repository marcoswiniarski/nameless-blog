import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description
      }
    }
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className='perfil'>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default Profile