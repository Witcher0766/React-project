import React, { useContext } from 'react'
import styles from './Skills.module.css';
// import * as images from "../../assets/img";
import ThemeContext from "../../context/themeContext";


// const {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13} = images;

// let array = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const techStack = ["ReactJS", "NodeJS", "ExpressJS", "MongoDB",
   "Redux", "Angular", "Typescript", "Javascript", "Mysql",
   "SpringBoot", "Bootstrap", "Tailwind CSS", "Kotlin","Framer Motion", "XML", "HTML", "CSS", "Github", "Firebase",
   "Figma", "Excel"
];


const Skills = () => {

  const {theme} = useContext(ThemeContext);


  // return (
  //   <section data-theme={theme}>
  //       <div className={styles["skills"]}  >
  //       <h1>Tech Stack</h1>
  //     <div className={styles["main-skills"]}>
  //     {
  //       array.map((count, id) => {
  //         return (
  //           <div className={styles["sub-skills"]} key={id}>
  //      <img src={count} className={styles["skills-icons"]} alt="img1" />
  //      </div>
  //         )
  //       })
  //     }
  //     </div>
  //       </div>    
  //   </section>
  // )

  return (
    <section data-theme={theme}>
      <div className={styles["skills"]}>
        <h1>Tech Stack</h1>
        <div className={styles["main-skills"]}>
          {techStack.map((tech, index) => (
            <div className={styles["sub-skills"]} key={index}>
              <span className={styles["skills-name"]}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills