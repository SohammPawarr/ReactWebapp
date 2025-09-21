import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTrophy, FaUsers, FaBuilding, FaHandshake, FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  background-color: #fffbf7;
  padding: 6rem 0 5rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 48rem) {
    padding: 4rem 0 3rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(253,100,31,0.07) 0%, rgba(253,100,31,0) 70%);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35%;
    height: 35%;
    background: radial-gradient(circle, rgba(15,30,175,0.07) 0%, rgba(15,30,175,0) 70%);
    z-index: 0;
  }
`;

const AboutContainer = styled.div`
  max-width: 72rem;
  width: 92%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const AboutContent = styled.div`
  background: #fff;
  border-radius: 1.25rem;
  padding: 2.5rem;
  box-shadow: 0 0.625rem 1.875rem rgba(15,30,175,0.08);
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 48rem) {
    padding: 1.75rem;
    border-radius: 1rem;
  }
  
  @media (max-width: 30rem) {
    padding: 1.5rem;
  }
  
  h2 {
    font-size: 2.2rem;
    color: #0F1EAF;
    margin-bottom: 1.25rem;
    
    @media (max-width: 48rem) {
      font-size: 1.8rem;
    }
    
    @media (max-width: 30rem) {
      font-size: 1.5rem;
      text-align: center;
    }
    
    span {
      color: #FD641F;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        width: 100%;
        height: 0.125rem;
        background: #FD641F;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
      }
      
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1.25rem;
    
    @media (max-width: 48rem) {
      font-size: 1rem;
      line-height: 1.6;
    }
    
    @media (max-width: 30rem) {
      font-size: 0.95rem;
      text-align: justify;
    }
  }
`;

const StatsSection = styled.div`
  margin: 3rem 0;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.875rem;
  margin-top: 1.875rem;
  
  @media (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 1.125rem;
  padding: 1.875rem;
  text-align: center;
  box-shadow: 0 0.625rem 1.875rem rgba(15,30,175,0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.03);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 48rem) {
    padding: 1.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background: linear-gradient(90deg, #0F1EAF, #FD641F);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 0.9375rem 2.1875rem rgba(253,100,31,0.15);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  .icon {
    font-size: 2.5rem;
    color: #FD641F;
    margin-bottom: 0.9375rem;
    
    @media (max-width: 48rem) {
      font-size: 2.25rem;
    }
  }
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0F1EAF;
    margin-bottom: 0.625rem;
    
    @media (max-width: 48rem) {
      font-size: 1.6rem;
    }
  }
  
  p {
    color: #555;
    font-size: 1rem;
    
    @media (max-width: 48rem) {
      font-size: 0.95rem;
    }
  }
`;

const ChartSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: 1.875rem;
  margin: 3rem 0;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;
  
  @media (max-width: 64rem) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
  
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 30rem) {
    gap: 1.25rem;
  }
`;

const ChartCard = styled.div`
  background: #fff;
  border-radius: 1.125rem;
  padding: 1.875rem;
  box-shadow: 0 0.625rem 1.875rem rgba(15,30,175,0.08);
  border: 1px solid rgba(0,0,0,0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 0.9375rem 2.1875rem rgba(15,30,175,0.12);
  }
  
  @media (max-width: 48rem) {
    padding: 1.5rem;
  }
  
  @media (max-width: 30rem) {
    padding: 1.25rem;
  }
  
  h3 {
    font-size: 1.4rem;
    color: #0F1EAF;
    margin-bottom: 1.25rem;
    text-align: center;
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
    width: 100%;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 4rem;
      height: 0.125rem;
      background: #FD641F;
    }
    
    @media (max-width: 48rem) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0F1EAF;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: 0.075em;
  position: relative;
  
  @media (max-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 30rem) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  
  &:after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.25rem;
    background: #FD641F;
    margin: 0.9375rem auto 0;
    border-radius: 0.125rem;
    
    @media (max-width: 48rem) {
      width: 4rem;
      height: 0.2rem;
    }
  }
`;

const AboutCompany = () => {
  // Data for pie chart - Project Types
  const projectTypeData = [
    { name: 'Residential', value: 60 },
    { name: 'Commercial', value: 25 },
    { name: 'Mixed-Use', value: 15 }
  ];
  
  // Data for bar chart - Projects Completed by Year
  const projectsByYearData = [
    { year: '2018', projects: 3 },
    { year: '2019', projects: 5 },
    { year: '2020', projects: 4 },
    { year: '2021', projects: 7 },
    { year: '2022', projects: 9 },
    { year: '2023', projects: 12 }
  ];
  
  // Colors for pie chart
  const COLORS = ['#0F1EAF', '#FD641F', '#2ecc71', '#3498db'];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>ABOUT US</SectionTitle>
        
        <AboutContent>
          <h2>Building <span>Excellence</span></h2>
          <p>
            SwamiPMC is a leading real estate development and project management company with a rich history of creating exceptional properties. 
            With a focus on quality, innovation, and customer satisfaction, we have established ourselves as a trusted name in the industry.
          </p>
          <p>
            Our team of experienced professionals brings expertise in architecture, engineering, construction, and project management to deliver 
            projects that exceed expectations. We believe in creating spaces that enhance lives and communities.
          </p>
          <p>
            The Rajgruha redevelopment project represents our commitment to preserving heritage while embracing modern design and amenities. 
            We are proud to be part of this significant project that honors the legacy of Dr. Babasaheb Ambedkar.
          </p>
        </AboutContent>
        
        <StatsSection>
          <StatsGrid>
            <StatCard>
              <FaBuilding className="icon" />
              <h3>40+</h3>
              <p>Projects Completed</p>
            </StatCard>
            <StatCard>
              <FaUsers className="icon" />
              <h3>500+</h3>
              <p>Happy Families</p>
            </StatCard>
            <StatCard>
              <FaTrophy className="icon" />
              <h3>15+</h3>
              <p>Awards Won</p>
            </StatCard>
            <StatCard>
              <FaCalendarAlt className="icon" />
              <h3>20+</h3>
              <p>Years Experience</p>
            </StatCard>
          </StatsGrid>
        </StatsSection>
        
        <ChartSection>
          <ChartCard>
            <h3>Project Portfolio Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {projectTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard>
            <h3>Projects Completed by Year</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={projectsByYearData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="projects" fill="#0F1EAF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </ChartSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutCompany;