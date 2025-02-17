import React from "react";
import Table from "react-bootstrap/Table";
import AdminNav from "../components/AdminNav";

const SDS = () => {
  const data = [
    {
      name: "John Doe",
      age: 30,
      gender: "Male",
      customerType: "Business",
      divisionType: "Finance",
      serviceAvailed: "Cash",
      sqd1: "No",
      sqd2: "Yes",
      sqd3: "No",
      sqd4: "Yes",
      sqd5: "No",
      sqd6: "Yes",
      sqd7: "No",
      sqd8: "Yes",
      remarks: "Verified",
    },
    {
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      customerType: "Citizen",
      divisionType: "Education",
      serviceAvailed: "Cash",
      sqd1: "No",
      sqd2: "Yes",
      sqd3: "No",
      sqd4: "Yes",
      sqd5: "No",
      sqd6: "Yes",
      sqd7: "No",
      sqd8: "Yes",
      remarks: "Pending",
    },
  ];

  return (
    <div className="admin-bg">
      <AdminNav />
      <h2 className="text-center p-3">SDS (Schools Division Superintendent)</h2>
      <div className="table-responsive m-5">
        <Table striped bordered hover className="shadow-lg text-center">
          <thead className="bg-primary text-white">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Customer Type</th>
              <th>Division Type</th>
              <th>Service Availed</th>
              <th>SQD1</th>
              <th>SQD2</th>
              <th>SQD3</th>
              <th>SQD4</th>
              <th>SQD5</th>
              <th>SQD6</th>
              <th>SQD7</th>
              <th>SQD8</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="align-middle">
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.customerType}</td>
                <td>{item.divisionType}</td>
                <td>{item.serviceAvailed}</td>
                <td>{item.sqd1}</td>
                <td>{item.sqd2}</td>
                <td>{item.sqd3}</td>
                <td>{item.sqd4}</td>
                <td>{item.sqd5}</td>
                <td>{item.sqd6}</td>
                <td>{item.sqd7}</td>
                <td>{item.sqd8}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SDS;
