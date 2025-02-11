import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import Header from "../components/header2";
import { useNavigate, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";

function serviceAvail() {
  const navigate = useNavigate();

  const [selectedServiceAvailed, setSelectedOption] =
    useState("Select your answer");
  const [selectedOfficeTransacted, setSelectedOfficeTransacted] =
    useState("Select the office");
  const [selectedOfficeTransacted1, setSelectedOfficeTransacted1] =
    useState("Select the office");

  const [otw, setOtw] = useState();

  useEffect(() => {
    const savedService = sessionStorage.getItem("serviceAvailed");
    if (savedService) {
      setSelectedOption(savedService);
    }
    const office = sessionStorage.getItem("selectedOffice");
    if (office) {
      setSelectedOfficeTransacted1(office);
      if (office == "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)") {
        setOtw(otwAdmin)
      }
    }
    const office2 = sessionStorage.getItem("2ndOffice");
    if (office2) {
      setSelectedOfficeTransacted(office2);
    }
  }, []);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    sessionStorage.setItem("serviceAvailed", eventKey);
  };

  const handleSelectOfficeTransacted = (eventKey) => {
    setSelectedOfficeTransacted(eventKey);
    sessionStorage.setItem("2ndOffice", eventKey);
  };

  const backPage = () => {
    navigate("/office-transact");
  };
  const nextPage = () => {
    const service = sessionStorage.getItem("serviceAvailed");
    if (service == "Travel authority") {
      navigate("/citizen-charter");
    }
    else {
      navigate("/client-satisfaction");
    }
  };

  const services = {
    "SDS - Schools Division Superintendent": [
      "Travel authority",
      "Other requests/inquiries",
      "Feedback/Complaint",
    ],
    "ASDS - Assistant Schools Division Superintendent": [
      "BAC",
      "Other requests/inquiries",
      "Feedback/Complaint",
    ],
    "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)": [
      "Cash",
      "Personnel",
      "Records",
      "Property and Supply",
      "General Services",
      "Procurement",
    ],
    "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)":
      [
        "ALS Enrollment",
        "Access to LR Portal",
        "Borrowing of books/learning materials",
        "Contextualized Learning Resources",
        "Quality Assurance of Supplementary Learning Resources",
        "Instructional Supervision",
        "Technical assistance",
        "Other requests/inquiries",
      ],
    "Finance (Accounting, Budget)": [
      "Accounting Related",
      "ORS - Obligation Request and Status",
      "Posting/Updating of Disbursement",
      "Other request/inquiries",
    ],
    ICT: [
      "Create/delete/rename/reset user accounts",
      "Troubleshooting of ICT Equipmennt",
      "Uploading of publications",
      "Other requests/inquiries",
    ],
    Legal: [
      "Certificate of No Pending Case",
      "Correction of Entries in School Record",
      "Feedback/Complaints",
      "Legal advice/opinion",
      "Sites titling",
    ],
    "SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)":
      [
        "Private school-related",
        "Basic Education Data",
        "EBEIS/LIS/NAT Data and Performance Indicators",
        "Other requests/inquiries",
      ],
  };

  const otwCID = [
    "LRMS - Learning Resource Management Section",
    "Instructional Management Section",
    "PSDS - Public School District Supervisor",
  ];

  const otwAdmin = [
    "Cash",
    "Personnel",
    "Records",
    "Property and Supply",
    "General Services",
    "Procurement",
  ];

  const otwFinance = ["Accounting", "Budget"];

  const otwSGOD = [
    "Education Facilities",
    "HRD - Human Resource Development",
    "Planning & Research",
    "School Health",
    "SMME - School Management Monitoring and Evaluation Section",
    "SocMob - Social Mobilization and Networking",
  ];

  const availableServices = services[selectedOfficeTransacted1] || [];

  return (
    <div
      className="pt-5 pb-5"
      style={{ backgroundColor: "#edf3fc", height: "100vh" }}
    >
      <div
        className="w-75 m-auto border rounded shadow-lg"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <Header />
        <div className="m-auto mt-3 mb-3" style={{ width: "85%" }}>
          <div className="m-auto">
            <div className="rounded" style={{ backgroundColor: "#dfe7f5" }}>
              <p className="fs-4 p-3">{selectedOfficeTransacted1}</p>
            </div>
            {selectedOfficeTransacted1 ===
              "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)" || selectedOfficeTransacted1 ===
              "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)" && (
                <div
                  className="mb-3 rounded p-3"
                  style={{ backgroundColor: "#dfe7f5" }}
                >
                  <div>
                    <p>Office transacted with</p>
                    <Dropdown onSelect={handleSelectOfficeTransacted}>
                      <Dropdown.Toggle
                        variant="light"
                        className="text-truncate"
                        style={{ width: "100%", textAlign: "left" }}
                        id="dropdown-basic"
                      >
                        {selectedOfficeTransacted}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {otw.length > 0 ? (
                          otw.map((service, index) => (
                            <Dropdown.Item key={index} eventKey={service}>
                              {service}
                            </Dropdown.Item>
                          ))
                        ) : (
                          <Dropdown.Item disabled>
                            No services available
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              )}
            {selectedOfficeTransacted1 !==
              "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)" && (
                <div
                  className="mb-3 rounded p-3"
                  style={{ backgroundColor: "#dfe7f5" }}
                >
                  <p>Service availed</p>
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      variant="light"
                      className="text-truncate"
                      style={{ width: "100%", textAlign: "left" }}
                      id="dropdown-basic"
                    >
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
                        <Dropdown.Item disabled>
                          No services available
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}

            <div className="d-flex" style={{ width: "150px" }}>
              <Button
                variant="light"
                onClick={backPage}
                style={{ marginRight: "13px", backgroundColor: "#ededed" }}
              >
                Back
              </Button>

              <Button style={{ backgroundColor: "green" }} onClick={nextPage}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default serviceAvail;
