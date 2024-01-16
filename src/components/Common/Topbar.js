import React from 'react';
import {RunwayLogo,Usercercie } from './Icons';

function Topbar() {
return(
    <div className="Topbar">
        <div><RunwayLogo/></div>
        <div className="UserName"><Usercercie /><span >HYEOKJUN LEE</span></div>
    </div>
)
}

export default Topbar; 