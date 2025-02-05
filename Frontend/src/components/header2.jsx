import React from 'react'
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
                        <img src={DepedLogo} alt="depedCabuyaoHeader" className='' style={{width: "200px"}}/>
                    </div>
                    <div className='col-9 d-flex align-items-center' style={{ fontSize: '20px' }}>
                        <p className='mt-3'><b>SDO Cabuyao</b> Client Satisfaction Measurement (CSM) 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header;