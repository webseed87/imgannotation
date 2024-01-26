import React, { useState, useRef, useEffect } from 'react';
import { Check, PrveIcon, NextIcon } from '../Common/Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const userOptions = [
    { value: "홍길동", name: "홍길동" },
    { value: "홍순애", name: "홍순애" },
    { value: "홍기범", name: "홍기범" },
];
const UserCheckData = [
    {
        dataNum: '1',
        dataSet: 'breat-cancer-w',
        imgName: '2월 4째주 손상 부품사진 1',
    },
    {
        dataNum: '2',
        dataSet: 'breat-cancer-w',
        imgName: '2월 4째주 손상 부품사진 1',
    },
    {
        dataNum: '3',
        dataSet: 'breat-cancer-w',
        imgName: '2월 4째주 손상 부품사진 1',
    },
    {
        dataNum: '4',
        dataSet: 'breat-cancer-w',
        imgName: '2월 4째주 손상 부품사진 1',
    },
    {
        dataNum: '5',
        dataSet: 'breat-cancer-w',
        imgName: '2월 4째주 손상 부품사진 1',
    },
    {
        dataNum: '6',
        dataSet: 'breat-cancer-w',
        imgName: '2월 4째주 손상 부품사진 1',
    },

]
function ResultInspection() {
    const [userDataCheckedRows, setUserDataCheckedRows] = useState({});
    const [swiper, setSwiper] = useState(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

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


    const handleCheckboxChange = (dataNum) => {
        setUserDataCheckedRows((prevCheckedRows) => {
            const newCheckedRows = { ...prevCheckedRows };
            newCheckedRows[dataNum] = !newCheckedRows[dataNum];
            return newCheckedRows;
        });
    };
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

    // 스와이퍼 선언
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
        observer: true,
        observeParents: true,
      };
    useEffect(() => {
        if (swiper) {
          // Update totalSlides when the number of slides changes
          swiper.on('observerUpdate', () => {
            setTotalSlides(swiper.slides.length);
          });
        }
      }, [swiper]);
    

    return (
        <div className='ManagementSection'>
            <div className='TopMenu'>
                <h3>Management Section</h3><button><Check />검수 완료</button>
            </div>
            <div className='ResultWarp'>
                <div className='UserSeletor'>
                    <SelectBox options={userOptions} ></SelectBox>
                    <table>
                        <thead>
                            <tr>
                                <th>수집데이터셋 명</th>
                                <th>이미지명</th>
                                <th>검수</th>

                            </tr>
                        </thead>
                        <tbody>
                            {UserCheckData.map(check => (
                                <tr key={check.dataNum}>
                                    <td>{check.dataSet}</td>
                                    <td>{check.imgName}</td>

                                    <td>      <input
                                        type="checkbox"
                                        id={check.dataNum}
                                        checked={userDataCheckedRows[check.dataNum] || false}
                                        onChange={() => handleCheckboxChange(check.dataNum)}
                                    />
                                        <label htmlFor={check.dataNum}></label></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='ImgList'>
                    <div className='SwiperWarp'>
                        <Swiper {...swiperParams}>
                            <SwiperSlide>
                                <img src={process.env.PUBLIC_URL + '/caraccident01.jpg'} alt="car accident" />
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
                    </div>

                    <div className='ImagesData'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Images data list</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>부품 1 (1)</td>
                                </tr>
                                <tr>
                                    <td>부품 1 (1)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResultInspection;