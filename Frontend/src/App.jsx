import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientInformation from "./pages/clientInformation";
import OfficeTransact from "./pages/officeTransact";
import ServiceAvail from "./pages/serviceAvail";
import CitizenCharter from "./pages/citizenCharter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientInformation />} />
        <Route path="/OfficeTransact" element={<OfficeTransact />} />
        <Route path="/serviceAvail" element={<ServiceAvail />} />
        <Route path="/citizenCharter" element={<CitizenCharter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
