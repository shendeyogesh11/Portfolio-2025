import React from "react";
import html from "../assets/html.png";
import profile1 from "../assets/profile1.png" 
import '../components/AboutPreview.css'
const AboutPreview = () => {
  return (
    <div>
      <section className="secondsection">
        <div className="leftsection">
          <h1 className="about">About Me,</h1>
          <p>Hi, I’m Yogesh Shende, a passionate Software Developer.</p>
          <p>With hands-on experience in real-time projects and a strong focus on building scalable, efficient solutions.</p>
          <p>I continuously evolve my skills and embrace new technologies.</p>
          <p>With a degree in Information Technology, I enhance my efficiency in software development.</p>
        </div>
        <div className="rightsection">
          <img src={profile1} alt="yogesh shende" />
        </div>
      </section>
    </div>
  );
};

export default AboutPreview;