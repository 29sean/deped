import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Happy from "../assets/Images/happy.jpg";
import Table from "react-bootstrap/Table";

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
            <div
              className="rounded mb-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <div className="p-3">
                <p className="fs-4 fw-bold">Client Satisfaction</p>
                <div style={{ textAlign: "center" }}>
                  <img src={Happy} />
                </div>
              </div>
            </div>
            <div
              className="mb-3 rounded"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p className="fw-bold p-3">Service Quality Dimension (SQD)</p>
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <Form>
                {["radio"].map((type, index) => (
                  <div key={index} style={{ overflowX: "auto" }}>
                    <Table striped="columns">
                      <thead
                        style={{
                          fontSize: "13px",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <tr>
                          <th></th>
                          <th className="p-3">Strongly Agree (5)</th>
                          <th className="p-3">Agree (4)</th>
                          <th className="p-3">
                            Neither Agree nor Disagree (3)
                          </th>
                          <th className="p-3">Disagree (2)</th>
                          <th className="p-3">Strongly Disagree (1)</th>
                          <th className="p-3">Not applicable</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            SQD1 - I spent an acceptable amount of time to
                            complete my transaction (Responsiveness)
                          </td>
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
                          <td>
                            SQD2 - The office accurately informed and followed
                            the transaction's requirements and steps
                            (Reliability)
                          </td>
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
                          <td>
                            SQD3 - My transaction (including steps and payment)
                            was simple and convenient (Access and Facilities)
                          </td>
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
                        <tr>
                          <td>
                            SDQ4 - I easily found information about my
                            transaction from the office or its website
                            (Communication)
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group4"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group4"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group4"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group4"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group4"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group4"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            SQD5 - I paid an acceptable amount of fees for my
                            transaction (Costs)
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group5"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group5"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group5"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group5"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group5"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group5"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            SQD6 - I am confident my transaction was secure
                            (Integrity)
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group6"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group6"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group6"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group6"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group6"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group6"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            SQD7 - The office's support was quick to respond
                            (Assurance)
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group7"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group7"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group7"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group7"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group7"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group7"
                              type={type}
                              id={`inline-${type}-6`}
                              className="custom-radio"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            SQD8 - I got what I needed from the government
                            office (Outcome)
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group8"
                              type={type}
                              id={`inline-${type}-1`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group8"
                              type={type}
                              id={`inline-${type}-2`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group8"
                              type={type}
                              id={`inline-${type}-3`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group8"
                              type={type}
                              id={`inline-${type}-4`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group8"
                              type={type}
                              id={`inline-${type}-5`}
                              className="custom-radio"
                            />
                          </td>
                          <td>
                            <Form.Check
                              inline
                              label=""
                              name="group8"
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
            <div
              className="mb-3 rounded"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p className="fw-bold p-3">Remarks</p>
            </div>
            <div className="form-floating mb-5">
              <textarea
                className="form-control"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Enter your answer</label>
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
                Submit
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
