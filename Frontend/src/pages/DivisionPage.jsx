import React, { useState, useEffect } from "react";
import { Table, Form, Button, Card, Pagination } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { API_BASE_URL } from "../config";
import axios from "axios";
import moment from "moment";
// import logo from "../assets/Images/logo.png";
import DatePicker from "react-datepicker";
import knelogo from "../assets/Images/knelogo.png";
import image from "../assets/Images/image.png";

import "react-datepicker/dist/react-datepicker.css";

const DivisionPage = () => {
  const [data, setData] = useState([]);
  const [filterCustomer, setFilterCustomer] = useState("");
  const { division_id } = useParams();
  const location = useLocation();
  const { division_name } = location.state || {};

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    if (division_id) {
      fetchFeedbackByDivision(division_id);
    }
  }, [division_id]);

  const handlePrint = () => {
    // Get data from your component state/props or use default values
    const divisionName = "_________________";
    const periodStart = "_________________";
    const periodEnd = "_________________";
    const purposeTransaction = "Create/delete/rename/reset user accounts";
    const maleCount = "23";
    const femaleCount = "25";
    const ageCountsLower = "23";
    const ageCounts2034 = "24";
    const ageCounts3549 = "7";
    const ageCounts5064 = "2";
    const ageCountsHigher = "1";
    const clientType = "Government";
    const preparedByName = "Chem";
    const notedByName = "christopher";

    const printContent = `
      <html>
        <head>
          <title>Customer Feedback Report</title>
          <style>
  @page {
    size: portrait;
    margin: 15mm;
  }

  body { 
    font-family: Arial, sans-serif; 
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 15px;
  }

  th, td { 
    border: 1px solid black; 
    padding: 8px; 
    text-align: center; 
  }

  th { 
    font-weight: bold; 
    background-color: #f2f2f2;
  }

  .report-header {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
    z-index: 999;
    page-break-before: always;
  }

  .section-header, .demographics, .signature-section {
    margin-top: 20px;
  }

  .section-header {
    margin-top: 210px;
  }

  .signature-block {
    text-align: center;
    width: 200px;
  }

  .signature-line {
    border-top: 1px solid black;
    margin-top: 30px;
  }

  .page-content {
    margin-top: 120px; /* Add space for the header */
  }

  .table-wrapper {
    page-break-before: always;
  }
</style>

        </head>
        <body>
          <div class="page-content">
            <div class="report-header">
              <img src=${image} style="width: 300px">
              <br>
               <hr style="border: 1px solid black; width: 100%; margin: 10px 0;">
              
            </div>
            
            <div class="section-header">
              <div style="text-align: center;"><b>CUSTOMER FEEDBACK REPORT</b></div>
              <div><b>Functional Division/Section/Unit:</b> ${divisionName}</div>
              <div><b>PERIOD:</b> ${periodStart}</div>
            </div>
  
            <div style="margin-top: 10px;">
              <div><b>Purpose of Transaction:</b> ${purposeTransaction}</div>
            </div>
  
            <div class="demographics">
              <div>
                <div><b>Sex: </b>Male: ${maleCount} Female: ${femaleCount}</div>
              </div>
              <div><b>Age: </b>19-Lower: ${ageCountsLower} 20-34: ${ageCounts2034} 35-49: ${ageCounts3549} 50-64: ${ageCounts5064} 65-Higher: ${ageCountsHigher}</div>
            </div>
  
            <div style="margin-top: 15px;">
              <div><b>Client Type:</b> ${clientType}</div>
            </div>
  
            <table>
              <thead>
                <tr>
                  <th>Survey</th>
                  <th>5</th>
                  <th>4</th>
                  <th>3</th>
                  <th>2</th>
                  <th>1</th>
                  <th>Total Number of Respondents</th>
                  <th>Total Rated Score</th>
                  <th>Ave. Rated Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: left;">SQD1 - I spent an acceptable amount of time to complete my transaction (Responsiveness)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SQD2 - The office accurately informed and followed the transaction's requirements and steps (Reliability)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SQD3 - My transaction (including steps and payment) was simple and convenient (Access and Facilities)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SDQ4 - I easily found information about my transaction from the office or its website (Communication)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SQD5 - I paid an acceptable amount of fees for my transaction (Costs)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SQD6 - I am confident my transaction was secure (Integrity)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SQD7 - The office's support was quick to respond (Assurance)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="text-align: left;">SQD8 - I got what I needed from the government office (Outcome)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            
            <div style="margin-top: 20px;">
              <div>Graph</div>
              <div id="chart-container" style="height: 300px; width: 100%;">
                <!-- Chart will go here -->
              </div>
            </div>
  
            <div class="signature-section">
              <div class="signature-block">
                <div class="signature-line"></div>
                <div>Prepared by:</div>
                <div>${preparedByName}</div>
              </div>
              
              <div class="signature-block">
                <div class="signature-line"></div>
                <div>Noted:</div>
                <div>${notedByName}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(printContent);
    iframe.contentWindow.document.close();

    iframe.contentWindow.onload = () => {
      iframe.contentWindow.print();
      document.body.removeChild(iframe);
    };
  };

  const fetchFeedbackByDivision = async (division_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/divisions/get-feedback/${division_id}`
      );

      const mappedData = response.data.map((item) => ({
        ...item,
        customerType:
          item.type === 1
            ? "Business"
            : item.type === 2
            ? "Government"
            : item.type === 3
            ? "Citizen"
            : "Unknown",
      }));

      setData(mappedData);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const filteredData = data.filter(
    (item) => filterCustomer === "" || item.customerType === filterCustomer
  );

  const filteredByDate = filteredData.filter((item) => {
    const itemDate = new Date(item.created_at);
    return (
      (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredByDate.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredByDate.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleClearFilters = () => {
    setFilterCustomer("");
    setStartDate(null);
    setEndDate(null);
    setCurrentPage(1); // Reset to the first page when clearing filters
  };
  // Determine if any data has subdivision
  const hasSubDivision = filteredData.some((item) => item.sub_division_name);

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Number of page numbers to show at a time
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return (
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        />
        {startPage > 1 && (
          <>
            <Pagination.Item onClick={() => handlePageChange(1)}>
              1
            </Pagination.Item>
            {startPage > 2 && <Pagination.Ellipsis disabled />}
          </>
        )}
        {pageNumbers}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <Pagination.Ellipsis disabled />}
            <Pagination.Item onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </Pagination.Item>
          </>
        )}
        <Pagination.Next
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
        />
      </Pagination>
    );
  };

  return (
    <div className="admin-bg">
      <AdminNav />
      <h2 className="text-center p-3 text-uppercase">{division_name}</h2>

      <div className="d-flex justify-content-between align-items-center px-4 mb-4">
        <div className="d-flex gap-3">
          <Form.Select
            className="w-auto"
            onChange={(e) => setFilterCustomer(e.target.value)}
            value={filterCustomer}
          >
            <option value="">Customer Type</option>
            <option value="Business">Business</option>
            <option value="Citizen">Citizen</option>
            <option value="Government">Government</option>
          </Form.Select>

          <div className="d-flex align-items-center gap-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start Date"
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
            <span className="text-muted">to</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End Date"
              className="form-control"
              dateFormat="yyyy-MM-dd"
              minDate={startDate}
            />
          </div>

          <Button variant="outline-secondary" onClick={handleClearFilters}>
            Clear
          </Button>
        </div>

        <Button variant="success" onClick={handlePrint}>
          Print
        </Button>
      </div>

      <Card className="mx-4 bg-white shadow-sm rounded-3 overflow-hidden border">
        <div className="card-header" style={{ backgroundColor: "#294a70" }}>
          <h5 className="mb-0 text-white">Customer Data</h5>
        </div>
        <Table bordered hover responsive="md" className="mb-0">
          <thead className="bg-light">
            <tr>
              {[
                "Age",
                "Gender",
                "Customer Type",
                ...(hasSubDivision ? ["Office Transacted"] : []),
                "Service Availed",
                "Charter(1)",
                "Charter(2)",
                "Charter(3)",
                "SQD1",
                "SQD2",
                "SQD3",
                "SQD4",
                "SQD5",
                "SQD6",
                "SQD7",
                "SQD8",
                "Remarks",
                "Created At",
              ].map((header) => (
                <th key={header} className="text-center text-uppercase p-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="align-middle">
                  <td className="text-center">{item.age}</td>
                  <td className="text-center">{item.gender.toUpperCase()}</td>
                  <td className="text-center">{item.customerType}</td>
                  {hasSubDivision && (
                    <td className="text-center">{item.sub_division_name}</td>
                  )}
                  <td className="text-center">{item.service}</td>
                  <td className="text-center">
                    {item.charter_one ? item.charter_one.toUpperCase() : "-"}
                  </td>
                  <td className="text-center">
                    {item.charter_two ? item.charter_two.toUpperCase() : "-"}
                  </td>
                  <td className="text-center">
                    {item.charter_three
                      ? item.charter_three.toUpperCase()
                      : "-"}
                  </td>
                  <td className="text-center">{item.sqd1}</td>
                  <td className="text-center">{item.sqd2}</td>
                  <td className="text-center">{item.sqd3}</td>
                  <td className="text-center">{item.sqd4}</td>
                  <td className="text-center">{item.sqd5}</td>
                  <td className="text-center">{item.sqd6}</td>
                  <td className="text-center">{item.sqd7}</td>
                  <td className="text-center">{item.sqd8}</td>
                  <td className="text-center text-success fw-semibold">
                    {item.remarks ? item.remarks : "-"}
                  </td>
                  <td className="text-center text-muted">
                    {moment(item.created_at).format("MMMM Do YYYY")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={hasSubDivision ? 19 : 18}
                  className="text-center text-danger py-4"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center mt-3">
          {renderPagination()}
        </div>
      </Card>
    </div>
  );
};

export default DivisionPage;
