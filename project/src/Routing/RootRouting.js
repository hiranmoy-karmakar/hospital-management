import React from 'react'
import { Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import About from '../Components/About/About'

import Home from '../Components/Home/Home'
import Footer from '../Components/Layout/Footer/Footer'
import Header from '../Components/Layout/Header/Header'
import Department from '../Doctors/Department/Department'
import DoctorList from '../Doctors/DocList/DoctorList'


export default function RootRouting() {
  return (
    <Router>
      <Header/>
      
        <Routes>
            <Route path="" element={<Home/>}/>
             <Route path="about_page" element={<About/>}/>
             <Route path='department' element={<Department/>}/>
             <Route path="details_doctor/:name" element={<DoctorList/>}/>
          
            
        </Routes>
        <Footer/>
    </Router>
  )
}
