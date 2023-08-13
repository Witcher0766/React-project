import React from 'react'
import styles from "./Icons.module.css";
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import instagram from "../../assets/instagram.png";
import { Link } from 'react-router-dom';


const Icons = () => {
  return (
    <>
         <div className={styles["my-icons"]}>
   <Link target='_blank' to="https://www.linkedin.com/in/vishwajeet-kumar-8080a51bb/">
   <div className={styles["icon-div"]}>
    <img className={styles["ico"]} src={linkedin} alt="linkedin" />
    </div>
   </Link>
 <Link target='_blank' to="https://github.com/Witcher0766">
 <div className={styles["icon-div"]}>
    <img className={styles["ico"]} src={github} alt="github" />
    </div>
 </Link>
    <Link target='_blank' to="https://instagram.com/vishwajeet_kr076?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
    <div className={styles["icon-div"]}>
    <img className={styles["ico"]} src={instagram} alt="instagram" />
    </div>
    </Link>
    </div>
    </>
  )
}

export default Icons