import React from "react";
import CardDivision from "../components/CardDivision";
import { Row, Col } from "react-bootstrap";
import AdminNav from "../components/AdminNav";

const AdminDashboard = () => {
  return (
    <>
      <div className="admin-bg">
        <AdminNav />

        {/* First Row */}
        <div className="container">
          <Row className="g-4 mb-3">
            <Col xs={12} sm={6} md={4}>
              <CardDivision
                title="SDS"
                text="Schools Division Superintendent"
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <CardDivision
                title="ASDS"
                text="Assistant Schools Division Superintendent"
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <CardDivision
                title="ADMIN"
                text="(Cash, Personnel, Records, Supply, General Services, Procurement)"
              />
            </Col>
          </Row>
          {/* Second Row */}
          <Row className="g-4 mb-3">
            <Col xs={12} sm={6} md={4}>
              <CardDivision
                title="CID"
                text="Curriculum Implementation Division (LRMS, Instructional Management, PSDS)"
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <CardDivision title="FINANCE" text="Accounting & Budget" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <CardDivision title="ICT" />
            </Col>
          </Row>
          {/* Third Row */}
          <Row className="g-4">
            <Col xs={12} sm={6} md={4}>
              <CardDivision title="LEGAL" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <CardDivision
                title="SGOD"
                text="School Governance and Operations Division (M&E, SocMob, Planning & Research, HRD, Facilities, School Health)"
              />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <CardDivision title="+" text="ADD DEPARTMENT" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
