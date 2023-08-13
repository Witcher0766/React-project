import React from 'react'
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import Animate from '../../components/animate/Animate';
import styles from './Projects.module.css';
import Projects1 from '../../components/projects/Projects1';
import Icons from '../../components/social-icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {

  const {theme} = useContext(ThemeContext);


  return (
    <>
      <section data-theme={theme}>
      <div className={styles["main-project-container"]}>
      <p>Hi👋, I'm Vishwajeet Kumar</p>
      <p>A passionate frontend developer and designer</p>
      <p>You can find me here 🧑<FontAwesomeIcon icon={faHandPointRight} shake /></p>
      <Animate />
      </div>
      <Icons/>
      </section>
      <Projects1/>
    </>
  )
}

export default Projects