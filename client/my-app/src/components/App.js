import './App.css';
import React from "react"
import Home from './Home';
import Create from './Create'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// {/* <input type="text" id="myInput" placeholder="Title..."/>
        // <span onClick="newElement()" className="addBtn">Add</span> */}
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
