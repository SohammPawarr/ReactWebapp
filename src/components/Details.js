import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFilePdf, FaFileAlt, FaDownload, FaInfoCircle, FaChevronDown } from 'react-icons/fa';

// Animations
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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Enhanced Section Styles
const DetailsSection = styled.section`
  background: linear-gradient(to bottom, #fffbf7, #f9f4ef);
  padding: 5rem 0 3.75rem;
  position: relative;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0 2.5rem;
  }
`;

const DetailsContainer = styled.div`
  max-width: 75rem;
  width: 90%;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 700;
  color: #0F1EAF;
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: 0.0625rem;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 5rem;
    height: 0.25rem;
    background: linear-gradient(to right, #FD641F, #ff8a4c);
    border-radius: 0.125rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
    justify-content: space-around;
    width: 100%;
  }
`;

const Tab = styled.button`
  background: ${props => props.active ? 'linear-gradient(to right, #FD641F, #ff8a4c)' : '#fff'};
  color: ${props => props.active ? '#fff' : '#0F1EAF'};
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${props => props.active ? 
    '0 0.25rem 1rem rgba(253,100,31,0.25)' : 
    '0 0.125rem 0.5rem rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: ${props => props.active ? 
      '0 0.375rem 1.25rem rgba(253,100,31,0.3)' : 
      '0 0.25rem 0.75rem rgba(0,0,0,0.08)'};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    flex: 1;
    min-width: 5.5rem;
    text-align: center;
  }
`;

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? fadeIn : 'none'} 0.5s ease-out;
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-top: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DocumentCard = styled.div`
  background: #fff;
  border-radius: 1.125rem;
  box-shadow: 0 0.25rem 1.125rem rgba(15,30,175,0.07);
  padding: 2rem 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 13.75rem;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(0,0,0,0.03);
  transform: translateY(0);
  
  &:hover {
    box-shadow: 0 0.5rem 2rem rgba(253,100,31,0.15);
    transform: translateY(-0.25rem);
  }
  
  .download-btn {
    align-self: flex-end;
    margin-bottom: 1.125rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(to right, #FD641F, #ff8a4c);
    color: #fff;
    border: none;
    border-radius: 1.375rem;
    padding: 0.625rem 1.375rem;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    box-shadow: 0 0.125rem 0.5rem rgba(253,100,31,0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    &:hover {
      box-shadow: 0 0.25rem 0.75rem rgba(253,100,31,0.3);
      transform: translateY(-0.125rem);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(255,255,255,0.1), transparent);
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }
    
    &:hover:before {
      transform: translateX(100%);
    }
    
    @media (max-width: 480px) {
      padding: 0.5rem 1.25rem;
      font-size: 0.95rem;
    }
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0F1EAF;
    margin: 0 0 0.625rem 0;
    transition: color 0.3s ease;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
  
  p {
    color: #444;
    font-size: 1rem;
    margin-bottom: 0;
    flex: 1;
    display: flex;
    align-items: center;
    line-height: 1.5;
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
  
  &:nth-child(1) { animation: ${fadeIn} 0.5s ease-out 0.1s both; }
  &:nth-child(2) { animation: ${fadeIn} 0.5s ease-out 0.2s both; }
  &:nth-child(3) { animation: ${fadeIn} 0.5s ease-out 0.3s both; }
  &:nth-child(4) { animation: ${fadeIn} 0.5s ease-out 0.4s both; }
  &:nth-child(5) { animation: ${fadeIn} 0.5s ease-out 0.5s both; }
  &:nth-child(6) { animation: ${fadeIn} 0.5s ease-out 0.6s both; }
`;

