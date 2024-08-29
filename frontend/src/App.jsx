import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Make sure the path is correct
import SignUp from './components/SignUp';
import Home from './components/Home';
import Blog from './Components/Blog';
import Navbar from './Navbar';
import OpenCommunity from './Components/OpenCommunty';
import Contact from './Components/Contact';
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

        {/* Add more routes here */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
