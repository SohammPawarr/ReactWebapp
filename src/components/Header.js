import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
// Comment out the original import and use the correct path to the public folder
// import logo from '../assets/logo.png';
const logo = process.env.PUBLIC_URL + '/logo.png';

const HeaderContainer = styled.header`
  background-color: #0F1EAF;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  padding: 1.5rem 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0 0.3rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 2.2rem;
    margin-right: 0.5rem;
    max-width: 90vw;
    width: auto;
  }
  
  h1 {
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
    span {
      color: #FD641F;
    }
    @media (max-width: 430px) {
      font-size: 1.1rem;
    }
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 0.06rem;
    max-width: 100vw;
  }
  ul li {
    margin-left: 0;
  }
  ul li:first-child {
    margin-left: 0.5rem;
  }
  ul li a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    background-color: #FD641F;
    padding: 0.4em 1em;
    border-radius: 0.4em;
    display: inline-block;
    box-shadow: 0 0.18rem 0.28rem rgba(0, 0, 0, 0.09);
    cursor: pointer;
    transition: background 0.3s;
    white-space: nowrap;
    margin: 0 0.18rem;
  }
  @media (max-width: 600px) {
    ul li a {
      font-size: 0.8rem;
      padding: 0.18em 0.32em;
      border-radius: 0.32em;
    }
  }
`;

// MobileMenuButton removed

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logo} alt="SwamiPMC Logo" />
          <h1>Swami<span>PMC</span></h1>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="project" spy={true} smooth={true} offset={-60} duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link to="details" spy={true} smooth={true} offset={-60} duration={500}>
                Details
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-60} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-60} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;