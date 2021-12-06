import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import MainGame from './screens/MainGame';


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/game" element={<MainGame/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;