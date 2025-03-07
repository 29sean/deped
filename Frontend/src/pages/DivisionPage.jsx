import React, { useState, useEffect } from "react";
import { Table, Form, Button, Card, Pagination } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { API_BASE_URL } from "../config";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import { handlePrint } from "../utils/printUtils";

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

  const [info, setInfo] = useState([]);
  const [subdivisions, setSubdivisions] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedSubdivision, setSelectedSubdivision] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (division_id) {
      fetchFeedbackByDivision(division_id);
    }
  }, [division_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/divisions/services-and-subdivisions/${division_id}`
        );
        setInfo(response.data);

        const uniqueSubdivisions = [
          ...new Set(response.data.map((item) => item.sub_division_name)),
        ].filter(Boolean); // Remove null/undefined values

        const uniqueServices = [
          ...new Set(response.data.map((item) => item.service_name)),
        ].filter(Boolean); // Remove null/undefined values

        setSubdivisions(uniqueSubdivisions);
        setServices(uniqueServices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [division_id]);

  const reportData = {
    divisionName: "_________________",
    periodStart: "_________________",
    periodEnd: "_________________",
    purposeTransaction: "Create/delete/rename/reset user accounts",
    maleCount: "23",
    femaleCount: "25",
    ageCountsLower: "23",
    ageCounts2034: "24",
    ageCounts3549: "7",
    ageCounts5064: "2",
    ageCountsHigher: "1",
    clientType: "Government",
    totalRespondents: "50",
    totalRatedScore: "200",
    avgRatedScore: "4.0",
    preparedByName: "Chem",
    notedByName: "Christopher",
  };

  const fetchFeedbackByDivision = async (division_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/divisions/get-feedback/${division_id}`
      );

      const mappedData = response.data.map((item) => ({
        ...item,
        customerType:
          item.customer_type === 1
            ? "Business"
            : item.customer_type === 2
            ? "Government"
            : item.customer_type === 3
            ? "Citizen"
            : "Unknown",
      }));

      setData(mappedData);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const filteredData = data.filter((item) => {
    // Filter by customer type
    const matchesCustomerType =
      filterCustomer === "" || item.customerType === filterCustomer;

    // Filter by sub-division
    const matchesSubdivision =
      selectedSubdivision === "" ||
      item.sub_division_name === selectedSubdivision;

    // Filter by service
    const matchesService =
      selectedService === "" || item.service === selectedService;

    // Filter by date range
    const itemDate = new Date(item.created_at);
    const matchesDate =
      (!startDate || itemDate >= startDate) &&
      (!endDate || itemDate <= endDate);

    // Combine all filters
    return (
      matchesCustomerType && matchesSubdivision && matchesService && matchesDate
    );
  });

  const filteredByDate = filteredData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredByDate.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredByDate.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleClearFilters = () => {
    setFilterCustomer("");
    setSelectedSubdivision("");
    setSelectedService("");
    setStartDate(null);
    setEndDate(null);
    setCurrentPage(1);
  };

  const hasSubDivision = filteredData.some((item) => item.sub_division_name);

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
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

          <Form.Select
            className="w-auto"
            value={selectedSubdivision}
            onChange={(e) => setSelectedSubdivision(e.target.value)}
          >
            <option value="">Office Transacted</option>
            {subdivisions.map((subdivision, index) => (
              <option key={index} value={subdivision}>
                {subdivision}
              </option>
            ))}
          </Form.Select>

          {/* Services Dropdown */}
          <Form.Select
            className="w-auto"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Service Availed</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
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

        <Button variant="success" onClick={() => handlePrint(reportData)}>
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
