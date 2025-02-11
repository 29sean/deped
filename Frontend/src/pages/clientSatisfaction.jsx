import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Header from "../components/header2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Happy from "../assets/Images/happy.jpg";
import Table from 'react-bootstrap/Table';

function clientSatisfaction() {
  const navigate = useNavigate();

  const [selectedServiceAvailed, setSelectedOption] =
    useState("Select your answer");
  const [selectedOfficeTransacted, setSelectedOfficeTransacted] =
    useState("Select the office");
  const [selectedOfficeTransacted1, setSelectedOfficeTransacted1] =
    useState("Select the office");

  useEffect(() => {
    const savedService = sessionStorage.getItem("serviceAvailed");
    if (savedService) {
      setSelectedOption(savedService);
    }
    const office = sessionStorage.getItem("selectedOffice");
    if (office) {
      setSelectedOfficeTransacted1(office);
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
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="pt-5 pb-5"
      style={{ backgroundColor: "#edf3fc", height: "100%" }}
    >
      <div
        className="w-75 m-auto border rounded shadow-lg"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <Header />
        <div className="m-auto mt-3 mb-3" style={{ width: "85%" }}>
          <div className="m-auto">
            <div className="rounded mb-3" style={{ backgroundColor: "#dfe7f5" }}>
              <div className="p-3" >
                <p className="fs-4"> Client Satisfaction</p>
                <div style={{ textAlign: "center" }}>
                  <img src={Happy} />
                </div>
                
              </div>
            </div>
            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p>Service Quality Dimension (SQD)</p>
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Table striped="columns">
                      <thead style={{ fontSize: "13px", textAlign: "center" }}>
                        <tr>
                          <th></th>
                          <th>Strongly Agree (5)</th>
                          <th>Agree (4)</th>
                          <th>Neither Agree nor Disagree (3)</th>
                          <th>Disagree (2)</th>
                          <th>Strongly Disagree (1)</th>
                          <th>Not applicable</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SQD1 - I spent an acceptable amount of time to complete my transaction (Responsiveness)</td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group1"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group1"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group1"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group1"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>SQD2 - The office accurately informed and followed the transaction's requirements and steps (Reliability)</td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group2"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group2"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group2"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group2"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group2"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group2"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>SQD2 - The office accurately informed and followed the transaction's requirements and steps (Reliability)</td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group3"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group3"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group3"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group3"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group3"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group3"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                ))}
              </Form>
            </div>

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

      {/* Inline CSS in JS */}
      <style>{`
        .custom-radio input[type="radio"] {
          transform: scale(1.5); /* Adjust the scale as needed */
          margin: 0 10px;
        }

        .custom-radio {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 25px;
        }
      `}</style>
    </div>
  );
}

export default clientSatisfaction;
