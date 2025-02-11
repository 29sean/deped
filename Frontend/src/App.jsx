import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientInformation from "./pages/clientInformation";
import OfficeTransact from "./pages/officeTransact";
import ServiceAvail from "./pages/serviceAvail";
import CitizenCharter from "./pages/citizenCharter";
import CitizenCharter2 from "./pages/citizenCharter2";
import CitizenCharter3 from "./pages/citizenCharter3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ClientSatisfaction from "./pages/ClientSatisfaction";

// {
// "username": "admin1",
// "password": "sdocabuyao"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientInformation />} />
        <Route path="/client-satisfaction" element={<ClientSatisfaction />} />
        <Route path="/office-transact" element={<OfficeTransact />} />
        <Route path="/service-avail" element={<ServiceAvail />} />
        <Route path="/citizen-charter" element={<CitizenCharter />} />
        <Route path="/citizen-charter2" element={<CitizenCharter2 />} />
        <Route path="/citizen-charter3" element={<CitizenCharter3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/client-satisfaction" element={<ClientSatisfaction />} />
      </Routes>
    </Router>
  );
}

export default App;
