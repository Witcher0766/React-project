import React from 'react'
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import styles from './Projects1.module.css';
import prod from "./project-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

// console.log(prod);

const Projects1 = () => {

  const {theme} = useContext(ThemeContext);


  return (
    <>
      <section data-theme={theme}>
     <div className={styles["prod-container"]}>
     <h1>Selected Projects</h1>
    {
      prod.map((item) => {
        const {id, name, description, src, btn1, btn2, tech, code, live} = item;
        return (
          item.id % 2 !== 0 ?
          <div className={styles["sub-prod-container"]} key={id}>
     <div className={styles["sub-prod-1"]}>
     <h2>{name}</h2>
     <p>{description}</p>
      <b>{tech}</b>
      <div className={styles["project-btn"]}>
      <Link><button className='btn'>{btn1} <FontAwesomeIcon icon={faGithub} bounce /></button>  </Link> 
      <Link target='_blank' to={live}  ><button className='btn'>{btn2} <FontAwesomeIcon icon={faUpRightFromSquare} bounce /></button>   </Link>
      </div>
     </div>
     <div className={styles["main-project-img"]}>
     <img className={styles["project-img"]} src={src} alt={name} />
     </div>
     </div>
     : 
     <div className={styles["sub-prod-container-1"]} key={id}>
     <div className={styles["sub-prod-1"]}>
     <h2>{name}</h2>
     <p>{description}</p>
      <b>{tech}</b>
      <div className={styles["project-btn"]}>
      <Link target='_blank' to={code} ><button className='btn'>{btn1} <FontAwesomeIcon icon={faGithub} shake /></button>   </Link>
      <Link target='_blank' to={live} ><button className='btn'>{btn2} <FontAwesomeIcon icon={faUpRightFromSquare} shake /></button>   </Link>
      </div>
     </div>
     <div className={styles["main-project-img"]}>
     <img className={styles["project-img"]} src={src} alt={name} />
     </div>
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