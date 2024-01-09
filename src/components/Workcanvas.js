import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrveIcon, NextIcon } from './Icons';
import 'swiper/css'; 
import { v4 as uuidv4 } from "uuid";



const Showcase = ({ selectedTool }) => {
  const [polygons, setPolygons] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const backgroundRef = useRef();
  const image = useRef();

  function startDraw(e) {
    if (selectedTool === "polygon") {
    const { x, y } = backgroundRef.current.getBoundingClientRect();
    console.log('Image size:', image.current.naturalWidth, 'x', image.current.naturalHeight);

    const { clickPositionX, clickPositionY } = getCoordinates(e, x, y);
    const position = polygons.findIndex(
      (object) => object.id === selectedObject
    );
  
    if (position !== -1) {
      const items = [...polygons];
      const item = { ...items[position] };
      item.data.push({ x: clickPositionX, y: clickPositionY });
      items[position] = item;
      setPolygons(items);
    } else {
      const object = {
        id: selectedObject,
        data: [
          {
            x: clickPositionX,
            y: clickPositionY,
          },
        ],
      };
      setPolygons((polygons) => [...polygons, object]);
    }
  }
  }

  function getCoordinates(e) {
    const { x, y } = backgroundRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const clickPositionX = clientX - x;
    const clickPositionY = clientY - y;
    return { clickPositionX, clickPositionY };
  }

  function deleteAnnotation(id) {
    const newPolygons = polygons.filter((object) => object.id !== id);
    setPolygons(newPolygons);
  }

  function newAnnotation() {
    setSelectedObject(uuidv4());
  }

  function finishAnnotation() {
    setSelectedObject(null);
  }

  function getPositionString(item) {
    const position = item.data.map((coordinate) => {
      return `${coordinate.x}/${coordinate.y} `;
    });

    const positionString = position
      .toString()
      .replaceAll(",", " ")
      .replaceAll("/", ",");
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
  const totalSlides = swiper ? swiper.slides.length : 0;

  return (

    <div>
      <Swiper {...swiperParams}
          onBeforeInit={(swiper) => {
            swiper.params.simulateTouch = false;
            swiper.params.touchEventsTarget = 'wrapper';
            swiper.touchEventsData.stop = true;
          }}
      >
        <SwiperSlide>
        <div className="box" ref={backgroundRef} onClick={startDraw}>
          <img src={process.env.PUBLIC_URL + '/caraccident01.jpg'} ref={image}/> 
          <svg className="svg">
              {image.current && (
             <rect
             x="0"
             y="0"
             width={image.current.naturalWidth}
             height={image.current.naturalHeight}
             fill="transparent"
             style={{ cursor: "crosshair" }}
           />
              )}
              <g>
                {polygons.map((item) => {
                  return (
                    <polygon
                      key={item.id}
                      points={getPositionString(item)}
                      className="polygon"
                    />
                  );
                })}
              </g>
            </svg>
         
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/caraccident02.jpg'} /> </SwiperSlide>

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
        <Showcase selectedTool={selectedTool}/>
      </div>
    </div>
  );
}



export default Workcanvas;
