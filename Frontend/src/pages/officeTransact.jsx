import Button from "react-bootstrap/Button";
import Header from "../components/header2";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import '../style/PageStyle.css'

function officeTransact() {
  const navigate = useNavigate();

  const [selectedOffice, setSelectedOption] = useState("Select your answer");

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  useEffect(() => {
    const savedOffice = JSON.parse(sessionStorage.getItem("userData"));
    if (savedOffice.office) {
      setSelectedOption(savedOffice.office);
    }
  }, []);

  const nextPage = () => {
    if (selectedOffice == "Select your answer") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before proceeding!",
      });
      return;
    }
    let office = JSON.parse(sessionStorage.getItem("userData"));
    // const office = sessionStorage.getItem("selectedOffice");
    if (office.office == selectedOffice) {
      // sessionStorage.setItem("selectedOffice", selectedOffice);
      navigate("/service-avail");
    } else {
      // Get existing user data (or use an empty object if null)
      let userData = JSON.parse(sessionStorage.getItem("userData")) || {};

      // Add new data
      userData.office = selectedOffice;

      // Store the updated data back in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(userData));
      // sessionStorage.setItem("selectedOffice", selectedOffice);
      sessionStorage.removeItem("serviceAvailed");
      sessionStorage.removeItem("selectedYesNo");
      sessionStorage.removeItem("selectedYesNo2");
      sessionStorage.removeItem("selectedYesNo3");
      sessionStorage.removeItem("2ndOffice");
      navigate("/service-avail");
    }
  };

  const backPage = () => {
    navigate("/");
  };

  const offices = [
    "SDS - Schools Division Superintendent",
    "ASDS - Assistant Schools Division Superintendent",
    "Admin (Cash, Personnel, Records, Supply, General Services, Procurement)",
    "CID - Curriculum Implementation Division (LRMS, Instructional Management, PSDS)",
    "Finance (Accounting, Budget)",
    "ICT",
    "Legal",
    "SGOD - School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)",
  ];

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
              <p className="title">Schools Division Office</p>
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p className="info">Office transacted with</p>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  variant="light"
                  className="text-truncate info"
                  style={{ width: "100%", textAlign: "left" }}
                  id="dropdown-basic"
                >
                  {selectedOffice}
                </Dropdown.Toggle>

                <Dropdown.Menu className="info">
                  {offices.length > 0 ? (
                    offices.map((office, index) => (
                      <Dropdown.Item key={index} eventKey={office}>
                        {office}
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
            <div className="d-flex" style={{ width: "150px" }}>
              <Button
                className="info"
                variant="light"
                onClick={backPage}
                style={{ backgroundColor: "#ededed", marginRight: "13px" }}
              >
                Back
              </Button>

              <Button className="info" style={{ backgroundColor: "green" }} onClick={nextPage}>
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
