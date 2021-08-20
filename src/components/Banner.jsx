import styles from "../styles/banner.module.scss";
import Header from "../components/Header";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Header />

      <div className={styles.main}>
        <span className={styles.text}>We Are Creatives</span>
        <img className={styles.arrow} src="/images/icon-arrow-down.svg" />
      </div>
    </div>
  );
};

export default Banner;
