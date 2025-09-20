import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
// Comment out the original import and use the correct path to the public folder
// import logo from '../assets/logo.png';
const logo = process.env.PUBLIC_URL + '/logo.png';

const HeaderContainer = styled.header`
  background-color: #0F1EAF; /* Changed from #fff to #0F1EAF */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  transition: all 0.3s ease;
  padding: ${props => (props.scrolled ? '10px 0' : '20px 0')};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 50px;
    margin-right: 10px;
  }
  
  h1 {
    font-size: ${props => (props.scrolled ? '1.5rem' : '1.8rem')};
    color: #ffffff; /* Changed to white for better contrast on dark background */
    margin: 0;
    transition: all 0.3s ease;
    
    span {
      color: #FD641F; /* Changed from #ff7043 to #FD641F */
    }
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    
    li {
      margin-left: 30px;
      
      a {
        text-decoration: none;
        color: #ffffff;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        cursor: pointer;
        background-color: #FD641F;
        padding: 8px 15px;
        border-radius: 5px;
        display: inline-block;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;
        
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.5s ease;
        }
        
        &:hover {
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
          
          &:before {
            left: 100%;
          }
        }
        
        &.active {
          background-color: #e55a1c;
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #0F1EAF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    ul {
      flex-direction: column;
      padding: 20px;
      
      li {
        margin: 10px 0;
        
        a {
          display: block;
          text-align: center;
        }
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff; /* Added white color for better visibility */
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Logo scrolled={scrolled}>
          <img src={logo} alt="SwamiPMC Logo" />
          <h1>Swami<span>PMC</span></h1>
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <Nav isOpen={isOpen}>
          <ul>
            <li>
              <Link 
                to="project" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Project
              </Link>
            </li>
            <li>
              <Link 
                to="details" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Details
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={() => setIsOpen(false)}
              >
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