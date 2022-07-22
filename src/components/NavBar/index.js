import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavBarElements'

const NavBar = ({toggle}) => {
  return (
    <Nav>
        <NavLink to = "/" >Cou Pizzas</NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
             <Bars/>
        </NavIcon>
    </Nav>
  )
}

export default NavBar