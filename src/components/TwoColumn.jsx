import styles from "../styles/twoColumn.module.scss";

const TwoColumn = ({ title, description, image, reverse }) => {
  return (
    <div
      className={
        reverse ? `${styles.main} ${styles.reverse}` : `${styles.main}`
      }
    >
      <div className={styles.left}>
        <div className={styles.textContainer}>
          <h1>{title}</h1>
          <p> {description} </p>
          <div className={styles.button}>
            <img src="https://i.ibb.co/TB2DVgK/learnmore.png" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img src={image} />
      </div>
    </div>
  );
};

export default TwoColumn;
