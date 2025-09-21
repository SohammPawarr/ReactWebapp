import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// Comment out the original import and use the placeholder URL
// import logo from '../assets/logo.png';
const logo = process.env.PUBLIC_URL + '/logo.png';

const FooterSection = styled.footer`
  background-color: #0F1EAF;
  color: #fff;
  padding: 70px 0 20px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: #ff7043;
    }
  }
`;

const CompanyInfo = styled(FooterColumn)`
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    img {
      height: 50px;
      margin-right: 10px;
    }
    
    h2 {
      font-size: 1.8rem;
      margin: 0;
      
      span {
        color: #ff7043;
      }
    }
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const ContactInfo = styled(FooterColumn)`
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    
    svg {
      font-size: 1.2rem;
      margin-right: 10px;
      color: #ff7043;
    }
  }
`;

const QuickLinks = styled(FooterColumn)`
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;
        display: inline-block;
        
        &:hover {
          color: #ff7043;
          transform: translateX(5px);
        }
        
        &:before {
          content: '→';
          margin-right: 8px;
          color: #ff7043;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-right: 10px;
    color: #fff;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #ff7043;
      transform: translateY(-5px);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SectionEndStrip = styled.div`
  width: 100vw;
  height: 12px;
  background: #0F1EAF;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
`;

const Footer = () => {
  return (
    <>
      <FooterSection id="contact">
        <FooterContainer>
          <FooterContent>
            <CompanyInfo>
              <div className="logo">
                <img src={logo} alt="SwamiPMC Logo" />
                <h2>Swami<span>PMC</span></h2>
              </div>
              <p>
                Rajgruha Address:Beside Jay Ganga Bus Stop, Sector 2, Kandivali West, Mumbai, Maharashtra 400067
              </p>
              <SocialLinks>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </SocialLinks>
            </CompanyInfo>
            
            <ContactInfo>
              <h3>Contact Us</h3>
              <div className="contact-item">
                <p>Address: Supreme Trade Centre, Shree Ekveera Vidyalaya, 1st Floor, above Charkop Post, Sector 1, Kandivali West, Mumbai, Maharashtra 400067</p>
              </div>
              <div className="contact-item">
                <FaPhone />
                <p>
                +91 76665 91410</p>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <p>swamipmcllp@gmail.com</p>
              </div>
            </ContactInfo>
            
            <QuickLinks>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#project">Project Overview</a></li>
                <li><a href="#details">Project Details</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </QuickLinks>
          </FooterContent>
          
          <FooterBottom>
            <p>&copy; {new Date().getFullYear()} SwamiPMC. All Rights Reserved. | Rajgruha Redevelopment Project</p>
          </FooterBottom>
        </FooterContainer>
      </FooterSection>
      <SectionEndStrip />
    </>
  );
};

export default Footer;