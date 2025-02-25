import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header2";
import { useNavigate } from "react-router-dom";
import Happy from "../assets/Images/happy.jpg";
import Swal from "sweetalert2";

const ClientSatisfaction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [remarks, setRemarks] = useState("");

  // Questions array to handle all SQDs
  const questions = [
    {
      id: "SQD1",
      text: "I spent an acceptable amount of time to complete my transaction",
      dimension: "Responsiveness"
    },
    {
      id: "SQD2",
      text: "The office accurately informed and followed the transaction's requirements and steps",
      dimension: "Reliability"
    },
    {
      id: "SQD3",
      text: "My transaction (including steps and payment) was simple and convenient",
      dimension: "Access and Facilities"
    },
    {
      id: "SQD4",
      text: "I easily found information about my transaction from the office or its website",
      dimension: "Communication"
    },
    {
      id: "SQD5",
      text: "I paid an acceptable amount of fees for my transaction",
      dimension: "Costs"
    },
    {
      id: "SQD6",
      text: "I am confident my transaction was secure",
      dimension: "Integrity"
    },
    {
      id: "SQD7",
      text: "The office's support was quick to respond",
      dimension: "Assurance"
    },
    {
      id: "SQD8",
      text: "I got what I needed from the government office",
      dimension: "Outcome"
    }
  ];

  useEffect(() => {
    // Load all saved values from sessionStorage
    questions.forEach(q => {
      const value = sessionStorage.getItem(q.id);
      if (value) {
        setFormData(prev => ({ ...prev, [q.id]: value }));
      }
    });
  }, []);

  const handleSelect = (questionId, value) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
    sessionStorage.setItem(questionId, value);
  };

  const backPage = () => {
    navigate("/office-transact");
  };

  const nextPage = () => {
    // Check if all questions are answered
    const unansweredQuestion = questions.find(q => !formData[q.id]);
    
    if (unansweredQuestion) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all questions before proceeding!"
      });
      
      const element = document.getElementById(unansweredQuestion.id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
      return;
    }

    navigate("/thank-you");
  };

  return (
    <div className="pt-lg-5 pb-lg-5" style={{ backgroundColor: "#edf3fc", height: "100%" }}>
      <div className="w-75 m-auto border rounded shadow-lg content" style={{ backgroundColor: "#f5f9ff" }}>
        <Header />
        <div className="container">
          <div className="m-auto">
            <div className="rounded mb-3" style={{ backgroundColor: "#dfe7f5" }}>
              <div className="p-3">
                <p className="title">Client Satisfaction</p>
                <div style={{ textAlign: "center" }}>
                  <img className="happy" src={Happy} alt="Happy face" />
                </div>
              </div>
            </div>
            
            <div className="mb-3 rounded" style={{ backgroundColor: "#dfe7f5" }}>
              <p className="info p-3">Service Quality Dimension (SQD)</p>
            </div>

            <div className="mb-3 rounded" style={{ backgroundColor: "#dfe7f5" }}>
              <table className="table-striped">
                <thead>
                  <tr className="d-none d-lg-table-row">
                    <th></th>
                    <th className="text-wrap rate">Strongly Agree (5)</th>
                    <th className="text-wrap rate">Agree (4)</th>
                    <th className="text-wrap rate">Neither Agree nor Disagree (3)</th>
                    <th className="text-wrap rate">Disagree (2)</th>
                    <th className="text-wrap rate">Strongly Disagree (1)</th>
                    <th className="text-wrap rate">Not applicable</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question) => (
                    <React.Fragment key={question.id}>
                      <tr className="SQDBQ">
                        <td colSpan="12" className="question-box">
                          {question.id} - {question.text} ({question.dimension})
                        </td>
                      </tr>
                      <tr className="SQDBQ">
                        <td colSpan="12">
                          <div className="button-container">
                            {[
                              { value: "1", label: "Strongly Agree (5)" },
                              { value: "2", label: "Agree (4)" },
                              { value: "3", label: "Neither Agree nor Disagree (3)" },
                              { value: "4", label: "Disagree (2)" },
                              { value: "5", label: "Strongly Disagree (1)" },
                              { value: "6", label: "Not applicable" }
                            ].map((option) => (
                              <button
                                key={option.value}
                                className={`custom-button ${formData[question.id] === option.value ? "selected" : ""}`}
                                onClick={() => handleSelect(question.id, option.value)}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="SQDC">
                        <td className="SQDQ">
                          {question.id} - {question.text} ({question.dimension})
                        </td>
                        {[1, 2, 3, 4, 5, 6].map((value) => (
                          <td key={value}>
                            <Form.Check
                              inline
                              label=""
                              name={question.id}
                              type="radio"
                              id={`${question.id}-${value}`}
                              className="custom-radio"
                              value={value}
                              onChange={(e) => handleSelect(question.id, e.target.value)}
                              checked={formData[question.id] === value.toString()}
                            />
                          </td>
                        ))}
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded mt-5" style={{ backgroundColor: "#dfe7f5" }}>
              <p className="fw-bold p-3">Remarks</p>
            </div>
            <div className="mb-5">
              <textarea
                className="form-control"
                style={{ height: "100px" }}
                placeholder="Enter your answer..."
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
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
    </div>
  );
};

export default ClientSatisfaction;