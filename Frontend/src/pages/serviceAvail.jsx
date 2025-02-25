import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import Header from "../components/header2";
import { useNavigate, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../style/PageStyle.css";

function serviceAvail() {
  const navigate = useNavigate();

  const [selectedServiceAvailed, setSelectedOption] =
    useState("Select your answer");
  const [selectedOfficeTransacted, setSelectedOfficeTransacted] =
    useState("Select the office");
  const [selectedOfficeTransacted1, setSelectedOfficeTransacted1] =
    useState("Select the office");

  const [otw, setOtw] = useState([]);
  const [selectService, setSelectService] = useState([]);

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("userData"));

    // const savedService = sessionStorage.getItem("serviceAvailed");
    if (data.service) {
      setSelectedOption(data.service);
    }
    // const office = sessionStorage.getItem("selectedOffice");
    if (data.office) {
      setSelectedOfficeTransacted1(data.office);
      updateServiceOptions(data.office);

      if (data.office === "SDS - Schools Division Superintendent") {
        setSelectService(SDS);
      }
      if (data.office === "ASDS - Assistant Schools Division Superintendent") {
        setSelectService(ASDS);
      }
      // if (
      //   data.office ===
      //   "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)"
      // ) {
      //   setSelectService(CID);
      // }
      // if (data.office === "Finance (Accounting, Budget)") {
      //   setSelectService(Finance);
      // }
      if (data.office === "ICT") {
        setSelectService(ICT);
      }
      if (data.office === "Legal") {
        setSelectService(Legal);
      }
      // if (data.office === "SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)") {
      //   setSelectService(SGOD);
      // }

      if (
        data.office ===
        "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)"
      ) {
        setOtw(otwAdmin);
      } else if (
        data.office ===
        "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)"
      ) {
        setOtw(otwCID);
      } else if (data.office === "Finance (Accounting, Budget)") {
        setOtw(otwFinance);
      } else if (
        data.office ===
        "SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)"
      ) {
        setOtw(otwSGOD);
      }
    }

    if (data.insideOffice) {
      setSelectedOfficeTransacted(data.insideOffice);
    }
  }, []);

  const updateServiceOptions = (office) => {
    if (office === "Cash") {
      setSelectService(cash);
    } else if (office === "Personnel") {
      setSelectService(personnel);
    } else if (office === "Records") {
      setSelectService(records);
    } else if (office === "Property and Supply") {
      setSelectService(propertyandSupply);
    } else if (office === "General Services") {
      setSelectService(generalServices);
    } else if (office === "Procurement") {
      setSelectService(procurement);
    } else if (
      office === "LRMS - Learning Resource Management Section" ||
      office === "Instructional Management Section" ||
      office === "PSDS - Public School District Supervisor"
    ) {
      setSelectService(CID);
    } else if (office === "Accounting" || office === "Budget") {
      setSelectService(Finance);
    }
    if (
      office === "Education Facilities" ||
      office === "HRD - Human Resource Development" ||
      office === "Planning & Research" ||
      office === "School Health" ||
      office === "SMME - School Management Monitoring and Evaluation Section" ||
      office === "SocMob - Social Mobilization and Networking"
    ) {
      setSelectService(SGOD);
    }
  };

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    let userData = JSON.parse(sessionStorage.getItem("userData")) || {};

    // Update the relevant field
    userData.service = eventKey;

    // Store updated data back in sessionStorage
    sessionStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleSelectOfficeTransacted = (eventKey) => {
    setSelectedOfficeTransacted(eventKey);
    let userData = JSON.parse(sessionStorage.getItem("userData")) || {};

    // Update the relevant field
    userData.insideOffice = eventKey;

    // Store updated data back in sessionStorage
    sessionStorage.setItem("userData", JSON.stringify(userData));
    // sessionStorage.setItem("2ndOffice", eventKey);
    updateServiceOptions(eventKey);
  };

  const backPage = () => {
    navigate("/office-transact");
  };
  const nextPage = () => {
    // const insideOffice = sessionStorage.getItem('2ndOffice')
    if (
      selectedServiceAvailed == "Select your answer" ||
      !selectedOfficeTransacted
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select before proceeding!",
      });
      return;
    }
    const service = JSON.parse(sessionStorage.getItem("userData"));
    if (
      service.service == "Other requests/inquiries" ||
      service.service == "Feedback/Complaint"
    ) {
      sessionStorage.removeItem("selectedYesNo");
      sessionStorage.removeItem("selectedYesNo2");
      sessionStorage.removeItem("selectedYesNo3");
      navigate("/client-satisfaction");
    } else {
      navigate("/citizen-charter");
    }
  };

  const cash = [
    "Cash Advance",
    "General Services-related",
    "Procurement-related",
    "Other requests/inquiries",
  ];

  const personnel = [
    "Application - Teaching Position",
    "Application - Non-teaching/Teaching-related",
    "Appointment (new, promotion, transfer, etc.)",
    "COE- Certificate of Employment",
    "Correction of Name/Change of Status",
    "ERF - Equivalent Record Form",
    "Leave Application",
    "Loan Approval and Verification",
    "Retirement",
    "Service Record",
    "Terminal Leave",
    "Other requests/inquiries",
  ];

  const records = [
    "CAV - Certification, Authentication, Verification",
    "Certified True Copy (CTC)/Photocopy of documents",
    "Non-certified True Copy Documents",
    "Receiving and Releasing of Documents",
    "Other requests/inquiries",
    "Feedback/Complaint",
  ];

  const propertyandSupply = [
    "Inspection/Acceptance/Distribution of LRs, Supplies, Equipment",
    "Property and Equipment Clearance",
    "Request/issuance of Supplies",
    "Other requests/inquiries",
  ];

  const generalServices = [
    "Cash Advance",
    "General Services-related",
    "Procurement-related",
    "Other requests/inquiries",
  ];

  const procurement = [
    "Cash Advance",
    "General Services-related",
    "Procurement-related",
    "Other requests/inquiries",
  ];

  const SDS = [
    "Travel authority",
    "Other requests/inquiries",
    "Feedback/Complaint",
  ];

  const ASDS = ["BAC", "Other requests/inquiries", "Feedback/Complaint"];

  const CID = [
    "ALS Enrollment",
    "Access to LR Portal",
    "Borrowing of books/learning materials",
    "Contextualized Learning Resources",
    "Quality Assurance of Supplementary Learning Resources",
    "Instructional Supervision",
    "Technical assistance",
    "Other requests/inquiries",
  ];

  const Finance = [
    "Accounting Related",
    "ORS - Obligation Request and Status",
    "Posting/Updating of Disbursement",
    "Other request/inquiries",
  ];

  const ICT = [
    "Create/delete/rename/reset user accounts",
    "Troubleshooting of ICT Equipment",
    "Uploading of publications",
    "Other requests/inquiries",
  ];

  const Legal = [
    "Certificate of No Pending Case",
    "Correction of Entries in School Record",
    "Feedback/Complaints",
    "Legal advice/opinion",
    "Sites titling",
  ];

  const SGOD = [
    "Private school-related",
    "Basic Education Data",
    "EBEIS/LIS/NAT Data and Performance Indicators",
    "Other requests/inquiries",
  ];

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

  // const availableServices = services[selectedOfficeTransacted1] || [];

  return (
    <div
      className="pt-lg-5 pb-lg-5"
      style={{ backgroundColor: "#edf3fc", height: "100vh" }}
    >
      <div
        className="w-75 m-auto border rounded shadow-lg content"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <Header />
        <div className="container">
          <div className="m-auto">
            <div className="rounded" style={{ backgroundColor: "#dfe7f5" }}>
              <p className="title">{selectedOfficeTransacted1}</p>
            </div>
            {(selectedOfficeTransacted1 ===
              "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)" ||
              selectedOfficeTransacted1 ===
                "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)" ||
              selectedOfficeTransacted1 ===
                "SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)" ||
              selectedOfficeTransacted1 === "Finance (Accounting, Budget)") && (
              <div
                className="mb-3 rounded p-3"
                style={{ backgroundColor: "#dfe7f5" }}
              >
                <div>
                  <p className="info">Office transacted with</p>
                  <Dropdown onSelect={handleSelectOfficeTransacted}>
                    <Dropdown.Toggle
                      variant="light"
                      className="text-truncate info"
                      style={{ width: "100%", textAlign: "left" }}
                      id="dropdown-basic"
                    >
                      {selectedOfficeTransacted}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="info">
                      {otw.length > 0 ? (
                        otw.map((office, index) => (
                          <Dropdown.Item key={index} eventKey={office}>
                            {office}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>
                          No office available
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            )}
            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p className="info">Service availed</p>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  variant="light"
                  className="text-truncate info"
                  style={{ width: "100%", textAlign: "left" }}
                  id="dropdown-basic"
                >
                  {selectedServiceAvailed}
                </Dropdown.Toggle>

                <Dropdown.Menu className="info">
                  {selectService.length > 0 ? (
                    selectService.map((service, index) => (
                      <Dropdown.Item key={index} eventKey={service}>
                        {service}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item disabled>No office available</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="d-flex" style={{ width: "150px" }}>
              <Button
                className="info"
                variant="light"
                onClick={backPage}
                style={{ marginRight: "13px", backgroundColor: "#ededed" }}
              >
                Back
              </Button>

              <Button
                className="info"
                style={{ backgroundColor: "green" }}
                onClick={nextPage}
              >
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
