import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import ThemeContext from "../../context/themeContext";
import { useContext} from "react";
import img6 from '../../assets/img5.gif';
import img5 from '../../assets/img6.gif'
import Icons from '../../components/social-icons/Icons';
import { toast } from 'react-toastify';

const Contact = () => {
  const {theme} = useContext(ThemeContext);

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2jsqgeg", 
      'template_2ougxs9', form.current, 'RJoVJ6GBlTPaDCUI0')
      .then((result) => {
        toast.success("Message sent successfully")
      }, (error) => {
        toast.error(error.text)
      });
      e.target.reset();
  };


  return (
    <section data-theme={theme}>
      <div className={styles["contact-container"]}>
      <h1>Let's Talk</h1>
      <div className={styles["contact-sub-container"]}>
      <div className={styles["contact-sub-1"]}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text"
        name='user_name'
        placeholder='Full Name'
        required
         />
        <label>Email</label>
        <input type="email"
        name='user_email'
        placeholder='Your active email'
        required
         />
        <label>Subject</label>
        <input type="text"
        name='subject'
        placeholder='Subject'
        required
         />
         <label>Message</label>
         <textarea name="message" cols="30" rows="10"
        placeholder='Write Your Message' 
         ></textarea>
         <button className={styles["contact-btn"]} >Send Message</button>
        </form>
      </div>
      {
    theme === "light" ? (
      <img className={styles["contact-image"]} src={img5} alt="img5" />
    )
    : 
    (
      <img className={styles["contact-image"]} src={img6} alt="img6" />
    )
   }
      </div>
      </div>
      <Icons/>
    </section>
  )
}

export default Contact