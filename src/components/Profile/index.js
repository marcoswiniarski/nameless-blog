import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

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
    <S.ProfileWrapper>
      <S.ProfileName>
        {title}
      </S.ProfileName>
      <S.ProfileDescription>
        {description}
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile