import React from 'react'
import styles from './Work.module.css';
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";

const Work = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <section data-theme={theme}>
    <div className={styles["work-container"]}>
    <h1>Work</h1>
    <div className={styles["sub-work-container"]}>
    <h3>Web Developer Intern</h3>
    <h5>Bhangola</h5>
    <ul>
        <li>Designed and developed responsive Ecommerce website using REACTJS, FIREBASE from scratch</li>
        <li>Worked on VS CODE, FIGMA and GITHUB, Created a attractive design for Bhangola Ecommerce site.</li>
        <li>Improved website performance and Design.</li>
    </ul>
    <p></p>
    </div>
    </div>
    </section>
  )
}

export default Work