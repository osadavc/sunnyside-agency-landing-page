import { useState } from "react";
import styles from "../styles/header.module.scss";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  return (
    <div className={styles.header}>
      <img src="/images/logo.svg" />

      <div className={styles.menu}>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>

        <div className={styles.contact}>Contact</div>
      </div>

      <img
        src="/images/icon-hamburger.svg"
        className={styles.mobileToggle}
        onClick={changeMobileMenu}
      />

      <div
        className={
          mobileMenu
            ? `${styles.mobileMenu} ${styles.active}`
            : `${styles.mobileMenu}`
        }
      >
        <h2>About</h2>
        <h2>Services</h2>
        <h2>Projects</h2>

        <div className={styles.mobileContact}>Contact</div>
      </div>
    </div>
  );
};

export default Header;
