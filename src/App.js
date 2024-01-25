import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'reset-css';
import Login from './components/Login/Login';
import Administration from './components/Administration/AdminLayout'; 
import ImgLabeling from './components/ImgLabeling/LabelingLayout'; 
import Management from './components/ManagementSection/ManagementLayout'; 
import ResultInspection from './components/ManagementSection/ResultLayout'; 

function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Administration" element={<Administration />} />
        <Route path="/ImgLabeling" element={<ImgLabeling/>} />
        <Route path="/Management" element={<Management/>} />
        <Route path="/ResultInspection" element={<ResultInspection/>} />
      </Routes>

    </div>
  );
}

export default App;
