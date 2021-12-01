import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title.js';
import Navigation from './Components/Navigation.js';
import SectionTitle from './Components/SectionTitle.js';
import ScrollSection from './Components/ScrollSection.js';
import Home from './Components/Home.js';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// this component should be a root router file
function App() {

  return (
        <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
