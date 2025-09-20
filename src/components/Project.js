import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBuilding, FaLeaf, FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Add multiple images for the slideshow
const buildingImages = [
  process.env.PUBLIC_URL + '/building1.png',
  process.env.PUBLIC_URL + '/building2.png',
  process.env.PUBLIC_URL + '/building3.png'
];

const ProjectSection = styled.section`
  background-color: #fffbf7;
  padding: 120px 0 80px;

  @media (max-width: 768px) {
    padding: 80px 10px 60px;
  }
`;

const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SplitContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageSlideshowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;      // Increased from 280px
  max-width: 600px;      // Increased from 350px
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  padding: 32px;         // Increased padding for larger container
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 540px;      // Increased from 300px
  height: 400px;         // Increased from 220px
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15,30,175,0.08);
  margin-bottom: 18px;   // Increased margin for spacing
`;

const SlideNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const ArrowButton = styled.button`
  background: #FD641F;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e55a1c;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 10px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#0F1EAF' : '#FD641F'};
  opacity: ${props => props.active ? 1 : 0.5};
  transition: background 0.2s;
`;

const ProjectInfo = styled.div`
  flex: 2;
  color: #0F1EAF;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #FD641F;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 18px;
    color: #333;
    font-family: 'Poppins', Arial, sans-serif;
  }

  ul {
    margin-bottom: 18px;
    padding-left: 18px;
    color: #444;
    font-size: 1.05rem;
    line-height: 1.7;
    font-family: 'Poppins', Arial, sans-serif;
  }

  .cta-button {
    display: inline-block;
    background-color: #FD641F;
    color: white;
    margin-top: 30px;
    padding: 14px 30px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    box-shadow: 0 6px 15px rgba(253, 100, 31, 0.4);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #e55a1c;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(229, 90, 28, 0.5);
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p, ul {
      font-size: 1rem;
    }
    .cta-button {
      padding: 12px 25px;
      font-size: 1rem;
    }
  }
`;

const ProjectFeatures = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
  }
`;

const SectionEndStrip = styled.div`
  width: 100vw;
  height: 12px;
  background: #0F1EAF;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
`;

const Project = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide(slide === 0 ? buildingImages.length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === buildingImages.length - 1 ? 0 : slide + 1);
  };

  return (
    <>
      <ProjectSection id="project">
        <ProjectContainer>
          <SplitContainer>
            <ImageSlideshowContainer>
              <SlideImage src={buildingImages[slide]} alt={`Rajgruha Building ${slide + 1}`} />
              <SlideNav>
                <ArrowButton onClick={prevSlide}><FaChevronLeft /></ArrowButton>
                <ArrowButton onClick={nextSlide}><FaChevronRight /></ArrowButton>
                <Dots>
                  {buildingImages.map((_, idx) => (
                    <Dot key={idx} active={slide === idx} onClick={() => setSlide(idx)} />
                  ))}
                </Dots>
              </SlideNav>
            </ImageSlideshowContainer>

            <ProjectInfo>
              <h2>RAJGRUHA REDEVELOPMENT</h2>
              <h3>A LEGACY REIMAGINED</h3>
              <p>
                Discover the transformation of Rajgruha into a premium residential landmark, blending modern architecture with sustainable living. 
                Enjoy luxury, comfort, and convenience in Charkop.
              </p>
              <ul>
                <li>Prime location with excellent connectivity</li>
                <li>Spacious, sunlit apartments designed for elegance</li>
                <li>State-of-the-art amenities and green spaces</li>
                <li>Thoughtfully crafted to honor heritage and embrace the future</li>
              </ul>
              <a href="#details" className="cta-button">Explore Details</a>
            </ProjectInfo>
          </SplitContainer>
    </ProjectContainer>
  </ProjectSection>
      <SectionEndStrip />
    </>
  );
};

export default Project;