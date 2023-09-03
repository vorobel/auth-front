import styles from "./styles.module.scss";

const Slide = ({ data, children }) => {
  const { title, subTitle, text, image } = data;

  return (
    <div
      className={styles.slide}
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className={styles.carouselTitleSection}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subTitle}>{subTitle}</h3>
      </div>

      <p className={styles.text}>{text}</p>
      
      {children}
    </div>
  );
};

export default Slide;
