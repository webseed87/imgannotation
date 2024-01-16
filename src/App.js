import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'reset-css';
import Login from './components/Login/Login';
import Administration from './components/Administration/AdminLayout'; 
import ImgLabeling from './components/ImgLabeling/LabelingLayout'; 


function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Administration" element={<Administration />} />
        <Route path="/ImgLabeling" element={<ImgLabeling/>} />

      </Routes>

    </div>
  );
}

export default App;
