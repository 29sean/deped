import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Header from "../components/header2";
import { useNavigate, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';

function page3() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedOffice } = location.state || {};

  const [selectedServiceAvailed, setSelectedOption] = useState("Select your answer");
  const [selectedOfficeTransacted, setSelectedOfficeTransacted] = useState("Select the office");

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const handleSelectOfficeTransacted = (eventKey) => {
    setSelectedOfficeTransacted(eventKey);
  }

  const backPage = () => {
    navigate('/page2');
  }

  const services = {
    "SDS - Schools Division Superintendent": [
      "Travel authority", "Other requests/inquiries", "Feedback/Complaint"
    ],
    "ASDS - Assistant Schools Division Superintendent": [
      "BAC", "Other requests/inquiries", "Feedback/Complaint"
    ],
    "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)": [
      "Cash", "Personnel", "Records", "Property and Supply", "General Services", "Procurement"
    ],
    "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)": [
      "ALS Enrollment", "Access to LR Portal", "Borrowing of books/learning materials", "Contextualized Learning Resources", "Quality Assurance of Supplementary Learning Resources", "Instructional Supervision", "Technical assistance", "Other requests/inquiries"
    ],
    "Finance (Accounting, Budget)": [
      "Accounting Related", "ORS - Obligation Request and Status", "Posting/Updating of Disbursement", "Other request/inquiries"
    ],
    "ICT": [
      "Create/delete/rename/reset user accounts", "Troubleshooting of ICT Equipmennt", "Uploading of publications", "Other requests/inquiries"
    ],
    "Legal": [
      "Certificate of No Pending Case", "Correction of Entries in School Record", "Feedback/Complaints", "Legal advice/opinion", "Sites titling"
    ],
    "SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)": [
      "Private school-related", "Basic Education Data", "EBEIS/LIS/NAT Data and Performance Indicators", "Other requests/inquiries"
    ]
  };

  const otwCID = [
    "LRMS - Learning Resource Management Section", "Instructional Management Section", "PSDS - Public School District Supervisor"
  ]

  const otwFinance = [
    "Accounting", "Budget"
  ]

  const otwSGOD = [
    "Education Facilities", "HRD - Human Resource Development", "Planning & Research", "School Health", "SMME - School Management Monitoring and Evaluation Section", "SocMob - Social Mobilization and Networking"
  ]

  const availableServices = services[selectedOffice] || [];

  return (
    <div className='pt-5 pb-5' style={{ backgroundColor: "#edf3fc", height: '100%' }}>
      <div className='w-75 m-auto border rounded shadow-lg' style={{ backgroundColor: '#f5f9ff' }}>
        <Header />
        <div className='m-auto mt-3 mb-3' style={{ width: "85%" }}>
          <div className='m-auto'>
            <div className='rounded' style={{ backgroundColor: "#dfe7f5" }}>
              <p className='fs-4 p-3'>{selectedOffice}</p>
            </div>
            {selectedOffice === "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)" && (
              <div className="mb-3 rounded p-3" style={{ backgroundColor: "#dfe7f5" }}>
                <div>
                  <p>Office transacted with</p>
                  <Dropdown onSelect={handleSelectOfficeTransacted}>
                    <Dropdown.Toggle variant="light" className='text-truncate' style={{ width: '100%', textAlign: 'left' }} id="dropdown-basic">
                      {selectedOfficeTransacted}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {otwCID.length > 0 ? (
                        otwCID.map((service, index) => (
                          <Dropdown.Item key={index} eventKey={service}>
                            {service}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>No services available</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            )}
            <div className="mb-3 rounded p-3" style={{ backgroundColor: "#dfe7f5" }}>
              <p>Service availed</p>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="light" className='text-truncate' style={{ width: '100%', textAlign: 'left' }} id="dropdown-basic">
                  {selectedServiceAvailed}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {availableServices.length > 0 ? (
                    availableServices.map((service, index) => (
                      <Dropdown.Item key={index} eventKey={service}>
                        {service}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item disabled>No services available</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='d-flex' style={{ width: '150px' }}>
              <Button variant="light" onClick={backPage} style={{ marginRight: '13px', backgroundColor: '#ededed' }}>
                Back
              </Button>

              <Button style={{ backgroundColor:"green" }}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page3;
