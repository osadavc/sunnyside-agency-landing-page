import styles from "../styles/twoColumnImages.module.scss";

const TwoColumnImages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.textContainer}>
          <h3>Graphic design</h3>
          <h4>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </h4>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.textContainer}>
          <h3>Photography</h3>
          <h4>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnImages;
