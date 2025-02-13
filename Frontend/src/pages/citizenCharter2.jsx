import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header2";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

function citizenCharter2() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const savedOption = sessionStorage.getItem("selectedYesNo2");
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    sessionStorage.setItem("selectedYesNo2", value);
  };
  //

  const nextPage = () => {
    const yesno = sessionStorage.getItem("selectedYesNo2");
    if (yesno == "yes" || yesno == "yesbut") {
      navigate("/citizen-charter3");
    } else {
      sessionStorage.removeItem('selectedYesNo3')
      navigate("/client-satisfaction");
    }
  };

  const backPage = () => {
    navigate("/citizen-charter");
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
              <p className="fs-4 p-3">Citizen's Charter</p>
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p>
                Did you see the SDO Citizen's Charter (online or posted in the
                office)?
              </p>
              <div>
                <Form.Check
                  type="radio"
                  label="Yes - it was easy to find"
                  name="yesno"
                  id="yes"
                  value="yes"
                  checked={selectedOption == "yes"}
                  onChange={handleSelect}
                />
                <Form.Check
                  type="radio"
                  label="Yes - but it was hard to find"
                  name="yesno"
                  id="yesbut"
                  value="yesbut"
                  checked={selectedOption == "yesbut"}
                  onChange={handleSelect}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="yesno"
                  id="no"
                  value="no"
                  checked={selectedOption == "no"}
                  onChange={handleSelect}
                />
              </div>
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

export default citizenCharter2;
