import React from "react";
import "./About.css";

const About = () => {
  return (
    <div class="blog">
    <div class="blog-1">
      <img src="img/blog-1.jpg" alt=""/>
      <div class="under-img">
        <div class="date">
          <span>12</span>
          <p>january</p>
        </div>
        <div class="icons">
          <a href="#"><ion-icon style="font-size: 1.5rem ;color:#cd3e35;;" name="eye-outline"></ion-icon></a>
          <a href="#"><ion-icon style="font-size: 1.5rem; color:#cd3e35;;" name="heart-outline"></ion-icon></a>
          <a href="#"><ion-icon style="font-size: 1.5rem ;color:#cd3e35;;" name="share-social-outline"></ion-icon></a>
          
        </div>
      </div>
    </div>

    <div class="blog-2">
      <div style="display: flex;justify-content: space-around;">
        <h2>Why eating healthy is half of the job </h2>
        <div class="author">
          <img src="img/author-1.jpg" alt=""/>
          <p>Sarah H.</p>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci illo a fuga? Accusantium ducimus libero, pariatur provident voluptas quia veritatis iste, exercitationem </p>
      <a href="#">Read more<ion-icon style="font-size: 1.5rem;color:#cd3e35;padding-left: 0.5rem;margin-bottom: -0.4rem;" name="caret-forward-circle-outline"></ion-icon></a>
    </div>
  </div>
  );
};

export default About;
