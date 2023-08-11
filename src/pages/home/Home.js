import React from 'react'
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import styles from './Home.module.css'
import img1 from '../../assets/img1.gif';
import img2 from '../../assets/img2.gif';
import { Animate, Icons, Skills } from '../../components';


const Home = () => {

  const {theme} = useContext(ThemeContext);


  

  return (
  <>
      <section data-theme={theme} >
    <div className={styles["main-container"]}>
    <div className={styles["sub-container"]}>
    <p className={styles["title"]}>Success is a journey not a destination.</p>
    <h1>Make brand identities
    from scratch and help
    big brands stay mighty</h1>
    <p className={styles["title-1"]}><span>I'm Vishwajeet,</span> a designer with an affinity for working with creative people
    on everything from brand indentities and websites, to custom environmental graphics.</p>
    <button className="btn">Resume</button>
    </div>
   {
    theme === "light" ? (
      <img className={styles["my-image"]} src={img1} alt="img1" />
    )
    : 
    (
      <img className={styles["my-image"]} src={img2} alt="img2" />
    )
   }
    </div>
    <Icons/>
    {/* <Animate/> */}
    </section>
    <Skills/>
  </>
  )
}

export default Home