import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';

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
  const Auth = useContext(AuthContext);

  const logout = () => {
    Auth?.setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <NavbarContainer>
      {Auth?.isAuth && 
        <button onClick={logout}>Выйти</button>
      }
      <NavbarLinks>
        <Link to="/"><NavbarItem>Home</NavbarItem></Link>
        <Link to="/posts"><NavbarItem>Posts</NavbarItem></Link>
      </NavbarLinks>
    </NavbarContainer>
  )
}

export default Navbar
