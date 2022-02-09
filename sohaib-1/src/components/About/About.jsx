import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="blog">
      <div className="blog-1">
        <h1 className="about">About Me</h1>
      </div>
      <div className="blog-2">
        <div style={{display:"flex",justifyContent:"space-around"}} >
          <h2>Why eating healthy is half of the job </h2>
          <div className="author">
            <img src="img/author-1.jpg" alt="" />
            <p>Sarah H.</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          adipisci illo a fuga? Accusantium ducimus libero, pariatur provident
          voluptas quia veritatis iste, exercitationem
        </p>
        <a href="#">
          Read more
        </a>
      </div>
    </div>
    
  );
};
export default About;
