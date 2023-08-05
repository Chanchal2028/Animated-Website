import React from "react";
import web from '../images/homepage1.jpg'
import Common from "./Common";

const Home = () => {
  return (
    <div className="Home">
     <Common name="Grow your buisness with" imgsrc={web} visit="/service" btnname="Get Started"/>
    </div>
  );
};

export default Home;