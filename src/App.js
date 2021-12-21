import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home.js';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContentSubmissionForm from './Components/Content/ContentSubmissionForm';
import AvatarButton from './Components/AvatarButton';

// this component should be a root router file
function App() {

  return (
        <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/form" element={<ContentSubmissionForm />} />
                <Route path="/avatar" element={<AvatarButton />} />
              </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
