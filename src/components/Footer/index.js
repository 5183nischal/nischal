import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      nullius in verba
    </Item>
    <Item position='right'>
      <span> p.i. 5347183&nbsp;-&nbsp;</span>
      
      <a target="_blank" rel="noopener noreferrer" href='mms.io'>mms.io</a>
    </Item>
  </Wrapper>

export default Footer
