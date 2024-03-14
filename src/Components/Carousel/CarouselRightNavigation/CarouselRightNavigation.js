import React from "react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const updateIsEnd = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateIsEnd);

    // Cleanup the event listener on component unmount
    return () => {
      swiper.off("slideChange", updateIsEnd);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        />
      )}
    </div>
  );
};

export default CarouselRightNavigation;
