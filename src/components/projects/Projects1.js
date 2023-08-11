import React from 'react'
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import styles from './Projects1.module.css';
import prod from "./project-data";

// console.log(prod);

const Projects1 = () => {

  const {theme} = useContext(ThemeContext);


  return (
    <>
      <section data-theme={theme}>
     <div className={styles["prod-container"]}>
     <h1>Projects</h1>
    {
      prod.map((item) => {
        const {id, name, description, src, btn1, btn2, tech} = item;
        return (
          <div className={styles["sub-prod-container"]} key={id}>
     <div className={styles["sub-prod-1"]}>
     <h2>{name}</h2>
     <p>{description}</p>
      <b>{tech}</b>
      <div className={styles["project-btn"]}>
      <button className='btn'>
        {btn1}
      </button>
      <button className='btn'>{btn2}</button>
      </div>
     </div>
     <img className={styles["project-img"]} src={src} alt={name} style={{width: "50px"}}/>
     </div>
        )
      })
    }
     </div>
      </section>
    </>
  )
}

export default Projects1