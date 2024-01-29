import React, { useState } from 'react';
import {FolderIcon, ApiIcon} from '../Common/Icons'

function ApiImport() {
    
    const apiOptions = [
        { value: "API Selector", name: "API Selector" },
        { value: "API Selector", name: "API Selector" },
        { value: "API Selector", name: "API Selector" },
    ];
    const SelectBox = (props) => {
        return (
            <select>
                {props.options.map((option) => (
                    <option key={option.value}
                        value={option.value}
                        defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        );
    };
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    return (
        <div className='ApitestCall'>
            <h3>API Test</h3>
            <div className='TopMenu'>
            <SelectBox options={apiOptions} ></SelectBox>
            <button><ApiIcon />API Test</button>
            </div>
            <div className='ImgUpload'>
                <div className='Title'>
                 <h4>IMG Upload</h4>
                 <button><FolderIcon /></button>
                </div>
                <div className='Imgwarp'>
                <img src={process.env.PUBLIC_URL + '/caraccident01.jpg'} alt="car accident" />
                </div>
            </div>
            <div className="tab-buttons">
        <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>
        Header
        </button>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
        Json input
        </button>
   
      </div>

      <div className="tab-content">
        {activeTab === 0 && <textarea></textarea>}
        {activeTab === 1 && <textarea></textarea>}

      </div>

        </div>
    )
}

export default ApiImport