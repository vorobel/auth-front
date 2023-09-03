import { useState } from "react";

import ArrowButton from "components/ArrowButton";
import Slide from "components/Slide";

import { slidesData } from "./data";

import styles from "./styles.module.scss";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    if (currentIndex < slidesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Slide data={slidesData[currentIndex]}>
      <div className={styles.buttonContainer}>
        <ArrowButton
          direction="left"
          onClick={goToPrevSlide}
          disabled={currentIndex === 0}
        />

        <ArrowButton
          direction="right"
          onClick={goToNextSlide}
          disabled={currentIndex === slidesData.length - 1}
        />
      </div>
    </Slide>
  );
};

export default Carousel;
