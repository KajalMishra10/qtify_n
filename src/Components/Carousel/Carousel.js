import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/core";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation.js";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";

const Controls = ({ data, swiper }) => {
  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data, swiper]);

  return <></>;
};

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        modules={[Navigation]}
        navigation
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
      >
        <Controls />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

