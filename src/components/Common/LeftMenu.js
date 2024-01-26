import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import {Makinarocks, SubmenuIcona, SubmenuIconb, SubmenuIconc, SubmenuIcond, SubmenuIcone, SubmenuIconf } from './Icons';


function LeftMenu() {
    const location = useLocation();

return(
<div className="LeftMenu">
     <ul className="Makinarocks">
        <li><Makinarocks/><span>Makinarocks</span></li>
     </ul>
     <ul className="Mainmenu">
        <li>
            <ul className="Submenu">
                <li>Administration</li>
                <li className={location.pathname === '/Administration' ? 'Active' : ''}><Link to="/Administration"><SubmenuIcona /><span>계정관리</span></Link></li>
            </ul>
        </li>
        <li>
            <ul className="Submenu">
                <li>Annotation Labeing</li>
                <li className={location.pathname === '/ImgLabeling' ? 'Active' : ''}><Link to="/ImgLabeling"><SubmenuIconb /><span>레이블링 화면</span></Link></li>
                <li className={location.pathname === '/Management' ? 'Active' : ''}><Link to="/Management"><SubmenuIconc /><span>레이블링 업무 할당</span></Link></li>
                <li className={location.pathname === '/ResultInspection' ? 'Active' : ''}><Link to="/ResultInspection"><SubmenuIcond /><span>레이블링 결과 검수</span></Link></li>
            </ul>

            </li>
            <li>
            <ul className="Submenu">
                <li>API Test</li>
                <li className={location.pathname === '/ApiImport' ? 'Active' : ''}><Link to="/ApiImport"><SubmenuIcone /><span>API 테스트 호출</span></Link></li>
                <li className={location.pathname === '/ApiReuslt' ? 'Active' : ''}><Link to="/ApiReuslt"><SubmenuIconf /><span>API 테스트 결과</span></Link></li>
            </ul>
        </li>
     </ul>
   

   
</div>
)
}

export default LeftMenu