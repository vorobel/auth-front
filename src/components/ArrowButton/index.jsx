import { ReactComponent as ArrowLeftImage } from "./assets/arrowLeft.svg";
import { ReactComponent as ArrowRightImage } from "./assets/arrowRight.svg";

import styles from "./styles.module.scss";

const ArrowButton = ({ onClick, direction, disabled = false }) => (
    direction && (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${styles.arrowButton} ${disabled && styles.arrowDisabled}`}
      >
        {direction === "left" ? <ArrowLeftImage /> : <ArrowRightImage />}
      </button>
    )
);


export default ArrowButton;
