import React from "react";
import web1 from '../images/homepage2.png';
import Common from "./Common";


const About = () => {
  return (
    <div className="About">
      <Common name="Welcome to About page" imgsrc={web1} visit="/contact" btnname="Contact Now"/>
    </div>
  );
};

export default About;