'use client';
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import HistoryCard from "./HistoryCard";
import { historyData } from "../../data";

interface HistoryItem {
  id: number;
  // Add other properties as per your history data structure
}

const History: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slider = useRef<Slider | null>(null);

  const handleSelectedHistoryCard = (selectedCard: HistoryItem) => {
    const selectedIndex = historyData.findIndex(
      (item) => item.id === selectedCard.id
    );

    if (selectedIndex !== -1 && slider.current) {
      slider.current.slickGoTo(selectedIndex);
    }
  };

  const NextArrow: React.FC<any> = (props) => {
    const { slideCount, currentSlide, className, onClick } = props;
    return (
      <div className={`${className} flex items-center`} onClick={onClick}>
        {currentSlide + 1 !== slideCount ? (
          <img src="/images/arrow-down-active.svg" alt="ArrowDownActive" />
        ) : (
          <img src="/images/arrow-down-inactive.svg" alt="ArrowDownInactive" />
        )}
      </div>
    );
  };

  const PrevArrow: React.FC<any> = (props) => {
    const { currentSlide, className, onClick } = props;
    return (
      <div className={`${className} flex items-center`} onClick={onClick}>
        {currentSlide !== 0 ? (
          <img src="/images/arrow-up-active.svg" alt="ArrowUpActive" />
        ) : (
          <img src="images/arrow-up-inactive.svg" alt="ArrowUpInactive" />
        )}
      </div>
    );
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    verticalSwiping: true,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setCurrentSlideIndex(nextSlide);
    },
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <section className="history container mx-auto flex flex-col justify-center items-center gap-12 mb-32 pt-24">

      <Slider {...settings} ref={slider}>
        {historyData.map((historyItem, index) => (
          <HistoryCard
            key={index}
            historyItem={historyData[currentSlideIndex]}
            nextHistorySlide={historyData[currentSlideIndex + 1]}
            handleSelectedHistoryCard={handleSelectedHistoryCard}
          />
        ))}
      </Slider>
      <div className="arrows flex items-center mb-4">
        <PrevArrow
          slideCount={historyData.length}
          currentSlide={currentSlideIndex}
          className="mr-2"
          onClick={() => slider.current?.slickPrev()}
        />
        <NextArrow
          slideCount={historyData.length}
          currentSlide={currentSlideIndex}
          className="ml-2"
          onClick={() => slider.current?.slickNext()}
        />
      </div>
    </section>
  );
};

export default History;
