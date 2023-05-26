import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderRC = ({ images }) => {
  const styleObj = {
    objectFit: 'contain',
    height: '100%'
    };
    const styleCont = {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      objectFit: 'contain',

    }
  return (
    <div style={styleCont}>
      <Carousel
        showArrows={true}
        autoPlay={false}
        showIndicators={false}
        infiniteLoop={true}
        dynamicHeight={false}
        interval={40000}
        showThumbs={false}
      >
        {images.map((image, i) => (
          // <img style={{height: "30%", width:"50%"}} key={i} src={image.url} alt="slides" />
          <img style={styleObj} key={i} src={image.url} alt="slides" />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderRC;