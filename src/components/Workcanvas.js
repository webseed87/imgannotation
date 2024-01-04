import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrveIcon, NextIcon } from './Icons';
import 'swiper/css'; 

const Showcase = () => {
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
  };
  const totalSlides = swiper ? swiper.slides.length : 0;

  return (
    <div>
      <Swiper {...swiperParams}>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/caraccident01.jpg'} /> </SwiperSlide>
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
    </div>
  );
};

function Workcanvas() {
  return (
    <div className="Workcanvas">
      <h4>food_20230123.png</h4>
      <div className="canvas">
        <Showcase />
      </div>
    </div>
  );
}

export default Workcanvas;
