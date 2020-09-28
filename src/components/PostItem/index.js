import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to='/slug/'>
    <S.PostItemWrapper>
      <S.PostItemTag background='black'>
        Misc
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          30 de Julho de 2020 * 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>
          Diga não ao Medium: tenha sua própria plataforma
        </S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem