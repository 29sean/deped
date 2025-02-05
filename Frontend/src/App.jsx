import { useState } from 'react'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './pages/page1';
import Page2 from "./pages/page2";
import Page3 from './pages/page3';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Page1/> }/>
        <Route path='/page2' element={ <Page2/> }/>
        <Route path='/page3' element={ <Page3/> }/>
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
