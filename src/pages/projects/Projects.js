import React from 'react'
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import Animate from '../../components/animate/Animate';
import styles from './Projects.module.css';
import Projects1 from '../../components/projects/Projects1';


const Projects = () => {

  const {theme} = useContext(ThemeContext);


  return (
    <>
      {/* <section data-theme={theme}>
      <div className={styles["projects-container"]}>
      </div>
      </section> */}
      <Projects1/>
    </>
  )
}

export default Projects