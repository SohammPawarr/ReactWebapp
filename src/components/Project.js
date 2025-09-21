import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const buildingImages = [
  process.env.PUBLIC_URL + '/building1.png',
  process.env.PUBLIC_URL + '/building2.png',
  process.env.PUBLIC_URL + '/building3.png'
];

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseEffect = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0.2rem 1rem rgba(0,0,0,0.1);
  }
  50% {
    transform: scale(1.01);
    box-shadow: 0 0.3rem 1.2rem rgba(0,0,0,0.15);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0.2rem 1rem rgba(0,0,0,0.1);
  }
`;

const ProjectSection = styled.section`
  background-color: #fffbf7;
  padding: 0 0 5rem 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 0 3rem 0;
  }
`;

const ProjectBanner = styled.div`
  background-color: #0F1EAF;
  color: white;
  padding: 5rem 0 9rem;
  text-align: center;
  margin-bottom: -9rem;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 4rem 0 7rem;
    margin-bottom: -4.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0 3rem;
    margin-bottom: -4rem;
  }
  
  /* Ensure banner extends full width */
  @media (max-width: 400px) {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    width: calc(100% + 1rem);
  }
`;

const ProjectContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  position: relative;
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    animation: ${fadeIn} 1s ease-out;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: white;
    margin-bottom: 0;
    opacity: 0.9;
    max-width: 45rem;
    margin: 0 auto;
    line-height: 1.5;
    animation: ${fadeIn} 1s ease-out 0.3s forwards;
    opacity: 0;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 430px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: nowrap; /* Prevent wrapping */
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
  animation: ${fadeIn} 0.8s ease-out;
  overflow-x: auto; /* Allow horizontal scrolling on very small screens if needed */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  position: relative;
  top: 0;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 700px) {
    gap: 1rem;
    padding: 0 0.5rem;
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
  @media (max-width: 480px) {
    gap: 0.35rem;
    padding: 0 0.25rem;
    margin-top: 1.5rem;
  }
`;

const SquareImageWrapper = styled.div`
  flex: 1;
  aspect-ratio: 1 / 1;
  max-width: 350px;
  min-width: 250px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 0.2rem 1rem rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.4rem 1.5rem rgba(0,0,0,0.15);
  }

  &:nth-child(1) {
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    animation-delay: 0.7s;
  }
  &:nth-child(3) {
    animation-delay: 0.9s;
  }

  @media (max-width: 900px) {
    min-width: 180px;
    max-width: 32%;
  }
  @media (max-width: 700px) {
    min-width: 150px;
    max-width: 32%;
  }
  @media (max-width: 600px) {
    min-width: 120px;
    max-width: 32%;
    margin-bottom: 0;
  }
  @media (max-width: 480px) {
    min-width: 100px;
    max-width: 32%;
  }
  @media (max-width: 400px) {
    min-width: 90px;
  }
`;

const SquareImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${SquareImageWrapper}:hover & {
    transform: scale(1.05);
  }
  
  @media (max-width: 600px) {
    object-position: center; /* Ensure image is centered within container */
  }
`;

const ProjectInfo = styled.div`
  max-width: 44rem;
  margin: 0 auto;
  color: #0F1EAF;
  text-align: center;
  padding: 0 1rem;
  animation: ${fadeIn} 1s ease-out 1.1s forwards;
  opacity: 0;

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 1.1rem;
    color: #333;
    font-family: 'Poppins', Arial, sans-serif;
  }

  ul {
    margin-bottom: 1.1rem;
    padding-left: 1.1rem;
    color: #444;
    font-size: 1.05rem;
    line-height: 1.7;
    font-family: 'Poppins', Arial, sans-serif;
    text-align: left;
    display: inline-block;
  }

  .cta-button {
    display: inline-block;
    background-color: #FD641F;
    color: white;
    margin-top: 2rem;
    padding: 0.9em 2em;
    border-radius: 2em;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    box-shadow: 0 0.4em 1em rgba(253, 100, 31, 0.4);
    transition: background-color 0.3s ease, transform 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }

    &:hover {
      background-color: #e55a1c;
      transform: translateY(-0.2em);
      box-shadow: 0 0.5em 1.2em rgba(229, 90, 28, 0.5);
      
      &:after {
        transform: translateX(100%);
      }
    }
  }

  @media (max-width: 900px) {
    p, ul {
      font-size: 1rem;
    }
    .cta-button {
      padding: 0.8em 1.5em;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    p, ul {
      font-size: 0.95rem;
    }
    padding: 0 0.5rem;
  }
`;

const SectionEndStrip = styled.div`
  width: 100vw;
  height: 0.7rem;
  background: #0F1EAF;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
`;

const Project = () => (
  <>
    <ProjectSection id="project">
      <ProjectBanner>
        <ProjectContainer>
          <ProjectHeader>
            <h2>RAJGRUHA REDEVELOPMENT</h2>
            <h3>Discover the transformation of Rajgruha into a premium residential landmark, blending modern architecture with sustainable living.</h3>
          </ProjectHeader>
        </ProjectContainer>
      </ProjectBanner>
      
      <ProjectContainer>
        <ImagesRow>
          {buildingImages.map((src, idx) => (
            <SquareImageWrapper key={idx}>
              <SquareImage src={src} alt={`Rajgruha Building ${idx + 1}`} />
            </SquareImageWrapper>
          ))}
        </ImagesRow>
        
        <ProjectInfo>
          <p>
            Enjoy luxury, comfort, and convenience in Charkop. Our premium residential project offers a perfect blend of modern amenities and thoughtful design.
          </p>
          <a href="#details" className="cta-button">Explore Details</a>
        </ProjectInfo>
      </ProjectContainer>
    </ProjectSection>
    <SectionEndStrip />
  </>
);

export default Project;