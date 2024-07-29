import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    height: 50px;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background-color: black;
`

const NavbarLinks = styled.div`
    margin-left: auto;
    display: flex;
`
const NavbarItem = styled.div`
    color: white;
    font-size: 24px;
    margin: 0 16px 0 0;
    text-decoration: none;
    transition: 0.3s ease-out;

    &:hover {
        color: gray;
    }
`

interface ILink {
    children: React.ReactNode
}


const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <Link to="/"><NavbarItem>Home</NavbarItem></Link>
        <Link to="/posts"><NavbarItem>Posts</NavbarItem></Link>
      </NavbarLinks>
    </NavbarContainer>
  )
}

export default Navbar
