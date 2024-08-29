import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Make sure the path is correct
import SignUp from './components/SignUp';
import Home from './components/Home'
import Blog from './Components/Blog';
import RegNgo from './components/RegNgo';
import Navbar from './components/Navbar';
import OpenCommunity from './Components/OpenCommunty';
import Contact from './Components/Contact';
// import InventoryManagement from './Components/Inventory';
import DonorManagement from './Components/DonorManagement';
import ImpactManagement from './Components/ImpactManagement';
import StaffManagement from './Components/StaffManagement';
import EventManagement from './Components/EventManagement';
import AddBlog from './components/AddBlog';
import Info from './components/NGO/Info';
import DisplayInventory from './components/NGO/DisplayInventory';
import GetInvolved from './components/getInvolved';

import DonationManagement from './Components/DonationManagement';
import MoneyTracking from './Components/MoneyTracking';
import CrowdFunding from './Components/CrowdFunding';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/AddBlog" element={<AddBlog/>}/>
        <Route path="/community" element={<OpenCommunity />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/DisplayInventory" element={<DisplayInventory />} />
        <Route path="/RegNgo" element={<RegNgo />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        

        {/* Add more routes here */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
