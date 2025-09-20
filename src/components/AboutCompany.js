import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AboutSection = styled.section`
  background-color: #fffbf7;
  padding: 100px 0 80px;
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const AboutContent = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(15,30,175,0.08);
  margin-bottom: 50px;
  
  h2 {
    font-size: 2.2rem;
    color: #0F1EAF;
    margin-bottom: 20px;
    
    span {
      color: #FD641F;
    }
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 20px;
  }
`;

const StatsSection = styled.div`
  margin: 50px 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(15,30,175,0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(253,100,31,0.15);
  }
  
  .icon {
    font-size: 2.5rem;
    color: #FD641F;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0F1EAF;
    margin-bottom: 10px;
  }
  
  p {
    color: #555;
    font-size: 1rem;
  }
`;

const ChartSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
  margin: 50px 0;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(15,30,175,0.08);
  
  h3 {
    font-size: 1.4rem;
    color: #0F1EAF;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0F1EAF;
  margin-bottom: 50px;
  text-align: center;
  letter-spacing: 1.2px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #FD641F;
    margin: 15px auto 0;
    border-radius: 2px;
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
                <Bar dataKey="projects" fill="#0F1EAF" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </ChartSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutCompany;