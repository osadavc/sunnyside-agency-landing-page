import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/images/logo.svg" />

      <div className={styles.menu}>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>

        <div className={styles.contact}>Contact</div>
      </div>

      <img src="/images/icon-hamburger.svg" className={styles.mobileMenu} />
    </div>
  );
};

export default Header;
