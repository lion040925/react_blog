import React from "react";
import styles from "./styles.scss";

const Header = (props, context) => (
  <header className={styles.header}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Support</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Press</li>
          <li className={styles.listItem}>API</li>
          <li className={styles.listItem}>Jobs</li>
          <li className={styles.listItem}>Privacy</li>
          <li className={styles.listItem}>Terms</li>
          <li className={styles.listItem}>Directory</li>
          <li className={styles.listItem}>Language</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>© 2017 MyBlog</span>
    </div>
  </header>
);
export default Header;