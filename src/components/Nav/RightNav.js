import React from 'react'
import styled from 'styled-components'
import { menuData } from '../../data/MenuData'
import { Button } from "../Button"
import { Link } from "gatsby"


const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({open}) => open? 'translateX(0)':'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 50vw;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 5;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px){
    display: none;
  }
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

const RightNav = ({open}) => {
    return (
        <>
        <NavMenu open = {open}>
       {menuData.map((item, index) => (
         <NavLink to={item.link} key={index}>
           {item.title}
         </NavLink>
       ))}
     </NavMenu>
     <NavBtn>
        <Button primary="true" round="true" to="/trips">Book a Flight</Button>
     </NavBtn>
       </>
    )
}

export default RightNav