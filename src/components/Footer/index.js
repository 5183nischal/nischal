import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      <span> Canberra &nbsp;-&nbsp; Jerusalem</span>
    </Item>
    <Item position='right'>
      <a href='https://spinglass.xyz'>spinglass.xyz</a>
    </Item>
  </Wrapper>

export default Footer
