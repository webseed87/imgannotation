import React, { useState } from 'react';
import { EyeIcon, EyeClose, Arrowdown, Arrowup, Folder, SmallClean, LockOpen } from './Icons';

const Labelpice = ["부품1", "부품2", "부품3", "부품4", "부품5", "부품6", "부품7", "부품8", "부품9", "부품10", "부품11", "부품12", "부품13", "부품14", "부품15", "부품16", "부품17", "부품18", "부품19", "부품20", "부품21"];
const Labeldamage = ["손상1", "손상2", "손상3", "손상4", "손상5"];


function Label() {
  const [isSubMenuOpen, setSubMenuOpen] = useState(true);
  const [isDamageSubMenuOpen, setDamageSubMenuOpen] = useState(false);
  const [eyeIconStatus, setEyeIconStatus] = useState({});

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const toggleDamageSubMenu = () => {
    setDamageSubMenuOpen(!isDamageSubMenuOpen);
  };

  const toggleEyeIcon = (index, isDamage) => {
    const key = isDamage ? `damage${index}` : `pice${index}`;
    setEyeIconStatus((prevStatus) => ({ ...prevStatus, [key]: !prevStatus[key] }));
  };

  return (
    <div className="Label">
      <h4 className={isSubMenuOpen ? "ActiveLabel" : ""}>Label</h4>
      <div className="Labeltag">
        <ul className="Menu">
          <li >
            <div>
            <span
              className={`Eyeicon ${eyeIconStatus.pice0 ? "ActiveEyeIcon" : ""}`}
              onClick={() => toggleEyeIcon(0, false)}
              >
              {eyeIconStatus.pice0 ? <EyeClose /> : <EyeIcon />}
              </span>
              <span className="Foldericon"><Folder /></span>
              부품({Labelpice.length})
            </div>
            <div>
              <span className="Arrowicon" onClick={toggleSubMenu}>{isSubMenuOpen ? <Arrowup /> : <Arrowdown />} </span>
            </div>
          </li>
          {isSubMenuOpen && (
            <ul className="Submenu">
              {Labelpice.map((item, index) => (
                <li key={index}>
                  <div>
                    <span
                      className={`Eyeicon ${eyeIconStatus[`pice${index}`] ? "ActiveEyeIcon" : ""}`}
                      onClick={() => toggleEyeIcon(index, false)}
                    >
                      {eyeIconStatus[`pice${index}`] ? <EyeClose /> : <EyeIcon />}
                    </span>
                    {item}(1)
                  </div>
                  <div> <span className="Hovericon"><SmallClean /><LockOpen /></span></div>
                </li>
              ))}
            </ul>
          )}

          <li >
            <div>
              <span
                className={`Eyeicon ${isDamageSubMenuOpen ? "ActiveEyeIcon" : ""}`}
                onClick={() => toggleEyeIcon(0, true)}
              >
                {eyeIconStatus.damage0 ? <EyeClose /> : <EyeIcon />}
              </span>
              <span className="Foldericon"><Folder /></span>
              손상({Labeldamage.length})
            </div>
            <div>
              <span className="Arrowicon" onClick={toggleDamageSubMenu}>{isDamageSubMenuOpen ? <Arrowup /> : <Arrowdown />} </span>
            </div>
          </li> 
          {isDamageSubMenuOpen && (
            <ul className="Submenu">
              {Labeldamage.map((item, index) => (
                <li key={index}>
                  <div>
                    <span
                      className={`Eyeicon ${eyeIconStatus[`damage${index}`] ? "ActiveEyeIcon" : ""}`}
                      onClick={() => toggleEyeIcon(index, true)}
                    >
                      {eyeIconStatus[`damage${index}`] ? <EyeClose /> : <EyeIcon />}
                    </span>
                    {item}(1)
                  </div>
                  <div> <span className="Hovericon"><SmallClean /><LockOpen /></span></div>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Label;
