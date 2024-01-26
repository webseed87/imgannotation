import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'reset-css';
import Topbar from './components/Common/Topbar';
import LeftMenu from './components/Common/LeftMenu';
import Administration from './components/Administration/Administration'; 
import ImgLabeling from './components/ImgLabeling/Workspace'; 
import Management from './components/ManagementSection/Management'; 
import ResultInspection from './components/ManagementSection/ResultInspection'; 
import ApiImport from './components/APITest/ApiImport'; 
import ApiReuslt from './components/APITest/ApiResult'; 
import Login from './components/Login/Login'; 

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const handleLoginSuccess = () => {
    setShowLogin(false); 
  };
  return (
    
    <div className="App">

        <Topbar />
        <div className="container">
        <LeftMenu />
 
          {showLogin ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
          
        
              <div >
              <Routes>
              <Route path="/Administration" element={<Administration />} />
                <Route path="/ImgLabeling" element={<ImgLabeling />} />
                <Route path="/Management" element={<Management />} />
                <Route path="/ResultInspection" element={<ResultInspection />} />
                <Route path="/ApiImport" element={<ApiImport />} />
                <Route path="/ApiReuslt" element={<ApiReuslt />} />
      
              </Routes>
           
            </div>
          )}
        </div>
      </div>

  );
}
export default App;
