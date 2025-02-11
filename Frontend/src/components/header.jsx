import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderImage from "../assets/Images/depedHeader.png";
import Logo from "../assets/Images/logo.png";
import DepedLogo from "../assets/Images/depedlogo.png"

const header = () => {
    return (
        <div className='container-fluid p-0 rounded-top' style={{
            backgroundColor: '#bacbe6', 
            boxShadow: '4px -4px 10px -2px rgba(0,0,0,0.1), -4px 4px 10px -2px rgba(0,0,0,0.1), 0 -4px 10px -2px rgba(0,0,0,0.1)'
          }}>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-5 w-25'>
                        <img src={DepedLogo} alt="depedCabuyaoHeader" style={{width: "200px"}}/>
                    </div>
                    <div className='col-7' style={{ fontSize: '35px' }}>
                        <p className='mt-3'><b>SDO Cabuyao</b> Client Satisfaction Measurement (CSM) 2025</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>The Client Satisfaction (CSM) tracks the customer experience of government offices. Your feedback on your recently concluded transaction will help this office provide better service. Personal information shared will be kept confidential and you always have the option to not answer this form.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='m-0'>ANTI-RED TAPE AUTHORITY</p>
                        <p className='m-0'>PSA Approval No. ARTA-2242-3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header;