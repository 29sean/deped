import React, { useState, useEffect } from "react";
import { Table, Form, Button, Card } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { API_BASE_URL } from "../config";
import axios from "axios";
import moment from "moment";

const DivisionPage = () => {
  const [data, setData] = useState([]);
  const [filterCustomer, setFilterCustomer] = useState("");
  const { division_id } = useParams();
  const location = useLocation();
  const { division_name } = location.state || {};

  useEffect(() => {
    if (division_id) {
      fetchFeedbackByDivision(division_id);
    }
  }, [division_id]);

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
        </div>

        <Button variant="success" onClick={() => window.print()}>
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
                "Office Transacted",
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
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="align-middle">
                  <td className="text-center">{item.age}</td>
                  <td className="text-center">{item.gender.toUpperCase()}</td>
                  <td className="text-center">{item.customerType}</td>
                  <td className="text-center">{item.sub_division_name}</td>
                  <td className="text-center">{item.service}</td>
                  <td className="text-center">{item.charter_one}</td>
                  <td className="text-center">{item.charter_two}</td>
                  <td className="text-center">{item.charter_three}</td>
                  <td className="text-center">{item.sqd1}</td>
                  <td className="text-center">{item.sqd2}</td>
                  <td className="text-center">{item.sqd3}</td>
                  <td className="text-center">{item.sqd4}</td>
                  <td className="text-center">{item.sqd5}</td>
                  <td className="text-center">{item.sqd6}</td>
                  <td className="text-center">{item.sqd7}</td>
                  <td className="text-center">{item.sqd8}</td>
                  <td className="text-center text-success fw-semibold">
                    {item.remarks}
                  </td>
                  <td className="text-center text-muted">
                    {moment(item.created_at).format("MMMM Do YYYY")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="18" className="text-center text-danger py-4">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default DivisionPage;
