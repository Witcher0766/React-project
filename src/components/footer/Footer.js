import React, { useContext } from 'react'
import styles from './Footer.module.css';
import ThemeContext from "../../context/themeContext";
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png';
import instagram from "../../assets/instagram.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  const date = new Date()
const year = date.getFullYear()

  return (
    <section data-theme={theme}> 
    <div className={styles["footer-main-container"]}>
    <div className={styles["sub-footer"]}>
   <Link target='_blank' to="https://www.linkedin.com/in/vishwajeet-kumar-8080a51bb/">
   <div className={styles["footer-icon"]}>
    <img className={styles["foot-icon"]} src={linkedin} alt="linkedin" />
    </div>
   </Link>
    <Link target='_blank' to="https://github.com/Witcher0766">
    <div className={styles["footer-icon"]}>
    <img className={styles["foot-icon"]} src={github} alt="github" />
    </div>
    </Link>
    <Link target='_blank' to="https://instagram.com/vishwajeet_kr076?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
    <div className={styles["footer-icon"]}>
    <img className={styles["foot-icon"]} src={instagram} alt="instagram" />
    </div>
    </Link>
    </div>

     <div className={styles.footer}>
    &copy; {year} Thanks for scrolling😄, that's all folks.
    </div>
    </div>
    </section> 
 
  )
}

export default Footer