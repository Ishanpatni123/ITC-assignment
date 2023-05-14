import React from "react";
import Navbar from "./components/inc/navbar";
import Footer from "./components/inc/Footer";
import Home from "./components/pages/home";
import Projects from "./components/pages/Projects";
import Project1 from "./components/pages/Project1";
import ToDo from "./components/pages/ToDo";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Project1" element={<Project1 />} />

          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ToDo" element={<ToDo />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
