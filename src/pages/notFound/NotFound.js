import React from 'react'
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import { Link } from 'react-router-dom'
import styles from "./NotFound.module.css";
import img8 from '../../assets/img7.gif';
import img7 from '../../assets/img8.gif';

const NotFound = () => {
    const {theme} = useContext(ThemeContext);


  return (
    <section data-theme={theme}>
    <div className={styles["found-container"]}>
    {
    theme === "light" ? (
      <img className={styles["found-image"]} src={img7} alt="img7" />
    )
    : 
    (
      <img className={styles["found-image"]} src={img8} alt="img8" />
    )
   }

   <div className={styles["found-data"]}>
   <p>Oh snap! The rat ate your file again.</p>
   <Link to="/">
   <button className='btn'>Go To Home</button>
   </Link>
   </div>
    </div>
    </section>

  )
}

export default NotFound