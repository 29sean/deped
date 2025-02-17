import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Happy from "../assets/Images/happy.jpg";
import Swal from "sweetalert2";

function clientSatisfaction() {
  const navigate = useNavigate();

  const [SQD1, setSQD1] = useState();
  const [SQD2, setSQD2] = useState();
  const [SQD3, setSQD3] = useState();
  const [SQD4, setSQD4] = useState();
  const [SQD5, setSQD5] = useState();
  const [SQD6, setSQD6] = useState();
  const [SQD7, setSQD7] = useState();
  const [SQD8, setSQD8] = useState();

  useEffect(() => {
    const sqd1 = sessionStorage.getItem("SQD1")
    if (sqd1) {
      setSQD1(sqd1);
    }
    const sqd2 = sessionStorage.getItem("SQD2")
    if (sqd2) {
      setSQD2(sqd2);
    }
    const sqd3 = sessionStorage.getItem("SQD3")
    if (sqd3) {
      setSQD3(sqd3);
    }
    const sqd4 = sessionStorage.getItem("SQD4")
    if (sqd4) {
      setSQD4(sqd4);
    }
    const sqd5 = sessionStorage.getItem("SQD5")
    if (sqd5) {
      setSQD5(sqd5);
    }
    const sqd6 = sessionStorage.getItem("SQD6")
    if (sqd6) {
      setSQD6(sqd6);
    }
    const sqd7 = sessionStorage.getItem("SQD7")
    if (sqd7) {
      setSQD7(sqd7);
    }
    const sqd8 = sessionStorage.getItem("SQD8")
    if (sqd8) {
      setSQD8(sqd8);
    }
  }, []);

  const handleSelectSQD1 = (event) => {
    const value = event.target.value;
    setSQD1(value);
    sessionStorage.setItem("SQD1", value);
  }
  const handleSelectSQD2 = (event) => {
    const value = event.target.value;
    setSQD2(value);
    sessionStorage.setItem("SQD2", value);
  }
  const handleSelectSQD3 = (event) => {
    const value = event.target.value;
    setSQD3(value);
    sessionStorage.setItem("SQD3", value);
  }
  const handleSelectSQD4 = (event) => {
    const value = event.target.value;
    setSQD4(value);
    sessionStorage.setItem("SQD4", value);
  }
  const handleSelectSQD5 = (event) => {
    const value = event.target.value;
    setSQD5(value);
    sessionStorage.setItem("SQD5", value);
  }
  const handleSelectSQD6 = (event) => {
    const value = event.target.value;
    setSQD6(value);
    sessionStorage.setItem("SQD6", value);
  }
  const handleSelectSQD7 = (event) => {
    const value = event.target.value;
    setSQD7(value);
    sessionStorage.setItem("SQD7", value);
  }
  const handleSelectSQD8 = (event) => {
    const value = event.target.value;
    setSQD8(value);
    sessionStorage.setItem("SQD8", value);
  }

  const backPage = () => {
    navigate("/office-transact");
  };
  const nextPage = () => {
    // Array of all the questions and their corresponding IDs
    const questions = [SQD1, SQD2, SQD3, SQD4, SQD5, SQD6, SQD7, SQD8];
    const questionIds = ['SQD1', 'SQD2', 'SQD3', 'SQD4', 'SQD5', 'SQD6', 'SQD7', 'SQD8'];
    
    // Find the first unchecked question
    const firstUncheckedIndex = questions.findIndex(q => !q);

    if (firstUncheckedIndex !== -1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Please fill in the missing questions before proceeding!`,
        });

        // Get the corresponding question element by its ID
        const questionElement = document.getElementById(questionIds[firstUncheckedIndex]);

        // Check if the element is found
        if (questionElement) {
            // Scroll to the first unanswered question
            questionElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Center the element in the viewport
            });
        }

        return; // Stop further execution (don't navigate yet)
    }

    // All questions are answered, proceed to the next page
    const service = sessionStorage.getItem("serviceAvailed");
    if (service == "Travel authority") {
        navigate("/citizen-charter");
    } else {
        navigate("/thank-you");
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
              className="mb-3 rounded"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <Form>
                {["radio"].map((type, index) => (
                  <div key={index}>
                    <table className="table table-striped table-responsive">
                      <colgroup>
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th></th>
                          <th
                            className="text-wrap"
                            style={{ fontSize: "13.5px" }}
                          >
                            Strongly Agree (5)
                          </th>
                          <th
                            className="text-wrap"
                            style={{ fontSize: "13.5px" }}
                          >
                            Agree (4)
                          </th>
                          <th
                            className="text-wrap"
                            style={{ fontSize: "13.5px" }}
                          >
                            Neither Agree nor Disagree (3)
                          </th>
                          <th
                            className="text-wrap"
                            style={{ fontSize: "13.5px" }}
                          >
                            Disagree (2)
                          </th>
                          <th
                            className="text-wrap"
                            style={{ fontSize: "13.5px" }}
                          >
                            Strongly Disagree (1)
                          </th>
                          <th
                            className="text-wrap"
                            style={{ fontSize: "13.5px" }}
                          >
                            Not applicable
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD1}
                              checked={SQD1 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD1}
                              checked={SQD1 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD1}
                              checked={SQD1 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD1}
                              checked={SQD1 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD1}
                              checked={SQD1 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD1}
                              checked={SQD1 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD2}
                              checked={SQD2 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD2}
                              checked={SQD2 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD2}
                              checked={SQD2 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD2}
                              checked={SQD2 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD2}
                              checked={SQD2 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD2}
                              checked={SQD2 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD3}
                              checked={SQD3 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD3}
                              checked={SQD3 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD3}
                              checked={SQD3 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD3}
                              checked={SQD3 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD3}
                              checked={SQD3 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD3}
                              checked={SQD3 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD4}
                              checked={SQD4 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD4}
                              checked={SQD4 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD4}
                              checked={SQD4 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD4}
                              checked={SQD4 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD4}
                              checked={SQD4 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD4}
                              checked={SQD4 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD5}
                              checked={SQD5 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD5}
                              checked={SQD5 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD5}
                              checked={SQD5 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD5}
                              checked={SQD5 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD5}
                              checked={SQD5 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD5}
                              checked={SQD5 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD6}
                              checked={SQD6 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD6}
                              checked={SQD6 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD6}
                              checked={SQD6 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD6}
                              checked={SQD6 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD6}
                              checked={SQD6 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD6}
                              checked={SQD6 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD7}
                              checked={SQD7 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD7}
                              checked={SQD7 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD7}
                              checked={SQD7 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD7}
                              checked={SQD7 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD7}
                              checked={SQD7 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD7}
                              checked={SQD7 == "6"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "13.5px",
                              textAlign: "left",
                              paddingBlock: "20px",
                            }}
                          >
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
                              value={1}
                              onChange={handleSelectSQD8}
                              checked={SQD8 == "1"}
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
                              value={2}
                              onChange={handleSelectSQD8}
                              checked={SQD8 == "2"}
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
                              value={3}
                              onChange={handleSelectSQD8}
                              checked={SQD8 == "3"}
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
                              value={4}
                              onChange={handleSelectSQD8}
                              checked={SQD8 == "4"}
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
                              value={5}
                              onChange={handleSelectSQD8}
                              checked={SQD8 == "5"}
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
                              value={6}
                              onChange={handleSelectSQD8}
                              checked={SQD8 == "6"}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </Form>
            </div>
            <div
              className="rounded mt-5"
              style={{ backgroundColor: "#dfe7f5" }}
            >
              <p className="fw-bold p-3">Remarks</p>
            </div>
            <div className="mb-5">
              <textarea
                className="form-control"
                style={{ height: "100px" }}
                placeholder="Enter your answer..."
              ></textarea>
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

      <style>{`
        .custom-radio input[type="radio"] {
          transform: scale(1.3); /* Adjust size */
          border: 1px solid black; /* Border color */
          border-radius: 50%; /* Make it circular */
          outline: none;
          margin: 0;
        }

        .custom-radio input[type="radio"]:checked {
          background-color: white;
          border: 5px solid blue; /* Change border when selected */
        }
        
        .custom-radio {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        table {
          width: 100%;
          text-align: center;
        }

        th, td {
          vertical-align: middle;
          text-align: center;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

export default clientSatisfaction;
