import React from "react";

import styles from "./header.module.css";


function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.header__icon}>
                <div className={styles.icon__inner} />
            </div>
            <span className={styles.header__title}>
                <span className={styles.title__text}>STUDENTS</span>
                <span className={styles.title__additional}>
                    <span className={styles.additional__text}> by </span>
                    <a href="https://github.com/cheaz910/doubletapp-frontend" className={styles.additional__githubLink}>cheaz910</a>
                </span>
            </span>
        </div>
    </header>
  );
}

export default Header;
