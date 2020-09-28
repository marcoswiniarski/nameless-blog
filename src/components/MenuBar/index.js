import React from 'react'

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'

import * as S from './styled'

const MenuBar = () => (
  <>
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to='/' title='Voltar para a home'>
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to='/search/' title='Pesquisar'>
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title='Mudar o tema'>
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title='Mudar tipo de visualização'>
          <Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title='Ir para o topo'>
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  </>
)

export default MenuBar