// src/components/AboutMe.js
import React from 'react';
import foto from "../images/foto.jpg"

function AboutMe() {
  return (
    <div className="about-me">
      <h1>ABOUT ME</h1>
      <h2>TABYLDIEVA AKMARAL CS-24</h2>
      <div>
        <img  className='image-section' src={foto} />
      </div>
      <h3>I am the eldest daughter in my family. I study at Salymbekov University, currently in my second year.
              I love playing basketball. My whole family lives in Moscow, and I live here alone with my little brother.
              In the future, I plan to open a medical center. I enjoy learning new things and always strive to improve myself.
              I am passionate about technology and development, and I believe that education is the key to success.</h3>

    </div>
    
  );
}
export default AboutMe;