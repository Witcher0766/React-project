import React from 'react'
import styles from './Work.module.css';
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";

const Work = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
    <section data-theme={theme}>
    <div className={styles["work-container"]}>
    <h1>Work</h1>

    <div className={styles["sub-work-container-right"]}>
    <h3 className={styles["sde-heading"]}>SDE Full Time <span style={{color:"#6c757d"}}>[June 2024 - Current]</span></h3>
    <h5>SCHOYO</h5>
    <ul>
        <li><span style={{fontWeight: 800}}>Tech: </span>Angular, Typescript, Mysql, SpringBoot, Kotlin, XML</li>
    </ul>
    </div>

    <div className={styles["sub-work-container"]}>
    <h3 className={styles["sde-heading-1"]}>SDE Intern <span style={{color:"#6c757d"}}>[Dec 2023 - May 2024]</span></h3>
    <h5>SCHOYO</h5>
    <ul>
        <li><span style={{fontWeight: 800}}>Tech: </span>Angular, Typescript, Mysql, SpringBoot</li>
    </ul>
    </div>

    <div className={styles["sub-work-container-right"]}>
    <h3 className={styles["sde-heading"]}>Web Developer Intern <span style={{color:"#6c757d"}}>[Jul 2023 - Aug 2023]</span></h3>
    <h5>K3S</h5>
    <ul>
        <li><span style={{fontWeight: 800}}>Tech: </span>HTML, CSS, Javascript, NodeJS, ExpressJS, MongoDB, Figma, ReactJS, Github</li>
    </ul>
    </div>

 
    </div>
    </section>
    </>
  )
}

export default Work