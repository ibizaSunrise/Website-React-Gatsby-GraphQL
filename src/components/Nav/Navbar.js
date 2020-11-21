import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import { Link } from "gatsby"


const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
   

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`

const Navbar = () => {
    return (
        <Nav>
<NavLink to ="/">EXPLORIX</NavLink>
<Burger/>
        </Nav>
    )
}

export default Navbar