import React from 'react'
import styles from "./Icons.module.css";
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import instagram from "../../assets/instagram.png";


const Icons = () => {
  return (
    <>
         <div className={styles["my-icons"]}>
    <div className={styles["icon-div"]}>
    <img className={styles["ico"]} src={linkedin} alt="linkedin" />
    </div>
    <div className={styles["icon-div"]}>
    <img className={styles["ico"]} src={github} alt="github" />
    </div>
    <div className={styles["icon-div"]}>
    <img className={styles["ico"]} src={instagram} alt="instagram" />
    </div>
    </div>
    </>
  )
}

export default Icons