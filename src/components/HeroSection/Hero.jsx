import React from "react";
import Flickity from "react-flickity-component";
import image2 from "../../assets/henry-co-cp-VMJ-mdKs-unsplash.jpg";
import image3 from "../../assets/joshua-rawson-harris-haUQC3eto2s-unsplash.jpg";
import image from "../../assets/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg";
import image4 from "../../assets/content-pixie-_ysU7TqBiZI-unsplash.jpg";
import image5 from "../../assets/mike-von-dwvtsZsyTZw-unsplash.jpg";
import "./Hero.scss";

const flickityOptions = {
  initialIndex: 1,
  draggable: ">1",
  wrapAround: true,
  pageDots: false,
  pauseAutoPlayOnHover: false,
  autoPlay: 3000,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  accessibility: true,
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
        <img alt="sliderImage1" className="flickity_image" src={image2} />
        <img alt="sliderImage2" className="flickity_image" src={image3} />
        <img alt="sliderImage3" className="flickity_image" src={image} />
        <img alt="sliderImage4" className="flickity_image" src={image4} />
        <img alt="sliderImage5" className="flickity_image" src={image5} />
        <img alt="sliderImage6" className="flickity_image" src={image} />
        <img alt="sliderImage7" className="flickity_image" src={image3} />
      </Flickity>
    </div>
  );
};

export default Hero;
