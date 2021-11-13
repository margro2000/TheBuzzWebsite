import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title.js';
import Navigation from './Components/Navigation.js';
import SectionTitle from './Components/SectionTitle.js';
import ScrollSection from './Components/ScrollSection.js';
import Card from './Components/Card.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

function App() {

  return (
      <Router>
        <div className="App">
          <Title/>
            {/*<Login/>*/}
            {/*<Signup/>*/}
          <Navigation/>
          <SectionTitle content="Recommended for You"/>
          <Card/>
          <SectionTitle content="Top Content"/>
          <SectionTitle content="Best in Podcasts"/>
        </div>
      </Router>
  );
}

export default App;
