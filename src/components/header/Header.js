import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import {FaHamburger} from 'react-icons/fa';
import {GiCrossMark} from 'react-icons/gi';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ThemeContext from "../../context/themeContext";



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const {toggleTheme, theme} = useContext(ThemeContext);

  const toggleDarkMode = (checked) => {
    if(theme === "light") {
      setDarkMode(checked);
    }
    else {
      setDarkMode(checked)
    }
    toggleTheme()
  
  };


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };




  // scrolll page 

  const fixNav = () => {
    if(window.scrollY > 50) {
      setScrollPage(true);
    }
    else {
      setScrollPage(false);
    }
  }

  window.addEventListener("scroll", fixNav)



  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
  return (
    <header className={scrollPage ? `${styles.fixed}` : null} data-theme={theme}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src="https://raw.githubusercontent.com/mayankchaudhary26/Cool-Readme-ideas/master/data/octocat/spidertocat.png" className={styles.logo} alt="logo" />
          </NavLink>
        </div>
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]} `
          }
        >
          {/* <NavLink className={styles["menu-icon"]} to="/">
            <img
              src="https://raw.githubusercontent.com/mayankchaudhary26/Cool-Readme-ideas/master/data/octocat/spidertocat.png"
              className={styles.logo1}
              alt=" logo"
              onClick={hideMenu}
            />
          </NavLink> */}
          <GiCrossMark
            className={styles["menu-icon"]}
            size={22}
          
            onClick={hideMenu}
          />
          <ul>
            <li>
              <NavLink className={activeLink} to="/" onClick={hideMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/projects" onClick={hideMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/contact" onClick={hideMenu}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/about" onClick={hideMenu}>
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink className={activeLink} to="/resume" onClick={hideMenu}>
                Resume
              </NavLink>
            </li> */}
            <li>
            <NavLink>
            <DarkModeSwitch
            className={styles["toggle-btn"]}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={28}
      sunColor="blue"
      // onClick={toggleTheme}
    />
            </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles["menu-icon"]}>
          <FaHamburger className={styles["burger"]} size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
