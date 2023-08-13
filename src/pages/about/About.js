import React from 'react'
import styles from "./About.module.css";
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import img3 from '../../assets/img4.gif';
import img4 from '../../assets/img3.gif';
import Work from '../../components/work/Work';
import Icons from '../../components/social-icons/Icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const {theme} = useContext(ThemeContext);


  return (
    <>
    <section data-theme={theme}>
      <div className={styles["about-container"]}>
      <h1>About</h1>
      <div className={styles["about-sub-container"]}>
      <div className={styles["about-sub-1"]}>
      <p>
      <b>Hi there!</b> I'm a UI designer and front-end developer from Bihar, India. I'm obessed with making things and even more obessed with making things better. Currently I'm actively involved in web designing or user interface.
My speciality is front-end web design and development using HTML, CSS, JAVASCRIPT, REACTJS.
      </p>
      <Link to="/contact"><button className='btn'>Contact Me <FontAwesomeIcon icon={faArrowUpRightFromSquare} shake /></button></Link>
      </div>
      {
    theme === "light" ? (
      <img className={styles["about-img"]} src={img3} alt="img3" />
    )
    : 
    (
      <img className={styles["about-img"]} src={img4} alt="img4" />
    )
   }
      </div>
      </div>
      <Icons/>
    </section>
    <Work/>
    </>
  )
}

export default About