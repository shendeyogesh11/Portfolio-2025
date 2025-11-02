import React, { useEffect } from 'react'
import Typed from "typed.js"
import '../components/HeroSection.css'
import bg from '../assets/bg.png'

const HeroSection = () => {

 useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["Software Developer", "Frontend Developer", "Backend Developer", "Full-Stack Developer"],
      typeSpeed: 50,
      
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Yogesh_Resume.pdf";
    link.href =
      "https://docs.google.com/document/d/1x8z34Pxj5b1uE_OKmIwk_NASY3wFM5tIjBNDQDUu1Sg/edit?usp=drive_link";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div>
      <section className="firstsection">
        <div className="leftSection">
          Hey, I am <span className="purple">Yogesh</span>

          <div>and I'm a passionate</div>
          <span id="element"></span>
          <div className="buttons">
            <button className="btn" onClick={handleDownload} target="_blank">Download Resume</button>
            <a href="https://github.com/shendeyogesh11" target="_blank" rel="noopener noreferrer" ><button className="btn" id='btn2'>Visit Github</button></a>
            </div>
          </div>
          <div className="rightSection">
          <img src={bg} alt="Developer illustration" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection 
