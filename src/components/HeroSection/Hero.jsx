import React from "react";
import Flickity from "react-flickity-component";
import image from "../../assets/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg";
import image2 from "../../assets/henry-co-cp-VMJ-mdKs-unsplash.jpg";
import image3 from "../../assets/joshua-rawson-harris-haUQC3eto2s-unsplash.jpg";
import "./Hero.scss";

const flickityOptions = {
  initialIndex: 1,
  draggable: ">1",
  freeScroll: true,
  wrapAround: true,
  pageDots: false,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false,
};

const Hero = () => {
  return (
    <div className="hero_section_wrapper">
      <Flickity
        options={flickityOptions}
        className={"carousel"}
        reloadOnUpdate={true}
        elementType="div"
      >
        <img className="flickity_image" src={image3} />
        <img className="flickity_image" src={image2} />
        <img className="flickity_image" src={image} />
      </Flickity>
    </div>
  );
};

export default Hero;
