import React from "react";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation.js";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";
import { useEffect } from "react";
const Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);

  return <></>;
};
export default function Carousel({ data, renderComponent, type }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
