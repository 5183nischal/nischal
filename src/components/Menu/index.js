import React from 'react'
import EmailMe from '../EmailMe'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://twitter.com/_nischalmainali" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItem>
      <NavItem>
        <a href="https://www.instagram.com/nisch.mainali/" rel="noopener noreferrer" target="_blank">Instagram</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/5183nischal" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to='/'>\\</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/about'>About</NavLink>
      </NavItem>
      {/*<NavItem>
        <NavLink to='/works'>Work</NavLink>
      </NavItem>*/}
      <NavItem highlight><EmailMe text="Contact"/>
    </NavItem>
    </Nav>
  </Wrapper>

export default Menu
