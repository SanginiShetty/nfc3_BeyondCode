import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Make sure the path is correct
import SignUp from './components/SignUp';
import Home from './components/Home'
import Blog from './Components/Blog';
import Navbar from './Navbar';
import OpenCommunity from './Components/OpenCommunty';
import Contact from './Components/Contact';
import InventoryManagement from './Components/Inventory';
import DonorManagement from './Components/DonorManagement';
import ImpactManagement from './Components/ImpactManagement';
import StaffManagement from './Components/StaffManagement';
import EventManagement from './Components/EventManagement';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/community" element={<OpenCommunity />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/donor" element={<DonorManagement
         />} />
         <Route path="/impact" element={<ImpactManagement />} />
         <Route path="/staff" element={<StaffManagement />} />
         <Route path="/event" element={<EventManagement />} />


        {/* Add more routes here */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
