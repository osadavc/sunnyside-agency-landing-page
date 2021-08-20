import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" />
      </div>

      <div className={styles.footerNav}>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
      </div>

      <div className={styles.socialMedia}>
        <img src="/images/icon-facebook.svg" />
        <img src="/images/icon-instagram.svg" />
        <img src="/images/icon-twitter.svg" />
        <img src="/images/icon-pinterest.svg" />
      </div>
    </div>
  );
};

export default Footer;
