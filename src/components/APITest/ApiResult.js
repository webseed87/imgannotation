import React from 'react';

function ApiReuslt () {
const apivalue = {
    "active": false,
  "creating": false,
 "dragging": false,
 "uuid": "682e1539-7f29-470a-8b16-57905e1b97a2",
 "index": 0,
 "labelFillStyle": "#f00",
 "textFillStyle": "#fff",
  "fillStyle": "rgba(130,22,220,.6)",
"type": 1,  "active": false,
  "creating": false,
 "dragging": false,
 "uuid":
 "682e1539-7f29-470a-8b16-57905e1b97a2",
 "index": 0,
 "labelFillStyle": "#f00",
 "textFillStyle": "#fff",
  "fillStyle": "rgba(130,22,220,.6)",
"type": 1,  "active": false,
  "creating": false,
 "dragging": false,
 "uuid": "682e1539-7f29-470a-8b16-57905e1b97a2",
 "index": 0,
 "labelFillStyle":
 "#f00",
 "textFillStyle": "#fff",
  "fillStyle": "rgba(130,22,220,.6)",
"type": 1 
};
const jsonString = JSON.stringify(apivalue, null, 2); // The third argument is the number of spaces for indentation


    return (
        <div className='ApitestCall'>
        <h3>API Test</h3>
        <div className='TopMenu'>
      
        </div>
        <div className='ImgUpload'>
            <div className='Title'>
             <h4>API Response Message:</h4>
            <span>3000Ms</span>
            </div>
            <div className='Imgwarp'>
            <img src={process.env.PUBLIC_URL + '/caraccident01.jpg'} alt="car accident" />
            </div>
        </div>
        <div className="tab-buttons">
        Json output

  </div>

  <div className="tab-content">
    <textarea value={jsonString} readOnly></textarea>


  </div>

    </div>
    )
}

export default ApiReuslt