const SpecificationsTable = styled.div`
  background: #fff;
  border-radius: 1.125rem;
  box-shadow: 0 0.25rem 1.125rem rgba(15,30,175,0.07);
  padding: 2rem 1.5rem;
  margin-top: 1rem;
  overflow-x: auto;
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid rgba(0,0,0,0.03);
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem;
    border-radius: 0.875rem;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    width: calc(100% + 1rem);
    -webkit-overflow-scrolling: touch;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    table-layout: fixed;
    
    @media (max-width: 768px) {
      table-layout: auto;
      min-width: 30rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      min-width: 25rem;
    }
  }
  
  th, td {
    padding: 0.75rem 0.625rem;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    
    @media (max-width: 480px) {
      padding: 0.625rem 0.5rem;
    }
  }
  
  th {
    color: #FD641F;
    font-weight: 600;
    background: none;
    border-right: 1px solid #f0f0f0;
    width: 13.75rem;
    
    @media (max-width: 768px) {
      width: 11rem;
      min-width: 9rem;
    }
    
    @media (max-width: 480px) {
      width: 8rem;
      min-width: 8rem;
    }
  }
  
  td {
    color: #333;
    background: none;
    line-height: 1.5;
    white-space: normal;
  }
  
  tr:last-child td, tr:last-child th {
    border-bottom: none;
  }
  
  tr {
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: rgba(253,100,31,0.03);
    }
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, rgba(15, 30, 175, 0.07), rgba(15, 30, 175, 0.05));
  padding: 1.25rem;
  border-radius: 0.875rem;
  margin-bottom: 1.875rem;
  border-left: 0.25rem solid #0F1EAF;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem 1rem;
  }
  
  svg {
    font-size: 2rem;
    color: #0F1EAF;
    margin-right: 1.25rem;
    
    @media (max-width: 480px) {
      margin-right: 0;
      margin-bottom: 0.75rem;
      font-size: 1.75rem;
    }
  }
  
  p {
    margin: 0;
    color: #222;
    font-size: 1.05rem;
    line-height: 1.6;
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const SectionEndStrip = styled.div`
  width: 100vw;
  height: 0.75rem;
  background: linear-gradient(to right, #0F1EAF, #3040d6);
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
  position: relative;
`;

// Styled components for mobile indicator
const MobileScrollIndicator = styled.div`
  display: none;
  text-align: center;
  margin-bottom: 0.75rem;
  color: #0F1EAF;
  font-size: 0.8rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: ${pulse} 1.5s infinite;
  
  svg {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    display: flex;
  }
`;

const Details = () => {
  const [activeTab, setActiveTab] = useState('documents');

  const documents = [
    {
      id: 1,
      title: 'Project Brochure',
      description: 'Comprehensive overview of the Rajgruha redevelopment project',
      icon: <FaFilePdf className="icon" />,
      type: 'PDF',
      url: '/documents/Project Brochure.pdf'
    },
    {
      id: 2,
      title: 'Floor Plans',
      description: 'Detailed floor plans for all unit types',
      icon: <FaFileAlt className="icon" />,
      type: 'PDF',
      url: '/documents/Floor Plans.pdf'
    },
    {
      id: 3,
      title: 'Legal Documents',
      description: 'Important legal information and approvals',
      icon: <FaFilePdf className="icon" />,
      type: 'PDF',
      url: '/documents/Legal Documents.pdf'
    },
    {
      id: 4,
      title: 'Amenities List',
      description: 'Complete list of amenities and facilities',
      icon: <FaFileAlt className="icon" />,
      type: 'PDF',
      url: '/documents/Amenities List.pdf'
    },
    {
      id: 5,
      title: 'Construction Timeline',
      description: 'Project phases and expected completion dates',
      icon: <FaFilePdf className="icon" />,
      type: 'PDF',
      url: '/documents/Construction Timeline.pdf'
    },
    {
      id: 6,
      title: 'Payment Schedule',
      description: 'Payment plans and financial information',
      icon: <FaFileAlt className="icon" />,
      type: 'PDF',
      url: '/documents/Payment Schedule.pdf'
    }
  ];

  return (
    <>
      <DetailsSection id="details">
        <DetailsContainer>
          <SectionTitle>PROJECT DETAILS</SectionTitle>
          
          <MobileScrollIndicator>
            <span>Swipe for more</span>
            <FaChevronDown style={{ transform: 'rotate(-90deg)' }} />
          </MobileScrollIndicator>

          <TabsContainer> 
            <Tab active={activeTab === 'documents'} onClick={() => setActiveTab('documents')}>
              Documents
            </Tab>
            <Tab active={activeTab === 'specifications'} onClick={() => setActiveTab('specifications')}>
              Specifications
            </Tab>
            <Tab active={activeTab === 'approvals'} onClick={() => setActiveTab('approvals')}>
              Approvals
            </Tab>
          </TabsContainer>

          <TabContent active={activeTab === 'documents'}>
            <DocumentsGrid>
              {documents.map(doc => (
                <DocumentCard key={doc.id}>
                  <a
                    href={doc.url}
                    download
                    className="download-btn"
                  >
                    <FaDownload /> Download {doc.type}
                  </a>
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                </DocumentCard>
              ))}
            </DocumentsGrid>
          </TabContent>

          <TabContent active={activeTab === 'specifications'}>
            <SpecificationsTable>
              <table>
                <tbody>
                  <tr>
                    <th>Property Type</th>
                    <td>Residential Apartments</td>
                  </tr>
                  <tr>
                    <th>Total Units</th>
                    <td>48 Premium Apartments</td>
                  </tr>
                  <tr>
                    <th>Unit Types</th>
                    <td>1BHK, 2BHK, 3BHK</td>
                  </tr>
                  <tr>
                    <th>Unit Sizes</th>
                    <td>650 sq.ft - 1500 sq.ft</td>
                  </tr>
                  <tr>
                    <th>Structure</th>
                    <td>RCC Framed Structure with Earthquake Resistant Design</td>
                  </tr>
                  <tr>
                    <th>Flooring</th>
                    <td>Vitrified Tiles in Living Areas, Wooden Flooring in Bedrooms</td>
                  </tr>
                  <tr>
                    <th>Kitchen</th>
                    <td>Modular Kitchen with Granite Countertop and Premium Fixtures</td>
                  </tr>
                  <tr>
                    <th>Bathrooms</th>
                    <td>Designer Tiles, Premium Sanitary Ware and CP Fittings</td>
                  </tr>
                  <tr>
                    <th>Doors & Windows</th>
                    <td>Engineered Wooden Doors, UPVC Windows with Safety Grills</td>
                  </tr>
                  <tr>
                    <th>Electrical</th>
                    <td>Concealed Copper Wiring with Circuit Breakers and Premium Switches</td>
                  </tr>
                </tbody>
              </table>
            </SpecificationsTable>
          </TabContent>

          <TabContent active={activeTab === 'approvals'}>
            <InfoBox>
              <FaInfoCircle />
              <p>
                All necessary approvals and permits for the Rajgruha redevelopment project have been obtained from the relevant authorities. Below you can find the details of these approvals.
              </p>
            </InfoBox>
            <SpecificationsTable>
              <table>
                <tbody>
                  <tr>
                    <th>Building Permit</th>
                    <td>Approved by Municipal Corporation (Permit No: BLD-2023-1458)</td>
                  </tr>
                  <tr>
                    <th>Environmental Clearance</th>
                    <td>Approved by Environmental Authority (Ref: EC-2023-0089)</td>
                  </tr>
                  <tr>
                    <th>Fire Safety Approval</th>
                    <td>Certified by Fire Department (Cert No: FS-2023-0456)</td>
                  </tr>
                  <tr>
                    <th>Structural Safety Certificate</th>
                    <td>Verified by Structural Engineer (Cert No: SSC-2023-0123)</td>
                  </tr>
                  <tr>
                    <th>Water & Sewage Connection</th>
                    <td>Approved by Water Supply Department (Ref: WS-2023-0789)</td>
                  </tr>
                  <tr>
                    <th>Electricity Connection</th>
                    <td>Approved by Electricity Board (Ref: EB-2023-0567)</td>
                  </tr>
                  <tr>
                    <th>RERA Registration</th>
                    <td>Registered under RERA (Reg No: RERA-2023-0345)</td>
                  </tr>
                </tbody>
              </table>
            </SpecificationsTable>
          </TabContent>
        </DetailsContainer>
      </DetailsSection>
      <SectionEndStrip />
    </>
  );
};

export default Details;