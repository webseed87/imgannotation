import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
                <li><SubmenuIconc /><span>레이블링 업무 할당</span></li>
                <li><SubmenuIcond /><span>레이블링 결과 검수</span></li>
            </ul>

            </li>
            <li>
            <ul className="Submenu">
                <li>API Test</li>
                <li><SubmenuIcone /><span>API 테스트 호출</span></li>
                <li><SubmenuIconf /><span>API 테스트 결과</span></li>
            </ul>
        </li>
     </ul>
</div>
)
}

export default LeftMenu