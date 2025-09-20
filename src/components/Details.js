import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFilePdf, FaFileAlt, FaDownload, FaInfoCircle } from 'react-icons/fa';

// Minimalistic Section Styles
const DetailsSection = styled.section`
  background: #fffbf7;
  padding: 80px 0 60px;
`;

const DetailsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 700;
  color: #0F1EAF;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 1px;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
`;

const Tab = styled.button`
  background: ${props => props.active ? '#FD641F' : '#fff'};
  color: ${props => props.active ? '#fff' : '#0F1EAF'};
  border: none;
  border-radius: 24px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${props => props.active ? '0 4px 16px rgba(253,100,31,0.12)' : 'none'};
  transition: background 0.2s, color 0.2s;
`;

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
  margin-top: 16px;
`;

const DocumentCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(15,30,175,0.07);
  padding: 32px 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 220px; /* Ensures equal height for all cards */
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(253,100,31,0.13);
  }
  .download-btn {
    align-self: flex-end;
    margin-bottom: 18px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FD641F;
    color: #fff;
    border: none;
    border-radius: 22px;
    padding: 10px 22px;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(253,100,31,0.12);
    transition: background 0.2s;
    cursor: pointer;
    &:hover {
      background: #e55a1c;
    }
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0F1EAF;
    margin: 0 0 10px 0;
  }
  p {
    color: #444;
    font-size: 1rem;
    margin-bottom: 0;
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

const SpecificationsTable = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(15,30,175,0.07);
  padding: 32px 24px;
  margin-top: 16px;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
  }
  th, td {
    padding: 12px 10px;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }
  th {
    color: #FD641F;
    font-weight: 600;
    background: none;
    border-right: 1px solid #f0f0f0;
    width: 220px;
  }
  td {
    color: #333;
    background: none;
  }
  tr:last-child td, tr:last-child th {
    border-bottom: none;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  background: rgba(15, 30, 175, 0.07);
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 30px;
  svg {
    font-size: 2rem;
    color: #0F1EAF;
    margin-right: 20px;
  }
  p {
    margin: 0;
    color: #222;
    font-size: 1.05rem;
  }
`;

const SectionEndStrip = styled.div`
  width: 100vw;
  height: 12px;
  background: #0F1EAF;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
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