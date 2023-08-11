import React, { useContext } from 'react'
import styles from './Footer.module.css';
import ThemeContext from "../../context/themeContext";
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png';
import instagram from "../../assets/instagram.png";

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  const date = new Date()
const year = date.getFullYear()

  return (
    <section data-theme={theme}> 
    <div className={styles["footer-main-container"]}>
    <div className={styles["sub-footer"]}>
    <div className={styles["footer-icon"]}>
    <img className={styles["foot-icon"]} src={linkedin} alt="linkedin" />
    </div>
    <div className={styles["footer-icon"]}>
    <img className={styles["foot-icon"]} src={github} alt="github" />
    </div>
    <div className={styles["footer-icon"]}>
    <img className={styles["foot-icon"]} src={instagram} alt="instagram" />
    </div>
    </div>

     <div className={styles.footer}>
    &copy; {year} All Rights Reserved
    </div>
    </div>
    </section> 
 
  )
}

export default Footer