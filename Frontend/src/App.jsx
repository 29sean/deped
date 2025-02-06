import { useState } from 'react'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientInformation from './pages/clientInformation';
import OfficeTransact from "./pages/officeTransact";
import ServiceAvail from './pages/serviceAvail';
import CitizenCharter from './pages/citizenCharter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <ClientInformation/> }/>
        <Route path='/OfficeTransact' element={ <OfficeTransact/> }/>
        <Route path='/serviceAvail' element={ <ServiceAvail/> }/>
        <Route path='/citizenCharter' element={ <CitizenCharter/> }/>
      </Routes>
    </Router>
    // <>
    //   <div className='pt-5 pb-5' style={{ backgroundColor: "#03787c33" }}>
    //     <div className='w-75 m-auto border bg-white rounded'>
    //       <Header/>
    //       <Q1 />
    //     </div>
    //   </div>


    // </>
  )
}

export default App;
