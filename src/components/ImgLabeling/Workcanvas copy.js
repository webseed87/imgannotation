import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrveIcon, NextIcon } from './Icons';
import 'swiper/css';
import { v4 as uuidv4 } from 'uuid';

const Labelpice = ["부품1", "부품2", "부품3", "부품4", "부품5", "부품6", "부품7", "부품8", "부품9", "부품10", "부품11", "부품12", "부품13", "부품14", "부품15", "부품16", "부품17", "부품18", "부품19", "부품20", "부품21"];


const Showcase = ({ selectedTool }) => {
  const [polygons, setPolygons] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const backgroundRef = useRef();
  const image = useRef();
  const [selectedLabel, setSelectedLabel] = useState(Labelpice[0]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);


  function handleLabelChange(polygonId, newLabel) {
    setPolygons((prevPolygons) =>
      prevPolygons.map((polygon) =>
        polygon.id === polygonId ? { ...polygon, selectedLabel: newLabel } : polygon
      )
    );
  }
  function startDraw(e) {
    if (selectedTool !== 'polygon') {
      return;
    }
  
    setIsMouseDown(true);
    const { x, y } = backgroundRef.current.getBoundingClientRect();
    const { clickPositionX, clickPositionY } = getCoordinates(e, x, y);

    const position = polygons.findIndex((object) => object.id === selectedObject);

    if (position !== -1) {
      const items = [...polygons];
      const item = { ...items[position] };

      // Check if the click is on an existing point
      const clickedPointIndex = item.data.findIndex((point) => {
        const distance = Math.sqrt(
          Math.pow(point.x - clickPositionX, 2) + Math.pow(point.y - clickPositionY, 2)
        );
        return distance < 10; // You can adjust this threshold as needed
      });

      if (clickedPointIndex !== -1) {
        // If a point is clicked, set it as the selected point
        setSelectedPoint({ polygonIndex: position, pointIndex: clickedPointIndex });
      } else {
        // If no point is clicked, add a new point
        item.data.push({ x: clickPositionX, y: clickPositionY });
      }

      items[position] = item;
      setPolygons(items);
      setHistory((prevHistory) => [...prevHistory, items]);
    } else {
      const object = {
        id: selectedObject,
        data: [
          {
            x: clickPositionX,
            y: clickPositionY,
          },
        ],
        selectedLabel: selectedLabel,
      };
      setPolygons((polygons) => [...polygons, object]);
      setHistory((prevHistory) => [...prevHistory, polygons]);
    }
  }
  
  function handleMouseMove(e) {
    if (isMouseDown && selectedTool === 'polygon') {
      if (selectedPoint !== null) {
        // If a point is selected, update its position
        const { x, y } = backgroundRef.current.getBoundingClientRect();
        const { clickPositionX, clickPositionY } = getCoordinates(e, x, y);

        const items = [...polygons];
        const item = { ...items[selectedPoint.polygonIndex] };
        item.data[selectedPoint.pointIndex] = { x: clickPositionX, y: clickPositionY };
        items[selectedPoint.polygonIndex] = item;
        setPolygons(items);
      } else {
        console.log('Dragging:', e.clientX, e.clientY);
        // 여기에서 클릭한 상태에서 드래그 중인 동안의 작업 수행
      }
    }
  }

  function handleMouseUp() {
    setIsMouseDown(false);
    setSelectedPoint(null); 
  }
  function getCoordinates(e, offsetX = 0, offsetY = 0) {
    const { clientX, clientY } = e;
    const clickPositionX = clientX - offsetX;
    const clickPositionY = clientY - offsetY;
    return { clickPositionX, clickPositionY };
  }

  function deleteAnnotation(id) {
    const newPolygons = polygons.filter((object) => object.id !== id);
    setPolygons(newPolygons);
  }

  function newAnnotation() {
    setIsDrawing(true);

    const newObjectId = uuidv4();
    setSelectedObject(newObjectId);
    const newPolygon = {
      id: newObjectId,
      data: [],
      selectedLabel: Labelpice[0],
    };
    setHistory((prevHistory) => [...prevHistory, polygons]);
    setRedoHistory([]);
    setPolygons((prevPolygons) => [...prevPolygons, newPolygon]);
  }

  function undoAnnotation() {
    if (polygons.length === 0) return;
    setRedoHistory((prevRedoHistory) => [...prevRedoHistory, polygons]);

    setPolygons((prevPolygons) => {
      const updatedPolygons = [...prevPolygons];
      const lastPolygon = updatedPolygons[updatedPolygons.length - 1];

      if (lastPolygon.data.length > 0) {
        lastPolygon.data.pop();
      } else {
        updatedPolygons.pop();
      }

      return updatedPolygons;
    });
  }

  function redoAnnotation() {
    if (redoHistory.length === 0) return;
    setHistory((prevHistory) => [...prevHistory, polygons]);
    const newPolygons = [...redoHistory[redoHistory.length - 1]];
    setRedoHistory((prevRedoHistory) => [...prevRedoHistory, polygons]);
    setPolygons(newPolygons);
  }

  function finishAnnotation() {
    setSelectedObject(null);

    setIsDrawing(false);
  }

  function getPositionString(item) {
    const position = item.data.map((coordinate) => {
      return `${coordinate.x}/${coordinate.y} `;
    });

    const positionString = position.toString().replaceAll(',', ' ').replaceAll('/', ',');
    return positionString;
  }

  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const swiperParams = {
    slidesPerView: 1,
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
    modules: {
      scrollbar: {
        draggable: false,
      },
    },
    simulateTouch: false,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
  };
  const totalSlides = swiper?.slides?.length || 0;

  return (
    <div>
      <Swiper {...swiperParams}>
        <SwiperSlide>
        <div  className="box" ref={backgroundRef} onMouseDown={startDraw} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <img
              src={process.env.PUBLIC_URL + '/caraccident01.jpg'}
              ref={image}
              alt="car accident"
            />
            <svg className="svg">
              {image.current && (
                <rect
                  x="0"
                  y="0"
                  width={image.current.naturalWidth}
                  height={image.current.naturalHeight}
                  fill="transparent"
                  style={{ cursor: 'crosshair' }}
                />
              )}
              <g>
                {polygons.map((item) => (
                  <g key={item.id}>
                    {item.data.map((coordinate, index) => (
                      <circle
                        key={index}
                        cx={coordinate.x}
                        cy={coordinate.y}
                        r="5"
                        fill="blue"

                      />
                    ))}
                    <polygon points={getPositionString(item)} className="polygon" />
                  </g>
                ))}
              </g>
            </svg>
          </div>
          {selectedObject != null ? (
            <button onClick={finishAnnotation}>Finish Annotation</button>
          ) : (
            <button onClick={newAnnotation}>New Annotation</button>
          )}
          <button onClick={undoAnnotation}>Undo</button>
          <button onClick={redoAnnotation}>Redo</button>
          <div className="panel">
            {polygons.map((item) => (
              <div className="object" key={item.id}>
                <span>Object ID: {item.id}</span>
                <button onClick={() => deleteAnnotation(item.id)}>Delete Object</button>
                <div className="data">
                  {item.data.map((item, index) => (
                    <span key={index}>
                      X: {item.x}, Y: {item.y}
                    </span>
                  ))}
                </div>
                <select
                  value={item.selectedLabel}
                  onChange={(e) => handleLabelChange(item.id, e.target.value)}
                >
                  {Labelpice.map((label, index) => (
                    <option key={index} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/caraccident02.jpg'} alt="car accident" />
        </SwiperSlide>
      </Swiper>
      <div className="Pagenavigation">
        <div onClick={handlePrevClick} ref={navigationPrevRef}>
          <PrveIcon />
        </div>
        <div className="SlideCounter">
          {mainImageIndex + 1} / {totalSlides}
        </div>
        <div onClick={handleNextClick} ref={navigationNextRef}>
          <NextIcon />
        </div>
      </div>
      <style jsx>
        {`
rect {
cursor: crosshair;
}

img {
display: block;
}

.container {
display: flex;
flex-wrap: wrap;
}

.box {
width: 100%;
height: 100%;
position: relative;
margin-bottom: 16px;
}

.svg {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
}

.polygon {
fill: rgba(255, 0, 0, 0.1);
stroke: red;
cursor: crosshair;
stroke-width: 1;
}

.panel {
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: flex-start;
gap: 16px;
}

.object {
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
border: 1px solid;
padding: 16px;
}

.data {
display: grid;
grid-template-columns: repeat(3, 1fr);
}

button {
cursor: pointer;
border: 1px solid;
padding: 4px 8px;
background: white;
}
`}
      </style>
    </div>
  );
};

function Workcanvas({ selectedTool }) {
  return (
    <div className="Workcanvas">
      <h4>food_20230123.png</h4>
      <div className="canvas">
        <Showcase selectedTool={selectedTool} />
      </div>
    </div>
  );
}

export default Workcanvas;
