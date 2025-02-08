import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header2";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

function officeTransact() {
  const navigate = useNavigate();

  const [selectedOffice, setSelectedOption] = useState("Select your answer");

  //
  useEffect(() => {
    const savedOffice = sessionStorage.getItem("selectedOffice");
    if (savedOffice) {
      setSelectedOption(savedOffice);
    }
  }, []);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    sessionStorage.setItem("selectedOffice", eventKey);
  };
  //

  const nextPage = () => {
    navigate("/service-avail", { state: { selectedOffice } });
  };

  const backPage = () => {
    navigate("/");
  };

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
              <p className="fs-4 p-3">Schools Division Office</p>
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p>Office transacted with</p>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  variant="light"
                  className="text-truncate"
                  style={{ width: "100%", textAlign: "left" }}
                  id="dropdown-basic"
                >
                  {selectedOffice}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="SDS - Schools Division Superintendent">
                    SDS - Schools Division Superintendent
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ASDS - Assistant Schools Division Superintendent">
                    ASDS - Assistant Schools Division Superintendent
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Admin (Cash, Personnel, Records, Supply, General Services, Procurement)">
                    Admin (Cash, Personnel, Records, Supply, General Services,
                    Procurement)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)">
                    CID - Curriculum Implementation Division (LRMS,
                    Instructional Management, PSDS)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Finance (Accounting, Budget)">
                    Finance (Accounting, Budget)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ICT">ICT</Dropdown.Item>
                  <Dropdown.Item eventKey="Legal">Legal</Dropdown.Item>
                  <Dropdown.Item eventKey="SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)">
                    SGOD - School Governance and Operations Division (M&E,
                    SocMob, Planning & Research, HRD, Facilities, School Health)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex" style={{ width: "150px" }}>
              <Button
                variant="light"
                onClick={backPage}
                style={{ backgroundColor: "#ededed", marginRight: "13px" }}
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

export default officeTransact;
