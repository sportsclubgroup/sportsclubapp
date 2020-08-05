import React from "react";
import "./Gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero from "../../assets/background/hero-1.jpg";
import Ground from "../../assets/background/ground.jpg";
import One from "../../assets/images/one.jpg";
import Two from "../../assets/images/two.jpg";
import Three from "../../assets/images/three.jpg";
class Gallary extends React.Component {
  render() {
    return (
      <div>
        <h2>Our Image Gallery</h2>
        <Carousel autoPlay interval="5000" transitionTime="5000">
          <div>
            <img src={Hero} alt=""></img>
            <p className="legend">Our Stadium</p>
          </div>
          <div>
            <img src={Ground} alt=""></img>
            <p className="legend">Our Training ground</p>
          </div>
          <div>
            <img src={One} alt="" />
            <p className="legend">Our Classic Still 1</p>
          </div>
          <div>
            <img src={Two} alt="" />
            <p className="legend">Our Classic Still 2</p>
          </div>
          <div>
            <img src={Three} alt="" />
            <p className="legend">Our Classic Still 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Gallary;